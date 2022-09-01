import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  info:any;

  irAPagina(){
    location.href = this.info.html_url;
  }

  constructor(private service:ServicioService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(response => {this.info = response;
    })
  }

}
