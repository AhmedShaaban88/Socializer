import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})


export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems,  { fullWidth: true,
      indicators: true});


  }


}
