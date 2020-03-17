export interface Dog {
    id: number,
    name: string,
    description: string,
    bred_for: string,
    breed_group: string,
    life_span: string,
    history: string,
    temperament: string
  }

export const emptyDog: Dog = {
    id: null,
    name: '',
    description: '',
    bred_for: '',
    breed_group: '',
    life_span: '',
    history: '',
    temperament: ''
  }

export interface User {
  id: null;
  email: string;
  password: string;
}
