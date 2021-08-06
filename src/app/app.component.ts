import { Component ,AfterViewInit} from '@angular/core';
declare const windyInit: any;
declare const L: any;
// import  {L} from 'leaflet';
import {ApiService} from '../app/services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  constructor(private ApiService: ApiService) { }

  ngAfterViewInit(): void {
    this.ApiService.initMap()
  }



ngOnInit(): void {
}
}
