import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home.component.html',
  styleUrls:  ['app/components/home.component.css']
})
export class HomeComponent {


    ngOnInit(){

      document.title = "Naïm Aouaichia - Page d'Acceuil";
      document.getElementById("minimenu").style.display = 'none';
    }
  }
