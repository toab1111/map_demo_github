import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ///API////
  AllProvince_api: string = 'http://www.xn--12cfsxwzpdhs1afud2b6iscg8h.com/kasettrackservices_v2/GetAllProvince';
  AllAmpor_api:string = 'http://www.xn--12cfsxwzpdhs1afud2b6iscg8h.com/kasettrackservices_v2/GetAmporByProvincename/ALL  ';
  AllClass_api:string = 'http://www.xn--12cfsxwzpdhs1afud2b6iscg8h.com/kasettrackservices_v2/GetClass/1212312121';
  AllPlant_api:string = 'http://www.xn--12cfsxwzpdhs1afud2b6iscg8h.com/kasettrackservices_v2/getallPlant/1212312121';
  AllGuildcategory_api:string = 'http://www.xn--12cfsxwzpdhs1afud2b6iscg8h.com/kasettrackservices_v2/GetALLGuildcategory/1212312121';
  AmporByProvince:string ='http://203.170.129.207/kasettrackservices_v2/GetAmporByProvinceV2/'
  
  
  ///ค่าจากAPI////


  constructor(private http: HttpClient) { }
  getAllProvince(){
     return this.http.get(this.AllProvince_api)
  };
  getAllPlant(){
    return this.http.get(this.AllPlant_api)
  };
  getAllClass(){
  return this.http.get(this.AllClass_api)
  };
  getAllGuildcategory(){
  return this.http.get(this.AllGuildcategory_api)
  }

  getAmporbyID(id:any){
    return this.http.get(this.AmporByProvince+id)
  }


  

}
    

