
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {RequestDataProvider} from '../../providers/request-data/request-data';

@IonicPage()
@Component({
  selector: 'page-rest-page',
  templateUrl: 'rest-page.html',

})



export class RestPage {
  
  public posts: any;
  public texto = 'por ahora';
  
  constructor(
    public requestDataProvider:RequestDataProvider
   ){
  }

  ionViewDidLoad(){
    this.requestDataProvider.getRemoteData();
 
 
   
   

  }

}
