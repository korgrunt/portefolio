import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mon site web' },
  { id: 12, name: 'mes fichier3d' },
  { id: 20, name: 'mes fichier 3d' }
];


@Component({
  selector: 'src',
  templateUrl: 'app/components/src.component.html',
  styleUrls:  ['app/components/src.component.css']
})
export class SrcComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  image = './app/pictures/work06.jpg';



  heroes = HEROES;


    ngOnInit(){

      document.title = "Naïm Aouaichia - Page Sources";
      document.getElementById("minimenu").style.display = 'none';
    }
}
