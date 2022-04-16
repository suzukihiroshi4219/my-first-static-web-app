import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { MapDialogComponent } from "../map-dialog/map-dialog.component";

interface IPuldwn {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  tm: string; // 日時
  t1: number; // 環境温度
  h1: number; // 環境湿度
  wb: number; // WBGT
  t2: number; // 頭部温度
  h2: number; // 頭部湿度
  hs: number; // 頭部発汗量
  bs: number; // 全身発汗量  
  hr: number; // 心拍数
  mv: number; // 動作量　
  bv: number; // 電池電圧
  w1: number; // 警告１（熱中症）
  w2: number; // 警告２（体調不良）
  w3: number; // 警告３（動作）
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tm: '2022/4/14 16:05:00', t1: 1, h1: 10, wb: 100, t2: 40.5, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  {tm: '2022/4/14 16:06:00', t1: 1, h1: 10, wb: 100, t2: 42.5, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  {tm: '2022/4/14 16:07:00', t1: 1, h1: 10, wb: 100, t2: 43.5, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  {tm: '2022/4/14 16:08:00', t1: 1, h1: 10, wb: 100, t2: 44.5, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:09:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:10:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:11:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:12:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  {tm: '2022/4/14 16:13:00', t1: 1, h1: 10, wb: 100, t2: 40.0, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
];

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  // グラフ関連 start

  // グラフの表示サイズ
   view: any[] = [700, 700];
   //色設定
   colorScheme = {
     domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
   };
   //チャートに表示するデータ
   sampleData = [
     {
       name: "頭部温度",
       series: [
         { name: "16:05:00", value: 40.5 },
         { name: "16:06:00", value: 42.5 },
         { name: "16:07:00", value: 43.5 },
         { name: "16:08:00", value: 44.5 },
         { name: "16:09:00", value: 44.5 },
         { name: "16:10:00", value: 44.5 },
         { name: "16:11:00", value: 44.5 },
         { name: "16:12:00", value: 40.5 },
         { name: "16:13:00", value: 40.5 },
         { name: "16:14:00", value: 40.5 },
         { name: "16:15:00", value: 40.5 },
         { name: "16:16:00", value: 40.5 },
         { name: "16:17:00", value: 40.5 },
         { name: "16:18:00", value: 40.5 },
         { name: "16:19:00", value: 40.5 },
         { name: "16:20:00", value: 40.5 },
         { name: "16:21:00", value: 40.5 },
         { name: "16:22:00", value: 40.5 },
         { name: "16:23:00", value: 40.5 },
         { name: "16:24:00", value: 40.5 },
         { name: "16:25:00", value: 40.5 },
         { name: "16:26:00", value: 40.5 },
         { name: "16:27:00", value: 40.5 },
         { name: "16:28:00", value: 40.5 },
         { name: "16:29:00", value: 40.5 },
         { name: "16:30:00", value: 40.5 },
         { name: "16:31:00", value: 40.5 },
         { name: "16:32:00", value: 40.5 },
         { name: "16:33:00", value: 40.5 },
         { name: "16:34:00", value: 40.5 },
         { name: "16:35:00", value: 40.5 },
         { name: "16:36:00", value: 40.5 },
         { name: "16:37:00", value: 40.5 },
         { name: "16:38:00", value: 40.5 },
         { name: "16:39:00", value: 40.5 },
         { name: "16:40:00", value: 40.5 },
         { name: "16:41:00", value: 40.5 },
         { name: "16:42:00", value: 40.5 },
         { name: "16:43:00", value: 40.5 },
         { name: "16:44:00", value: 40.5 },
         { name: "16:45:00", value: 40.5 },
         { name: "16:46:00", value: 40.5 },
         { name: "16:47:00", value: 40.5 },
         { name: "16:48:00", value: 40.5 },
         { name: "16:49:00", value: 40.5 },
         { name: "16:50:00", value: 40.5 },
         { name: "16:51:00", value: 40.5 },
         { name: "16:52:00", value: 40.5 },
         { name: "16:53:00", value: 40.5 },
         { name: "16:54:00", value: 40.5 },
         { name: "16:55:00", value: 40.5 },
         { name: "16:56:00", value: 40.5 },
         { name: "16:57:00", value: 40.5 },
         { name: "16:58:00", value: 40.5 },
         { name: "16:59:00", value: 40.5 },
         { name: "17:00:00", value: 40.5 },
         { name: "17:01:00", value: 40.5 },
         { name: "17:02:00", value: 40.5 },
         { name: "17:03:00", value: 40.5 },
         { name: "17:04:00", value: 40.5 },
         { name: "17:05:00", value: 40.5 },
         { name: "17:06:00", value: 40.5 },
         { name: "17:07:00", value: 40.5 },
         { name: "17:08:00", value: 40.5 },
         { name: "17:09:00", value: 40.5 },
         { name: "17:10:00", value: 40.5 },
         { name: "17:11:00", value: 40.5 },
         { name: "17:12:00", value: 40.5 },
         { name: "17:13:00", value: 30.5 },
         { name: "17:14:00", value: 33.5 },
         { name: "17:15:00", value: 36.5 },
         { name: "17:16:00", value: 34.5 },
         { name: "17:17:00", value: 38.5 },
         { name: "17:18:00", value: 40.5 },
         { name: "17:19:00", value: 40.5 },
         { name: "17:20:00", value: 40.5 },
         { name: "17:21:00", value: 40.5 },
         { name: "17:22:00", value: 40.5 },
         { name: "17:23:00", value: 40.5 },
         { name: "17:24:00", value: 40.5 },
       ],     
      }, 
    ];
 
   // チャートの設定
   legend: boolean = true;
   showLabels: boolean = true;
   animations: boolean = true;
   xAxis: boolean = true;
   yAxis: boolean = true;
   showYAxisLabel: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = "時刻";
   yAxisLabel: string = "温度[℃]";
   timeline: boolean = true; 

   // グラフ関連 end

   // プルダウン
   puldwns: IPuldwn[] = [
    {value: 't2', viewValue: '頭部温度'},
    {value: 'h2', viewValue: '頭部湿度'},
    {value: 'hs', viewValue: '頭部発汗量'},
  ];   

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['tm', 't1', 'h1', 'wb', 't2', 'h2', 'hs', 'bs', 'hr', 'mv', 'bv', 'w1', 'w2', 'w3'];
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
  onActivate(event) {

  }
  onSelect(event) {

  }
  onDeactivate(event) {

  }
}
