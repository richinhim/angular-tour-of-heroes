import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html',
  styleUrls: ['./heores.component.css']
})
export class HeoresComponent implements OnInit {
 /*
 hero = 'Winstorm ';
*/
  /*hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };*/
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
