import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GraphComponent } from "../graph/graph.component";

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14,
  };
  public marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public matDialogRef: MatDialogRef<GraphComponent>    
  ) { }

  ngOnInit(): void {
    this.mapOptions = {
      center: { lat: this.data.k, lng: this.data.i },
      zoom: 14,
    };
    this.marker = {
      position: { lat: this.data.k, lng: this.data.i },
    }
  }

}
