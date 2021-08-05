import { Component ,AfterViewInit} from '@angular/core';
declare const windyInit: any;
declare const L: any;
// import  {L} from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  private initMap(): void {
    const options = {
      key: '1C8LUnYyLkMKeBom0tyHWncRd39QOo4L', // REPLACE WITH YOUR KEY !!!
      lat: 13.736717,
      lon: 100.523186,
      zoom: 5,
    };
  
    windyInit(options, (windyAPI: any) => {
        const { map } = windyAPI;
        map.options.minZoom = 4;
        map.options.maxZoom = 26;
        // this.MakePolygonService.getTambol(map)

        const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
          maxZoom: 26,
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
  
  ngAfterViewInit(): void {
    this.initMap()
  
  }



ngOnInit(): void {
}
}
