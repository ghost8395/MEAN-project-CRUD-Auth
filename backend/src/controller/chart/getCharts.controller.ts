import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const getCharts = asyncHandler(
  async (req: Request<object, object, any>, res: Response) => {
    const result = [
      {
        chartId: "SalesByCategory",
        title: "Sales by Category",
        description: "You're are seeing sales as per category",
        configData: {
          type: "bar",
          data: {
            labels: [
              "Food",
              "Pet",
              "Fruits",
              "Electronics",
              "Media",
              "Books",
              "Sports",
            ],
            datasets: [
              {
                label: "2023-2024",
                data: [
                  500000, 40000, 300000, 1300000, 2000000, 800000, 1500000,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      },
      {
        chartId: "MonthlyRevenue",
        title: "Monthly Revenue",
        description: "You're are seeing Monthly Revenue",

        configData: {
          type: "bar",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            datasets: [
              {
                label: "(2023-2024) Dollars per month",
                data: [
                  13000000, 15000000, 13000000, 20000000, 30000000, 25000000,
                  35000000, 45000000,  55000000,  35000000,  65000000, 68000000, 
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      },
      {
        chartId: "YearlySales",
        title: "Yearly Sales",
        description: "You're are seeing Yearly Sales Trends",

        configData: {
          type: "line",
          data: {
            labels: [
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2023",
            ],
            datasets: [
              {
                label: "Yearly Sales Trend",
                data: [
                  13000000, 15000000, 13000000, 20000000, 30000000, 25000000,
                  35000000,  45000000,  55000000,  35000000,  65000000, 
                ],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
        },
      },
    ];
    res.status(200).send(result);
  }
);
