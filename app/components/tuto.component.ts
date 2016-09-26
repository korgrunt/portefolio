import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'tuto maxwell render' },
  { id: 12, name: 'tuto 3dsmax' },
  { id: 12, name: 'tuto modelisation 3dsmax' },
  { id: 20, name: 'tuto 3d' }
];

@Component({
  selector: 'tuto',
  templateUrl: 'app/components/tuto.component.html',
  styleUrls:  ['app/components/tuto.component.css']
})
export class TutoComponent{

  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  image = './app/pictures/work06.jpg';



  heroes = HEROES;

  ngOnInit(){

    document.title = "Naïm Aouaichia - Page Tutos";
    document.getElementById("minimenu").style.display = 'none';
  }

 }
