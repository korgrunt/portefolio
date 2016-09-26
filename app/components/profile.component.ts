import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile.component.html',
  styleUrls:  ['app/components/profile.component.css'],
})
export class ProfileComponent {

    ngOnInit(){
      console.log("we init the component now");

      document.title = "Naïm Aouaichia - Page Profile";

      document.getElementById("section-info3d").style.display = 'none';
      document.getElementById("section-info2d").style.display = 'none';
      document.getElementById("section-dev").style.display = 'none';
      document.getElementById("section-collab").style.display = 'none';
      document.getElementById("minimenu").style.display = 'none';
    }


  /* ADD FROM OKEY COMPONANT OFFICIAL*/
  btnClicked(btnclicked: string, clicked: string,noClicked1: string,noClicked2: string,noClicked3: string){


  document.getElementById("fleche").style.opacity = '0';

    document.getElementById("btn2d").style.opacity = '1';
    document.getElementById("btn3d").style.opacity = '1';
    document.getElementById("btnDev").style.opacity = '1';
    document.getElementById("btnCollab").style.opacity = '1';

    document.getElementById(btnclicked).style.opacity = '0.4';

    document.getElementById(clicked).style.display = 'block';
    document.getElementById(noClicked1).style.display = 'none';
    document.getElementById(noClicked2).style.display = 'none';
    document.getElementById(noClicked3).style.display = 'none';

  }
/*
    btnOver(obj: string){
      if(document.getElementById(obj).style.color == "white")
      {
        return;
      }
      else
      {
      document.getElementById(obj).style.color = 'red';
      }
    }
    btnOut(obj: string){

      if(document.getElementById(obj).style.color == "white")
      {
        return;
      }
      else
      {
      document.getElementById(obj).style.color = 'black';
      }
    }
*/
}
