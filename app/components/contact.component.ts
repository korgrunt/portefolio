import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { WikipediaService } from '../services/wikipedia.service';
import { EmailService } from '../services/email.service';
import '../rxjs-operators';

export class EMAILOBJECT {
  mail: string;
  sujet: string;
  msg:  string;
}

@Component({
  selector: 'my-contact',
  templateUrl: 'app/components/contact.component.html',
  styleUrls:  ['app/components/contact.component.css'],
  providers: [WikipediaService,
              EmailService]
})
export class ContactComponent {


  /* WIKIPEDIA SERVICE PART */
items: string;

  /*constructor (private wikipediaService: WikipediaService) {}
*/
/* START GOOD CONSTRUCTOR FROM OKEY COMPONANT OFFICIAL*/
constructor (private emailService: EmailService, private router: Router) {}
/* END GOOD CONSTRUCTOR FROM OKEY COMPONANT OFFICIAL*/



emailPack: EMAILOBJECT = {
    mail: '',
    sujet: '',
    msg:  ''
  };




    ngOnInit(){

      document.title = "Naïm Aouaichia - Page Contact";
      document.getElementById("minimenu").style.display = 'none';
    }

/* ADD FROM OKEY COMPONANT OFFICIAL*/



   popUp(){

      var isFind = document.getElementById('popUpHere');
      if(isFind)
      {
        isFind.parentNode.removeChild(isFind);
      }else
      {
       var popup = document.createElement('div');
       popup.className = 'popup';
       popup.id = 'popUpHere';
       var cancel = document.createElement('div');
       cancel.className = 'cancel';
       cancel.innerHTML = 'close';
       cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
       var message = document.createElement('span');
       message.innerHTML = "This is a test message";
       popup.appendChild(message);
       popup.appendChild(cancel);
       document.body.appendChild(popup);
       }

   }

    send (email: string, sujet: string, msg: string ) {

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



        if( !(re.test(email)) )
        {
          console.log("etrer une adress correct");
          document.getElementById("email-input").style.display = 'block';
        }
        else if( !(sujet.length >= 1) )
        {
          console.log("entrer un sujet pour carifier votre demande");
          document.getElementById("email-input").style.display = 'none';
          document.getElementById("sujet-input").style.display = 'block';
        }
        else if( !(msg.length >=10) )
        {
          console.log("ecriver votre demande");
          document.getElementById("email-input").style.display = 'none';
          document.getElementById("sujet-input").style.display = 'none';
          document.getElementById("message-input").style.display = 'block';
        }
        else{
          if(re.test(email) && sujet.length >= 1 && msg.length >=10)
          {
            document.getElementById("email-input").style.display = 'none';
            document.getElementById("sujet-input").style.display = 'none';
            document.getElementById("message-input").style.display = 'none';

            this.items = this.emailService.xhrSender(email, sujet, msg);//statements suspected to throw exception.
            console.log(this.items);

             setTimeout(function(){document.getElementById("email-send").style.display = 'block';},700);




             //var that=this;
             setTimeout(function(){
               //that.router.navigate(['/home']);
               console.log("mail envoyer");
             },5000);





          }else
          {
                      console.log("Une erreur est survenu, veuillez recommencer ou attendre u peu, si urgence, contacter moi au 0625582270");
          }
        }




      /*
      console.log(this.emailService.sender("atest"));
*/

    }


}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
