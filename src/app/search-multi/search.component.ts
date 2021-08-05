import { Component, AfterViewInit } from '@angular/core';


import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {


  constructor(private ApiService: ApiService) { }


  
  title = 'ng-select-demo';
  Query_ProvinceByID=''


  AllProvince:any
  AllPlant :any
  AllClass :any
  AllGuildcategory: any;
  
  Amphore = [
  ];
  Tambol = [
  ];

  selected_total : Event[]= [
  ];


  selected_Province = [
  ];
  selected_plant = [
  ];
  selected_Class = [
  ];
  selected_category = [
  ];
  selected_AMPHOE= [
  ];
  selected_Tambol= [
  ];



onAdd(event: Event) {
    this.selected_total.push(event)
    console.log(this.selected_total)
}

onAdd_Province(event: Event) {

    this.Query_ProvinceByID='';
    for (let index = 0; index < this.selected_Province.length; index++) {

    const element = this.selected_Province[index]['ch_ID'];
    console.log(element);
    if(index==(this.selected_Province.length-1)){
    this.Query_ProvinceByID+=element
    }
    else{this.Query_ProvinceByID+=element+","}

  
}
console.log(this.Query_ProvinceByID)
this.ApiService.getAmporbyID(this.Query_ProvinceByID).subscribe((data: any) => {
  this.Amphore = data
}); 
}

show() {
  console.log(this.selected_total)
  console.log(this.selected_Province);
  
}

onRemove_Province(event: any) {
  this.Query_ProvinceByID='';

  if(this.selected_Province.length == 0){
    console.log(this.selected_Province.length);
    this.Amphore = [
    ];
  }
  else{  for (let index = 0; index < this.selected_Province.length; index++) {

    const element = this.selected_Province[index]['ch_ID'];
    console.log(element);
    if(index==(this.selected_Province.length-1)){
    this.Query_ProvinceByID+=element
    }
    else{this.Query_ProvinceByID+=element+","}
  
  
  }
  this.ApiService.getAmporbyID(this.Query_ProvinceByID).subscribe((data: any) => {
    this.Amphore = data
  }); 
  console.log(this.Query_ProvinceByID)}

}


onRemove(event: any) {
console.log(event);

}


ngAfterViewInit(): void {
  this.ApiService.getAllProvince().subscribe((data: any) => {
    this.AllProvince = data
  }); 
  this.ApiService.getAllPlant().subscribe((data: any) => {
    this.AllPlant = data
  }); 

  this.ApiService.getAllClass().subscribe((data: any) => {
    this.AllClass = data
  }); 

  this.ApiService.getAllGuildcategory().subscribe((data: any) => {
    this.AllGuildcategory = data
  }); 
  


  }
}

