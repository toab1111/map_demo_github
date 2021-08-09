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
  Query_Amphore=''
  Query_Plant=''
  Query_Class=''
  Query_Category=''


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
}

onAdd_Province(event: Event) {
    this.Query_ProvinceByID='';
    for (let index = 0; index < this.selected_Province.length; index++) {

    const element = this.selected_Province[index]['ch_ID'];

    if(index==(this.selected_Province.length-1)){
    this.Query_ProvinceByID+=element

    }
    else{this.Query_ProvinceByID+=element+","
    
  }

}

this.ApiService.getAmporbyID(this.Query_ProvinceByID).subscribe((data: any) => {
  this.Amphore = data
}); 
}


onAdd_Amphore(event: Event){
  this.Query_Amphore='';
  if(this.selected_AMPHOE.length == 0){
    console.log(this.selected_AMPHOE.length);
    this.Amphore = [
    ];
  }
  else{  for (let index = 0; index < this.selected_AMPHOE.length; index++) {

    const element = this.selected_AMPHOE[index]['AM_ID'];
    console.log(element);
    if(index==(this.selected_AMPHOE.length-1)){
    this.Query_Amphore+=element
    }
    else{this.Query_Amphore+=element+","}
  }
  console.log(this.Query_Amphore)}
}

onAdd_Plant(event: Event){
  this.Query_Plant='';
  if(this.selected_plant.length == 0){
    console.log(this.selected_plant.length);
    this.Amphore = [
    ];
  }
  else{  for (let index = 0; index < this.selected_plant.length; index++) {

    const element = this.selected_plant[index]['PlantId'];
    console.log(element);
    if(index==(this.selected_plant.length-1)){
    this.Query_Plant+=element
    }
    else{this.Query_Plant+=element+","}
  }
  console.log(this.Query_Plant)}
}

onAdd_Class(event: Event){
  this.Query_Class='';
  if(this.selected_Class.length == 0){
    console.log(this.selected_Class.length);
    this.Amphore = [
    ];
  }
  else{  for (let index = 0; index < this.selected_Class.length; index++) {

    const element = this.selected_Class[index]['ClassId'];
    console.log(element);
    if(index==(this.selected_Class.length-1)){
    this.Query_Class+=element
    }
    else{this.Query_Class+=element+","}
  }
  console.log(this.Query_Class)}
}

onAdd_category(event: Event){
  this.Query_Category='';
  if(this.selected_category.length == 0){
    console.log(this.selected_category.length);
    this.Amphore = [
    ];
  }
  else{  for (let index = 0; index < this.selected_category.length; index++) {

    const element = this.selected_category[index]['guildcategoryid'];
    console.log(element);
    if(index==(this.selected_category.length-1)){
    this.Query_Category+=element
    }
    else{this.Query_Category+=element+","}
  }
  console.log(this.Query_Category)}
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
    console.log(this.selected_Province[index]['CHANGWAT_T']);
    
    console.log(element);
    if(index==(this.selected_Province.length-1)){
    this.Query_ProvinceByID+=element
    }
    else{this.Query_ProvinceByID+=element+","}
  }
  console.log(this.Query_ProvinceByID)}
}


onRemove_Amphore(event: any) {
  this.Query_Amphore='';

  if(this.selected_AMPHOE.length == 0){
    console.log(this.selected_AMPHOE.length);

  }
  else{  for (let index = 0; index < this.selected_AMPHOE.length; index++) {

    const element = this.selected_AMPHOE[index]['AM_ID'];
    console.log(element);
    if(index==(this.selected_AMPHOE.length-1)){
    this.Query_Amphore+=element
    }
    else{this.Query_Amphore+=element+","}
  }
  console.log(this.Query_Amphore)}
}


onRemove_Plant(event: any) {
  this.Query_Plant='';

  if(this.selected_plant.length == 0){
    console.log(this.selected_plant.length);

  }
  else{  for (let index = 0; index < this.selected_plant.length; index++) {

    const element = this.selected_plant[index]['PlantId'];
    console.log(element);
    if(index==(this.selected_plant.length-1)){
    this.Query_Plant+=element
    }
    else{this.Query_Plant+=element+","}
  }
  console.log(this.Query_Plant)}
}

onRemove_Class(event: any) {
  this.Query_Class='';

  if(this.selected_Class.length == 0){
    console.log(this.selected_Class.length);

  }
  else{  for (let index = 0; index < this.selected_Class.length; index++) {

    const element = this.selected_Class[index]['ClassId'];
    console.log(element);
    if(index==(this.selected_Class.length-1)){
    this.Query_Class+=element
    }
    else{this.Query_Class+=element+","}
  }
  console.log(this.Query_Class)}
}

onRemove_category(event: any) {
  this.Query_Category='';

  if(this.selected_category.length == 0){
    console.log(this.selected_category.length);

  }
  else{  for (let index = 0; index < this.selected_category.length; index++) {

    const element = this.selected_category[index]['guildcategoryid'];
    console.log(element);
    if(index==(this.selected_category.length-1)){
    this.Query_Category+=element
    }
    else{this.Query_Category+=element+","}
  }
  console.log(this.Query_Category)}
}



onRemove(event: any) {
console.log(event);

}

onClear($event: any){
  this.Amphore= [
  ];
  
  }


show() {
  // console.log(this.selected_total)
  this.ApiService.searc_api([{amphore:this.Query_Amphore,Province:this.Query_ProvinceByID,Plant:this.Query_Plant,Class:this.Query_Class,Category:this.Query_Category}])
  
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

