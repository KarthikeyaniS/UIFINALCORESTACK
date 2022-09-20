import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  arr1 = [
    {
     Image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
     name: 'Chicken'
    },
    {
      Image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      name: 'Briyani'
     },
     {
      Image:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      name: 'Fried Rice'
     },
     {
      Image:"https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
      name: 'shawarma'
     },
     {
      Image:"https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
      name: 'shawarma'
     },
     {
      Image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      name: 'Briyani'
     },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
