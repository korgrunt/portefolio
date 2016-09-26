import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { HttpModule, JsonpModule }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmailService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');


    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[1]);
  }

  sender (term: string) {

    let myUrli = 'http://91.134.134.160:80/email';

    let theParams = new URLSearchParams();
    theParams.set('search', term); // the user's search value
    theParams.set('action', 'opensearch');
    theParams.set('format', 'json');
    theParams.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
               .get(myUrli, { search: theParams })
               .map(response => <string[]> response.json()[1]);
  }

  xhrSender(email: string, sujet: string, msg: string) {
    let xhr = new XMLHttpRequest();
    let urlSend = "http://91.134.134.160:80/email/"+email+"/"+sujet+"/"+msg+"";
    xhr.open("GET", urlSend, true);


    xhr.send();
    return "email sending successfully!";
  }
}
