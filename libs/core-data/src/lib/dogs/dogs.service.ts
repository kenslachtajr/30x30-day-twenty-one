import { Injectable } from '@angular/core';
import { Dog } from './dog.model';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.thedogapi.com/v1';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  modelAll = 'breeds?limit=20&page=6';
  model = 'breeds';
  apiKey = '?api_key=62520b0c-186a-4e38-9ce7-f74358fbcc83';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getApiKeyUrl() {
    return `${BASE_URL}/${this.modelAll}${this.apiKey}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}${this.apiKey}`;
  }

  findOne(dog: Dog) {
    return this.httpClient.get(this.getUrlForId(dog));
  }

  all() {
    return this.httpClient.get(this.getApiKeyUrl());
  }

  create(dog: Dog) {
    return this.httpClient.post(this.getUrl(), dog);
  }

  delete(dog: Dog) {
    return this.httpClient.delete(this.getUrlForId(dog.id));
  }

  update(dog: Dog) {
    return this.httpClient.put(this.getUrlForId(dog.id), dog);
  }
}
