import { Component, OnInit } from '@angular/core';
import { CoordInfo } from '../models/coord-info.model';
import { Marker } from '../models/marker.model';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map=null;
  marker:Marker = {
    position:{
      lat: -33.03356325750447,
      lng: -71.53322701748822,
    },
    title: "Sambil"
  };
  coordInfo: CoordInfo = null;

  constructor() { }

  ngOnInit() {
    
    this.loadMap();
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');

    const myLatLng = {
      lat: this.marker.position.lat,
      lng: this.marker.position.lng
    };

    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.addMarker(this.marker);
      mapEle.classList.add('show-map');
    });
  }
  addMarker(marker: Marker) {
    var mapMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
   
  }
}
