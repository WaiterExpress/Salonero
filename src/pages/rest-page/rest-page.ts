import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-rest-page',
  templateUrl: 'rest-page.html',

})



export class RestPage {
  
   posts: any;
  texto = 'por ahora';
  constructor(public http: Http){

this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
  console.log("hola")
        this.posts = data.data.children;
    }, err => {
        console.log("Oops!");
    });

  }

}