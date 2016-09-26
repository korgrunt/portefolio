import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  description: string;
  imgPath: string;
}
/*
film d'animation personnel
film d'animation pour entreprise
charactere design perso
simulation 3d archi
*/
const HEROES: Hero[] = [

  { id: '01', name: 'Film d\'animation perso.', description: 'Animation de poursuite en mobiliette via des calque dessin manuel scané, et animé dans un espace 3d.', imgPath: './app/pictures/work01.jpg' },

  { id: '02', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work02.jpg' },

  { id: '03', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work03.jpg' },

  { id: '04', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work05.jpg' },

  { id: '05', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work06.jpg' },

  { id: '06', name: 'Charactere design', description: 'Une scéne de quelque seconde présentant un catcheur méxicain.', imgPath: './app/pictures/work04.jpg' },

  { id: '07', name: 'Projet du dimanche', description: 'Modélisation, texturing et lighting d\'une voiture vintage', imgPath: './app/pictures/realisation3d01.jpg' },

  { id: '08', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d05.jpg' },

  { id: '09', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d06.jpg' },

  { id: '10', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d07.jpg' },

  { id: '11', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d08.jpg' },

  { id: '12', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d09.jpg' },

  { id: '13', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d10.jpg' },

  { id: '14', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d11.jpg' },

  { id: '15', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d12.jpg' },

  { id: '16', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d13.jpg' },

  { id: '17', name: 'Site web', description: 'Site web déstiné a présenté mes compétences et savoir faire.', imgPath: './app/pictures/realisationweb01.jpg' }
];


@Component({
  selector: 'realisation',
  templateUrl: 'app/components/realisation.component.html',
  styleUrls:  ['app/components/realisation.component.css']
})
export class RealisationComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  image = './app/pictures/work06.jpg';



  heroes = HEROES;


    ngOnInit(){

      document.title = "Naïm Aouaichia - Page Réalisations";
      document.getElementById("minimenu").style.display = 'none';
    }
    cardClicked(){
      var popup = document.createElement("div");
      var contentpopup = document.createElement("div");
      //var node = document.createTextNode("This is new.");
      //para.appendChild(node);
      popup.setAttribute("id", "mypopup");
      contentpopup.setAttribute("id", "contentpopup");
      popup.setAttribute("class", "container");

      var element = document.getElementById("div1");

      popup.appendChild(contentpopup);
      document.body.appendChild(popup);
      console.log("ouioui");
    }
}
