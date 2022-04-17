import { Component, OnInit } from '@angular/core';

interface IPuldwn {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  // グラフの表示サイズ
  view: any[] = [700, 700];

  //色設定
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  //チャートに表示するデータ
  sampleData = [
    {
      name: '頭部温度',
      series: [
        { name: '16:05:00', value: 40.5 },
        { name: '16:06:00', value: 42.5 },
        { name: '16:07:00', value: 43.5 },
        { name: '16:08:00', value: 44.5 },
        { name: '16:09:00', value: 44.5 },
        { name: '16:10:00', value: 44.5 },
        { name: '16:11:00', value: 44.5 },
        { name: '16:12:00', value: 40.5 },
        { name: '16:13:00', value: 40.5 },
        { name: '16:14:00', value: 40.5 },
        { name: '16:15:00', value: 40.5 },
        { name: '16:16:00', value: 40.5 },
        { name: '16:17:00', value: 40.5 },
        { name: '16:18:00', value: 40.5 },
        { name: '16:19:00', value: 40.5 },
        { name: '16:20:00', value: 40.5 },
        { name: '16:21:00', value: 40.5 },
        { name: '16:22:00', value: 40.5 },
        { name: '16:23:00', value: 40.5 },
        { name: '16:24:00', value: 40.5 },
        { name: '16:25:00', value: 40.5 },
        { name: '16:26:00', value: 40.5 },
        { name: '16:27:00', value: 40.5 },
        { name: '16:28:00', value: 40.5 },
        { name: '16:29:00', value: 40.5 },
        { name: '16:30:00', value: 40.5 },
        { name: '16:31:00', value: 40.5 },
        { name: '16:32:00', value: 40.5 },
        { name: '16:33:00', value: 40.5 },
        { name: '16:34:00', value: 40.5 },
        { name: '16:35:00', value: 40.5 },
        { name: '16:36:00', value: 40.5 },
        { name: '16:37:00', value: 40.5 },
        { name: '16:38:00', value: 40.5 },
        { name: '16:39:00', value: 40.5 },
        { name: '16:40:00', value: 40.5 },
        { name: '16:41:00', value: 40.5 },
        { name: '16:42:00', value: 40.5 },
        { name: '16:43:00', value: 40.5 },
        { name: '16:44:00', value: 40.5 },
        { name: '16:45:00', value: 40.5 },
        { name: '16:46:00', value: 40.5 },
        { name: '16:47:00', value: 40.5 },
        { name: '16:48:00', value: 40.5 },
        { name: '16:49:00', value: 40.5 },
        { name: '16:50:00', value: 40.5 },
        { name: '16:51:00', value: 40.5 },
        { name: '16:52:00', value: 40.5 },
        { name: '16:53:00', value: 40.5 },
        { name: '16:54:00', value: 40.5 },
        { name: '16:55:00', value: 40.5 },
        { name: '16:56:00', value: 40.5 },
        { name: '16:57:00', value: 40.5 },
        { name: '16:58:00', value: 40.5 },
        { name: '16:59:00', value: 40.5 },
        { name: '17:00:00', value: 40.5 },
        { name: '17:01:00', value: 40.5 },
        { name: '17:02:00', value: 40.5 },
        { name: '17:03:00', value: 40.5 },
        { name: '17:04:00', value: 40.5 },
        { name: '17:05:00', value: 40.5 },
        { name: '17:06:00', value: 40.5 },
        { name: '17:07:00', value: 40.5 },
        { name: '17:08:00', value: 40.5 },
        { name: '17:09:00', value: 40.5 },
        { name: '17:10:00', value: 40.5 },
        { name: '17:11:00', value: 40.5 },
        { name: '17:12:00', value: 40.5 },
        { name: '17:13:00', value: 30.5 },
        { name: '17:14:00', value: 33.5 },
        { name: '17:15:00', value: 36.5 },
        { name: '17:16:00', value: 34.5 },
        { name: '17:17:00', value: 38.5 },
        { name: '17:18:00', value: 40.5 },
        { name: '17:19:00', value: 40.5 },
        { name: '17:20:00', value: 40.5 },
        { name: '17:21:00', value: 40.5 },
        { name: '17:22:00', value: 40.5 },
        { name: '17:23:00', value: 40.5 },
        { name: '17:24:00', value: 40.5 },
      ],
    },
  ];

  // チャートの設定
  legend: boolean = true;
  legendTitle: string = '凡例';
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '時刻';
  yAxisLabel: string = '温度[℃]';
  timeline: boolean = true;

  // プルダウン
  puldwns: IPuldwn[] = [
    { value: 't2', viewValue: '頭部温度' },
    { value: 'h2', viewValue: '頭部湿度' },
    { value: 'hs', viewValue: '頭部発汗量' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onActivate(event) {}
  onSelect(event) {}
  onDeactivate(event) {}
}
