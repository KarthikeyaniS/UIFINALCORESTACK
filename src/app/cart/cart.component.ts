import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../service/serv1.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ser: Serv1Service) { }

  meals1 = this.ser.meals;
  dummy: any = 0
  cntr = this.ser.cntrCart;
  subp = this.meals1[0].price
  sum = this.ser.tp;
  
  ngOnInit(): void {
  }

  slctd = this.ser.meals
  tmp1: any
  count(valu: any) {
    // for(let i=0;i<this.meals1.length;i++){
    //    this.tmp1 = this.meals1[i].cnt;
    //   var pr = this.meals1[i].price;
    //   this.sum1 =  this.tmp1*pr
    //   console.log(this.tmp1*pr);


    //   //console.log(this.meals1[i].price);
    // }

    this.dummy = this.meals1[valu - 1].cnt;
    this.dummy += 1

    this.meals1[valu - 1].cnt = this.dummy;

    //sub total price

    this.sum = this.sum + (this.meals1[valu - 1].price)
    console.log(this.sum);




    // console.log(typeof(this.meals1[valu-1].cnt));

    this.cntr += 1
    this.meals1[valu - 1].flag = true;
    // console.log(this.meals1);

  }
  fnc(a: any, b: any) {
    return a * b;
  }


  decr(valu: any) {

    this.dummy = this.meals1[valu - 1].cnt;
    this.dummy -= 1
    if (this.dummy >= 0) {
      this.meals1[valu - 1].cnt = this.dummy;


      this.sum = this.sum - (this.meals1[valu - 1].price)

      // console.l  this.meals1[valu-1].flag = true;
      // console.log(this.meals1);
      if (this.dummy == 0 || this.dummy < 0) {
        this.meals1[valu - 1].flag = false;
      }


    }
  }
}
