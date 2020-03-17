import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogsService } from '@dogs-ngrx/core-data';

@Component({
  selector: 'dogs-ngrx-dogs-item',
  templateUrl: './dogs-item.component.html',
  styleUrls: ['./dogs-item.component.scss']
})
export class DogsItemComponent implements OnInit {
  _dog$;
  originalTitle;
  public get dog$() {
    return this._dog$;
  }
  public set dog$(value) {
    this._dog$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Dogservice: DogsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.dog$ = this.Dogservice.findOne(id);
    });
  }

  goBackToDogs() {
    this.router.navigate(['/dogs']);
  }
}
