import { Component, AfterViewInit } from '@angular/core';
declare const windyInit: any;
declare const L: any;
import {ApiService} from '../../services/api.service'


@Component({
  selector: 'app-layout-map',
  templateUrl: './layout-map.component.html',
  styleUrls: ['./layout-map.component.css']
})
export class LayoutMapComponent implements AfterViewInit {

  constructor(private ApiService: ApiService) { }
  ngAfterViewInit(): void {
    this.ApiService.initMap()
  }

}
