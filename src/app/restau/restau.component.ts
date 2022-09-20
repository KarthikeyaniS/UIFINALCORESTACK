import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restau',
  templateUrl: './restau.component.html',
  styleUrls: ['./restau.component.css']
})
export class RestauComponent implements OnInit {

  resArr = [
    {
      id: 1,
      Image: "https://b.zmtcdn.com/data/pictures/chains/3/6053/4d74fcbd91a43298b65fb0cc65c7aec1.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      htlName: 'little bytes restaurant',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 2,
      Image: "https://images.hindustantimes.com/tech/img/2020/12/31/960x540/pizza-3007395_1920_1609397294701_1609397310003.jpg","cntr" : 0,
      htlName: 'New Ever Green Continental',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 3,
      Image: "https://i.ndtvimg.com/i/2017-08/indian-food_650x400_81501923865.jpg","cntr" : 0,
      htlName: 'Thomson Restaurant',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 4,
      Image: "https://thumbs.dreamstime.com/b/meatballs-tomato-sauce-pan-black-background-rosemary-dish-captured-above-top-view-flat-lay-free-copy-text-153364092.jpg","cntr" : 0,
      htlName: 'Habibee',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 5,
      Image: "https://b.zmtcdn.com/data/pictures/chains/1/19445411/e17d5049ef4f12ac6400056478373cc9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      htlName: 'Zaper Foods',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 6,
      Image: "https://images.indianexpress.com/2013/12/momos-759.jpg","cntr" : 0,
      htlName: 'Plan B Bristo cafe',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 7,
      Image: "https://b.zmtcdn.com/data/pictures/chains/3/6053/4d74fcbd91a43298b65fb0cc65c7aec1.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      htlName: 'Jooz Buzz',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 8,
      Image: "https://b.zmtcdn.com/data/pictures/1/19634611/48bba1d110ae2bd59f4bd5e197a1b386.jpg?fit=around|750:500&crop=750:500;*,*",
      htlName: 'little bytes restaurant',
      desc: 'desserts, Bakery,Fast food ',
      

    },
    {
      id: 9,
      Image: "https://media.istockphoto.com/photos/roasted-tomatoes-cut-varied-in-baking-tray-and-ladle-with-basil-and-picture-id1328325937?b=1&k=20&m=1328325937&s=170667a&w=0&h=TPajY1LRq5PqR1_mtb5p0ZkNJZrAMDHgT_CaJXemSZs=",
      htlName: 'little bytes restaurant',
      desc: 'desserts, Bakery,Fast food ' ,


    },
    {
      id: 10,
      Image: "https://c.ndtvimg.com/2021-12/j6v3dio_indian-food-generic_625x300_30_December_21.jpg","cntr" : 0,
      htlName: 'hello restaurant',
      desc: 'desserts, Bakery,Fast food '

    },
    {
      id: 11,
      Image: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/117714-fpfzghttxj-1555508155.jpg","cntr" : 0,
      htlName: 'little bytes restaurant',
      desc: 'desserts, Bakery,Fast food '

    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  fnc(v1:any){

  }

}
