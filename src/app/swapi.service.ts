import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, empty } from 'rxjs';
import { expand } from 'rxjs/operators';
import { AnyMxRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    // const p1 =  this.httpSvc.get("https://swapi.co/api/planets");
    // const p2 = this.httpSvc.get("https://swapi.co/api/planets?page=2");
    // return merge(p1, p2);

    return this.httpSvc.get("https://swapi.co/api/planets").pipe(
      expand(data => (<any>data).next ? 
      this.httpSvc.get((<any>data).next)
      : empty())
      );

    //expand is used to recursively make calls
    //the value of next is null in the api if there is no further page
  }
}
