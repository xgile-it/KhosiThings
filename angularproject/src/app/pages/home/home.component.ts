import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   

  }

  ngAfterViewInit(){
    setTimeout(() => {
      console.log('data')
      // $('.dropdown-toggle').dropdown()
    }, 1000);
  }

}
