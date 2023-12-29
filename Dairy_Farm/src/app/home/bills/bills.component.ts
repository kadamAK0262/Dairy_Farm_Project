import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { EditDailyDistributionDetailsComponent } from '../distribution/edit-daily-distribution-details/edit-daily-distribution-details.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs =pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})


export class BillsComponent {

  generatePdf() {
    const headerRow = this.displayedColumns.map(column => column.toUpperCase());

    const billFrom = "Bill From: Name: John Snow,   Address: New York,      City: Washington,     Phone Number: 9554578545";

  const billTo = `Bill To: Name: ${this.dataSource.data[0].customerName}, Address: ${this.dataSource.data[0].address}, Contact Number: ${this.dataSource.data[0].contactNo}`;
   
  const line ="Thank you for choosing Dairy Farm!";
  
    const tableBody = [
      headerRow, // Header row
      ...this.dataSource.data.map(row => this.displayedColumns.map(column => String(row[column])))
    ];
  
    const totalRow = [
      'Total', // Label for the total row
      '', // Leave other cells empty or customize as needed
      '', 
      '', 
      '', 
      '', 
      '', 
      this.totalBill.toString(), // Include the total bill in the total row
    ];

    const currentDate = new Date().toLocaleDateString(); // Get the current date

  const watermark = {
    text: `Generated on: ${currentDate}`, // Watermark text with the current date
    color: 'gray',
    opacity: 0.5,
    bold: true,
    italics: false,
  };
  
    let docDefinition = {
      content: [
        { text: 'Dairy Farm', style: 'header' },
      { text: 'Daily Data', style: 'subheader' },
      { text: '\n' },
        { text: billFrom, style: 'subheader' },
        { text: '\n' },
      { text: billTo, style: 'subheader' },
      { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', ],
            body: [...tableBody, totalRow], // Add the total row to the table body
            layout: {
              hLineWidth: function (i: number, node: { table: { body: string | any[]; }; }) {
                return (i === 0 || i === node.table.body.length) ? 2 : 1; 
              },
              vLineWidth: function (i: number, node: { table: { widths: string | any[]; }; }) {
                return (i === 0 || i === node.table.widths.length) ? 2 : 1; 
              },
              hLineColor: function (i: number, node: { table: { body: string | any[]; }; }) {
                return i === 0 || i === node.table.body.length ? 'black' : '#ccc'; 
              },
              vLineColor: function (i: number, node: { table: { widths: string | any[]; }; }) {
                return i === 0 || i === node.table.widths.length ? 'black' : '#ccc'; 
              },
              paddingLeft: function (i: any, node: any) { return 5; }, 
              paddingRight: function (i: any, node: any) { return 5; },
              paddingTop: function (i: any, node: any) { return 2; }, 
              paddingBottom: function (i: any, node: any) { return 2; } 
            }
          }
        },
        { text: '\n' },
        { text: '\n' },
        { text: line , style: 'header' },

        { text: '\n' },
      { text: 'Total Bill: ' + this.totalBill, style: 'totalBill' },
      // { text: 'Thank you for choosing Dairy Farm!', style: 'thankYou' },
        { text: watermark.text, color: watermark.color, opacity: watermark.opacity, bold: watermark.bold, italics: watermark.italics }
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        infoText: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        },
        totalBill: {
          fontSize: 14,
          bold: true,
          alignment: 'right',
          margin: [0, 20, 0, 10]
        },
        thankYou: {
          fontSize: 16,
          alignment: 'center',
          margin: [0, 50, 0, 0]
        }
      } as { [key: string]: any }
    };
    pdfMake.createPdf(docDefinition).open();
  }
  

  constructor(private customerservice:CustomerService){
    this.getCustomerhistory();
    this.applyDateFilter();
  }

  displayedColumns: string[] = [
    // 'id',   
    'customerName', 
    'idOfSociety',
     'checkDate', 
  'delivered',
 
  'milkType',

   'quantity',
  'rate','bill'
 
  ];

    dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;
  totalBill: number = 0;
  // startDate: Date | null = null; 
  // endDate: Date | null = null; 
  
  historylist:any
  
  customerId= sessionStorage.getItem("customer_id")
  numberValue = Number(this.customerId);
  
  
  getCustomerhistory(){
    console.log("customer id: ",this.customerId);
    console.log(typeof(this.customerId))  

    this.customerservice.historyofcustomer(sessionStorage.getItem("customer_id")).subscribe(data=>{
      this.historylist=data;
      console.log(this.historylist);
      
    })
  }

  startDate!: Date;
  endDate!: Date;

  applyDateFilter() {
    if (this.startDate && this.endDate) {
      const startOfDay = new Date(this.startDate);
      startOfDay.setHours(0, 0, 0, 0);
  
      const endOfDay = new Date(this.endDate);
      endOfDay.setHours(23, 59, 59, 999);
  
      console.log('Start Date:', startOfDay);
      console.log('End Date:', endOfDay);
  
      const filteredData = this.historylist.filter((item: { checkDate: string | number | Date; }) => {
        const checkDate = new Date(item.checkDate);
  
        console.log('Item Check Date:', checkDate);
  
        return checkDate >= startOfDay && checkDate <= endOfDay;
      });
  
      console.log('Filtered Data:', filteredData);
  
      this.dataSource.data = [...filteredData];
      this.calculateTotalBill(filteredData);
    }
  }
  


  calculateTotalBill(filteredData: any[]): void {
    try {
      // Ensure that filteredData is an array
      if (Array.isArray(filteredData) && filteredData.length > 0) {
        // Use Array.reduce to calculate the total bill
        this.totalBill = filteredData.reduce((total, item) => total + (item.bill || 0), 0);
      } else {
        // If filteredData is not an array or is empty, set totalBill to 0
        this.totalBill = 0;
      }
    } catch (error) {
      console.error('Error calculating total bill:', error);
      // Set totalBill to 0 in case of an error
      this.totalBill = 0;
    }
  }

  
}