import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RequestDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RequestDataProvider {
Posts: any;

  public WaiterAPI: string;

  constructor(public http: Http) {
    // this.WaiterAPI = "http://we.agroingenieriasatelital.com/";
    this.WaiterAPI = "/WaiterAPI/";
  }

  getRestaurente(){
    return this.http.get('http://we.agroingenieriasatelital.com/obtener_restaurante.php')
    .map( res => res.json() )
  }
  
  getRemoteData(){
//this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').subscribe(data=>{
  //console.log(data);
//})
//this.posts=null;
this.http.get('http://we.agroingenieriasatelital.com/obtener_restaurante.php').map(res => res.json()).subscribe(data => {
 // console.log(data)
     this.Posts=data;
     return this.Posts;

       // this.posts = data.data.children;
    }, err => {
       // console.log("Oops!");
      this.Posts=err;
      return this.Posts;
    });

  }

}
