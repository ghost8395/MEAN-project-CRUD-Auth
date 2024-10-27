import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  private _chartElementRef: ElementRef<HTMLCanvasElement> | undefined;
  
  @ViewChild('chart')
  public get chartElementRef(): ElementRef<HTMLCanvasElement> {
    console.log('==> get chartElementRef')
    return this._chartElementRef as any;
  }
  public set chartElementRef(value: ElementRef<HTMLCanvasElement>) {
    console.log('==> set chartElementRef')
    this._chartElementRef = value;
  }

  @Input()
  input: any;

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit() {
    console.log('input',this.input)
    this.draw(this.input);
  }
  private draw (input: any) { 
      const canvas = this.chartElementRef.nativeElement;
      const ctx = canvas.getContext("2d");
   
      return new Chart((ctx as any), input.metadata.configData);

  }

}