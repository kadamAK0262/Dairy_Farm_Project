import { Component } from '@angular/core';
import { SalesSericeService } from 'src/app/services/sales-serice.service';

export class SalesData{
  month:any;
  no:any;
  total_quantity:any;
  total_bill:any;
 
   
}
@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent {
cow=false
buffalo=false
  monthlyButtonClicked: boolean | undefined;
  quarterlyButtonClicked: boolean | undefined;

constructor(private salesSerice:SalesSericeService){

}
getCow(){
   this.cow=true
   this.buffalo=false
   this.milkType="cow"
   
}
getBuffalo(){
  this.buffalo=true;
  this.cow=false
  this.milkType="buffalo"
}
data=false

salesData:SalesData=new SalesData();
// getMontlyData(){
  
//   return this.salesSerice.getSalesDataForCow().subscribe((data)=>{
//     this.salescowdata=data
//     console.log(this.salescowdata,"sales data for cow");
    
//   })
// }

salescowdata:any;
milkType:any;
getSalesDataForCow(){
  this.data=true;
  this.quaterlyData=false
  this.monthlyButtonClicked = true;
  this.quarterlyButtonClicked = false;


  return this.salesSerice.getSalesDataForSale(this.milkType).subscribe((data)=>{
    this.salescowdata=data
  })
}
quaterlyData=false;
salesQuaterlyData:any;
getSalesDataQuarterly(){
  this.quaterlyData=true
  this.data=false;
  this.monthlyButtonClicked = false;
  this.quarterlyButtonClicked = true;

  return this.salesSerice.getSalesDataQuartely(this.milkType).subscribe(data=>{
    this.salesQuaterlyData=data
    console.log(this.salesQuaterlyData,"sales quarterly data");
    
  })


}

// salesbuffaloData:any;
// buffaloData=false;
// getSalesDataForBuffalo(){
// this.buffaloData=true
//   return this.salesSerice.getSalesDataForBuffalo().subscribe(data=>{
//     this.salesbuffaloData=data
//     console.log(this.salesbuffaloData);
    
//   })
// }
}
