import { Component } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: 'app/components/macro/header.component.html',
  styleUrls:  ['app/components/macro/header.component.css']
})
export class HeaderComponent {

  menuClicked(){
    if(document.getElementById("minimenu").style.display == "block"){
        document.getElementById("minimenu").style.display = 'none';
    }else{
      document.getElementById("minimenu").style.display = 'block';
    }

    console.log("menu cliqué");
  }

}
