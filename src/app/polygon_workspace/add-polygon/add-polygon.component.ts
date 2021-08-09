import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import  '@geoman-io/leaflet-geoman-free';
import * as turf from '@turf/turf';



@Component({
  selector: 'app-add-polygon',
  templateUrl: './add-polygon.component.html',
  styleUrls: ['./add-polygon.component.css']
})
export class AddPolygonComponent implements AfterViewInit {

  constructor() { }


  private map:any;
  private geoshow:any

  
  show_geo() {
      console.log(this.geoshow);
      
  }


  private initMap(): void {
    this.map =L.map('mapid').setView([13.5, 100.5], 6);

    const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
  
    googleStreets.addTo(this.map);

    const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=y&hl=th&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
});

    const baseMaps = {
  'GoogleStreets': googleStreets,
  'Google Hybrid': googleHybrid
}

L.control.layers(baseMaps).addTo(this.map);

this.map.pm.addControls({
  position: 'topleft',
  drawCircle: false,
  drawMarker: false,
  drawCircleMarker: false,
  drawRectangle: false,
  drawPolyline: false,
  rotateMode: false,
  dragMode: false,
  cutPolygon: false,
  // drawPolygon: false
});

let distance_layer = L.layerGroup();


this.map.on('pm:drawstart', (e:any) => {
    let point_group:any = []
    e.workingLayer.on('pm:vertexadded', (e:any) => {
        // console.log(e.latlng);
        point_group.push(e.latlng)
        // console.log(point_group);
        if (point_group.length > 1) {
            const center_dis_json = Create_distance_Json(point_group, 1)
            // console.log(center_dis_json);
            
            distance_layer.clearLayers()
            

            var pointLayer = L.geoJSON(center_dis_json, {
                pointToLayer: function(feature, latlng) {
                    const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
                    return new L.CircleMarker(latlng, {
                        radius: 1,
                    }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
                }
            });

            pointLayer.addTo(distance_layer)
            distance_layer.addTo(this.map)
            
        }
    });

});



this.map.on('pm:remove', (e:any) => {
    this.geoshow=[];
});



this.map.on('pm:create', (e:any) => {

    let center_dis_json = Create_distance_Json(e.layer._latlngs[0])
    // console.log(e.layer._latlngs[0]);

    e.layer.on('pm:edit', (e:any) => {
        distance_layer.clearLayers()
        center_dis_json = Create_distance_Json(e.layer._latlngs[0])
        // console.log(center_dis_json);

        var pointLayer = L.geoJSON(center_dis_json, {
            pointToLayer: function(feature, latlng) {
                const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
                return new L.CircleMarker(latlng, {
                    radius: 1,
                }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
            }
        });
        this.geoshow=center_dis_json
        pointLayer.addTo(distance_layer)
        distance_layer.addTo(this.map)


    });

    distance_layer.clearLayers()
    var pointLayer = L.geoJSON(center_dis_json, {
        pointToLayer: function(feature, latlng) {
            const label = String((feature.properties.distance_km).toFixed(3)) + " km." // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
            return new L.CircleMarker(latlng, {
                radius: 1,
            }).bindTooltip(label, { permanent: true, className: "my-labels" }).openTooltip();
        }
    });
    this.geoshow=center_dis_json
    pointLayer.addTo(distance_layer)
    distance_layer.addTo(this.map)


});


this.map.on('pm:remove', (e:any) => {
    distance_layer.clearLayers();
});


function Create_distance_Json(layer:any, n = 0) {
    const center_list:any = [];
    for (let index = 0; index < layer.length - n; index++) {
        if (index == layer.length - 1) {
            const star_point = [layer[index].lng, layer[index].lat]
            const stop_point = [layer[0].lng, layer[0].lat]
            const from = turf.point(star_point);
            const to = turf.point(stop_point);
            const distance = turf.distance(from, to);
            const features = turf.points([star_point, stop_point]);
            const center = turf.center(features);
            center.properties = {"distance_km":distance};
            center.type = 'Feature' as any ;
            center.geometry.type = 'Point' as any ;
            center_list.push(center)
        } else {

          const star_point = [layer[index].lng, layer[index].lat]
          const stop_point = [layer[index + 1].lng, layer[index + 1].lat]
          const from = turf.point(star_point);
          const to = turf.point(stop_point);
          const distance = turf.distance(from, to);
          const features = turf.points([star_point, stop_point]);
          const center = turf.center(features);
          center.properties = {"distance_km":distance};
          center.type = 'Feature' as any ;
          center.geometry.type = 'Point' as any ;

          // console.log(distance);
          center_list.push(center)
        }
    }
    return center_list 
}



}

  ngAfterViewInit(): void {
    this.initMap()

  }

}


