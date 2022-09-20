import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../service/serv1.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  meals1 = this.serv.meals;
  dummy: any = 0
  cntr = this.serv.cntrCart;
  sum = this.serv.tp;

  searchKey: string = "";

  constructor(public serv: Serv1Service) { }

  ngOnInit(): void {
  }

  count(valu: any) {

    this.dummy = this.meals1[valu - 1].cnt;
    this.dummy += 1
    this.meals1[valu - 1].cnt = this.dummy;


    // console.log(typeof(this.meals1[valu-1].cnt));
    this.sum = this.sum + (this.meals1[valu - 1].price)
    this.serv.tp=this.sum
    console.log(this.sum)

    this.cntr += 1
    this.meals1[valu - 1].flag = true;
    console.log(this.meals1);

  }

  decr(valu: any) {

    this.dummy = this.meals1[valu - 1].cnt;
    this.dummy -= 1
    if (this.dummy >= 0) {
      this.meals1[valu - 1].cnt = this.dummy;

      // console.log(typeof(this.meals1[valu-1].cnt));
      this.sum = this.sum - (this.meals1[valu - 1].price)

      this.cntr -= 1
      this.meals1[valu - 1].flag = true;
      console.log(this.meals1);
    }
    if (this.dummy == 0 || this.dummy < 0) {
      this.meals1[valu - 1].flag = false;

    }

  }
}
