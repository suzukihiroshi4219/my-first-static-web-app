import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

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
  {
    tm: '2022/4/14 16:05:00',
    t1: 1,
    h1: 10,
    wb: 100,
    t2: 40.5,
    h2: 10000,
    hs: 1,
    bs: 10,
    hr: 100,
    mv: 1000,
    bv: 10000,
    w1: 1,
    w2: 10,
    w3: 100,
  },
  {
    tm: '2022/4/14 16:06:00',
    t1: 1,
    h1: 10,
    wb: 100,
    t2: 42.5,
    h2: 10000,
    hs: 1,
    bs: 10,
    hr: 100,
    mv: 1000,
    bv: 10000,
    w1: 1,
    w2: 10,
    w3: 100,
  },
  {
    tm: '2022/4/14 16:07:00',
    t1: 1,
    h1: 10,
    wb: 100,
    t2: 43.5,
    h2: 10000,
    hs: 1,
    bs: 10,
    hr: 100,
    mv: 1000,
    bv: 10000,
    w1: 1,
    w2: 10,
    w3: 100,
  },
  {
    tm: '2022/4/14 16:08:00',
    t1: 1,
    h1: 10,
    wb: 100,
    t2: 44.5,
    h2: 10000,
    hs: 1,
    bs: 10,
    hr: 100,
    mv: 1000,
    bv: 10000,
    w1: 1,
    w2: 10,
    w3: 100,
  },
  // {tm: '2022/4/14 16:09:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:10:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:11:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  // {tm: '2022/4/14 16:12:00', t1: 1, h1: 10, wb: 100, t2: 1000, h2: 10000, hs: 1, bs: 10, hr: 100, mv: 1000, bv: 10000, w1: 1, w2: 10, w3: 100},
  {
    tm: '2022/4/14 16:13:00',
    t1: 1,
    h1: 10,
    wb: 100,
    t2: 40.0,
    h2: 10000,
    hs: 1,
    bs: 10,
    hr: 100,
    mv: 1000,
    bv: 10000,
    w1: 1,
    w2: 10,
    w3: 100,
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'tm',
    't1',
    'h1',
    'wb',
    't2',
    'h2',
    'hs',
    'bs',
    'hr',
    'mv',
    'bv',
    'w1',
    'w2',
    'w3',
  ];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  onClickedRows(row) {
    this.clickedRows.clear();
    this.clickedRows.add(row);

    const dialogRef = this.dialog.open(MapDialogComponent, {
      data: { k: 36.15891655459874, i: 137.95024328174617 },
      height: '500px',
      width: '500px',
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log("The dialog was closed");
    });
  }
}
