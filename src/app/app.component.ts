import { Component ,AfterViewInit} from '@angular/core';
declare const windyInit: any;
declare const L: any;
// import {ApiService} from '../app/services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // this.ApiService.initMap()
  }



ngOnInit(): void {
}
}
