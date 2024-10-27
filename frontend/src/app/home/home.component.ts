import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/service';
import { Chart, registerables } from 'chart.js';
import { first } from 'rxjs';

Chart.register(...registerables);
var chart: any; 
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    chartsData: any[] = []
    constructor(private productService: ProductService) {
  }
  charts: any[] = [];
    ngOnInit() {
        this.productService
      .getCharts()
      .pipe(first())
            .subscribe((chartsData) => {
                this.chartsData = chartsData;
                this.charts = chartsData.map((ele,ind) => {
                    // if(chart) chart.destroy()
                    // chart = new Chart(ele.chartId, ele.configData as any)
                    return {
                        metadata: ele,
                        chart: chart
                    }
                })
            });
  }
}
