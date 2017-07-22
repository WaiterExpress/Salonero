import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AlertController } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import { App, ViewController } from 'ionic-angular';
import {RestPage} from '../rest-page/rest-page';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  
})


export class HelloIonicPage {
  
  texto = 'por ahora';
  
  constructor(public alertCtrl: AlertController, public navCtrl: NavController ) {

  }
showPrompt() {
let prompt = this.alertCtrl.create(
  {title:'Datos Registro',
  inputs: [
    {
      name:'Cedula',
      placeholder:'Cedula'


    },
    {
      name:'nombre',
      placeholder:'Nombre'
    },
     {
      name:'apellido',
      placeholder:'Apellido'
    },
     {
      name:'telefono',
      placeholder:'numero de telefono'
    },
     {
      name:'correo',
      placeholder:'correo electronico'
    },
  ],

    buttons: [
      {
         text:'Cancel', 
         handler: data => {
           console.log('Cancel click')
         } 
      },
        {
          text: 'registrar',
          handler: data => {
            console.log('registro adecuado')
          }

        }
    
    ]

  });
prompt.present();

}

openRestpage(){
this.navCtrl.push(RestPage);


}




}
