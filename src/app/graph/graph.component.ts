import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { MapDialogComponent } from "../map-dialog/map-dialog.component";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['受信時間', '頭部発汗量[g]', '流入温度[℃]', '流出温度[℃]', '流出湿度[%]', '電圧[V]', '警告', '全身発汗量[g]', '塩分量[g]', 'HR[BPM]', '体温[℃]','開始時間' ];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  onClickedRows(row) {
    this.clickedRows.clear();
    this.clickedRows.add(row);

    const dialogRef = this.dialog.open(MapDialogComponent, {
      data: { k: 36.15891655459874, i: 137.95024328174617 },
      height: "500px",
      width: "500px",
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
    });
  }
}
