import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const windyInit: any;
import * as L from 'leaflet';

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
  AllSearch_url:string = 'http://203.170.129.207/kasettrackservices_v2/PostSearchPlant_V3?' 
  ///ค่าจากAPI////
  Polygons :any;
  coor_geo:any = [];
  geo_polygon:any = [];

  ALLpolygon:string = 'http://203.170.129.207/kasettrackservices_v2/getALLPolygon/1212312121'
  
  
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
  searc_api(data:any){
    data=data[0]
    console.log(data);
    
    let AllSearch_url_search = this.AllSearch_url
    console.log(AllSearch_url_search);
    if (data.Province) {
      AllSearch_url_search += 'province=' +data.Province
    }else{
      AllSearch_url_search += 'province=' +'ALL'
    }

    if (data.Plant) {
      AllSearch_url_search += '&plantid=' +data.Plant
    }else{
      AllSearch_url_search += '&plantid=' +'ALL'
    }

    if (data.amphore) {
      AllSearch_url_search += '&ampor=' +data.amphore
    }else{
      AllSearch_url_search += '&ampor=' +'ALL'
    }

    

    if (data.Class) {
      AllSearch_url_search += '&classid=' +data.Class
    }else{
      AllSearch_url_search += '&classid=' +'ALL'
    }

    

    if (data.Category) {
      AllSearch_url_search += '&guildid=' +data.Category
    }else{
      AllSearch_url_search += '&guildid=' +'ALL'
    }

    AllSearch_url_search+="&salestatus=ALL&stdatefrom=ALL&stdateto=ALL&endatefrom=ALL&endateto=ALL&percentfrom=0&percentto=100&growthtype=ALL&apikey=1212312121"

    console.log(AllSearch_url_search);
    
  }

  getPolygon(map: L.Map) {

    this.Polygons=this.http.get(this.ALLpolygon);
    this.Polygons.subscribe((Polygon: any) => {
      // console.log(Polygon);
      Polygon.forEach((polygon: any) => {
        this.coor_geo  = [];
        const coor_json = JSON.parse(polygon.JsonStringTemp);
        coor_json.forEach((element:any) => {
          const lng = element['lng']
          const lat =element['lat']
            this.coor_geo.push([lng, lat])
        });
        if (this.coor_geo.length > 2) {
            delete polygon.JsonStringTemp;
            delete polygon.JsonString;

            const geojson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [this.coor_geo],
                    },
                    "properties": polygon,
                }]
            }

            this.geo_polygon.push(geojson)

        }

    }
        
    );
    const polygonLayer = L.geoJSON(this.geo_polygon, {
      onEachFeature: function(f, l) {
          l.bindPopup('<pre>' + JSON.stringify(f.properties, null, ' ').replace(/[\{\}"]/g, '') + '</pre>');
      }
    }).addTo(map);

    });
  ;
  }



 initMap(data = ['ALL']): void {
    const options = {
      key: '1C8LUnYyLkMKeBom0tyHWncRd39QOo4L', // REPLACE WITH YOUR KEY !!!
      lat: 13.736717,
      lon: 100.523186,
      zoom: 5,
    };
  
    windyInit(options, (windyAPI: any) => {
        const { map } = windyAPI;
        map.options.minZoom = 4;
        map.options.maxZoom = 30;
        if (data =['ALL']){
          this.getPolygon(map)

        }
        // this.MakePolygonService.getTambol(map)


        const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
          maxZoom: 30,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
      googleHybrid.setOpacity(0);

      map.on('zoomend', function() {
        if (map.getZoom() >= 12) {
          googleHybrid.setOpacity(1);
        } else {
          googleHybrid.setOpacity(0);
        }
    });

    });
  };

  

}
    

