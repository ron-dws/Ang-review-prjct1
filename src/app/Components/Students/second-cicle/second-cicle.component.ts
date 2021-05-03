import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-cicle',
  template: `
    <p>
      second-cicle works!
    </p>
  `,
  styleUrls: ['./second-cicle.component.css']
})
export class SecondCicleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
