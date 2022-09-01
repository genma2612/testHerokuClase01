import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  misDatos:string = 'https://api.github.com/users/genma2612';

  constructor() { }

  ngOnInit(): void {
  }

}
