import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  idMatricula$ = new EventEmitter<number>();

  constructor() { }
}
