import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-detail',
  templateUrl: './res-detail.component.html',
  styleUrls: ['./res-detail.component.css']
})
export class ResDetailComponent implements OnInit {

  restaurants= [
		{
			"userId": "fe35c87c-c57c-4748-8619-b5e3fea60603",
			"restaurantName": "Burger King",
			"description": "Aut eos quae libero quibusdam vero. Sit libero velit. Quis praesentium ab.",
			"restaurantFullAddress": "Independence, Altenwerth Fork, 8590 Kub Junctions",
			"lat": "66.9630",
			"lon": "122.4982",
			"logoUrl": "https://pbs.twimg.com/profile_images/1300733740809846784/WxzYnc_r_400x400.jpg","cntr" : 0,
			"contactEmail": "Frank_Keebler@yahoo.com",
			"restaurantPhone": "587-752-5414",
            "rate": "4.5",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "daa43830-1f6d-4c67-83be-aeb276fdf054",
			"restaurantName": "Pizza Hut",
			"description": "Dolores eius veritatis voluptatem aspernatur. Autem expedita ea repudiandae praesentium sed provident molestiae accusantium. Praesentium distinctio est earum molestiae voluptatem.",
			"restaurantFullAddress": "Carson, Hansen Way, 529 Vicky Fields",
			"lat": "89.0261",
			"lon": "120.9699",
			"logoUrl": "https://yt3.ggpht.com/ytc/AKedOLSTP4cPU2cs1Zg-hxYggqMMUEJfT82A6atYmuKNzw=s900-c-k-c0x00ffffff-no-rj",
			"contactEmail": "Destany45@yahoo.com",
			"restaurantPhone": "922.481.4521",
            "rate": "5",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "9bd75f84-d296-4c60-ab30-1e32cbcf5044",
			"restaurantName": "KFC",
			"description": "Nobis animi aut sit odit. Eos quasi aliquid repellat sed voluptatem. Quia nostrum aut est ullam rerum expedita.",
			"restaurantFullAddress": "Burlington, Prohaska Parks, 594 Sporer Club",
			"lat": "-28.9258",
			"lon": "18.9468",
			"logoUrl": "https://wikiforschool.com/ad/uploads/1261021200px-kfc_logo.svg.png",
			"contactEmail": "Madalyn_Schuppe17@gmail.com",
			"restaurantPhone": "1-656-730-1630",
            "rate": "2",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "6b39b740-dfe0-4a9d-a083-3c68944380c4",
			"restaurantName": "Olive Garden",
			"description": "Aperiam nesciunt consequatur ut et sed fugiat ab. Necessitatibus ut vel incidunt a sit autem quia eum eos. Sequi beatae animi. Facere laborum quo a similique. Asperiores eaque explicabo tempore dignissimos aut quaerat provident ipsam. Earum tenetur voluptas perferendis nemo laboriosam laudantium harum consequuntur.",
			"restaurantFullAddress": "Broomfield, Barney Extensions, 730 Cameron Mission",
			"lat": "-23.4399",
			"lon": "44.0771",
			"logoUrl": "https://pbs.twimg.com/profile_images/1351629188122484738/2d2fDGqO_400x400.jpg","cntr" : 0,
			"contactEmail": "Maurine_Satterfield@yahoo.com",
			"restaurantPhone": "820.541.0849 x12817",
            "rate": "3",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "4a920c22-5692-4c99-97c7-0e7d42cfb962",
			"restaurantName": "Chick-fill-A",
			"description": "Aut sint ea. Amet commodi dicta minima eum provident hic. Minus eius amet consequuntur et totam consequatur. Et fugiat sit qui consectetur doloribus.",
			"restaurantFullAddress": "Oak Park, Haag Pines, 2078 Bahringer Walk",
			"lat": "-44.9412",
			"lon": "135.7750",
			"logoUrl": "https://pbs.twimg.com/profile_images/1148729107406041088/emlH0Rv4_400x400.png",
			"contactEmail": "Erna.Romaguera41@yahoo.com",
			"restaurantPhone": "(558) 723-8690 x34307",
            "rate": "4",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "6705b5a5-3e6a-453f-bb61-2bf0253bd2f1",
			"restaurantName": "SUBWAY",
			"description": "Non nisi neque dolorum enim. Reiciendis quia necessitatibus voluptatem molestiae et sed autem. Eligendi ea eligendi ratione omnis praesentium.",
			"restaurantFullAddress": "Burlington, Obie Street, 6349 Vickie Pass",
			"lat": "-62.5411",
			"lon": "-126.9538",
			"logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Subway_restaurant.svg/2560px-Subway_restaurant.svg.png",
			"contactEmail": "Enola47@hotmail.com",
			"restaurantPhone": "1-568-988-1852 x96275",
            "rate": "4.5",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "f0e1f905-fb0c-439e-b8eb-5d495b70985a",
			"restaurantName": "Al Taboon",
			"description": "Officia sequi eius sint vero consequatur delectus voluptas nemo. Sunt nisi voluptatem quasi. Aut placeat sit labore maxime impedit delectus.",
			"restaurantFullAddress": "Renton, Dion Club, 317 Tremblay Rapids",
			"lat": "4.5117",
			"lon": "-23.1861",
			"logoUrl": "https://scontent.fgza9-1.fna.fbcdn.net/v/t1.6435-9/69540025_1606920992776349_2212732413203709952_n.png?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=FUULGzgiS-sAX8uLNVe&_nc_ht=scontent.fgza9-1.fna&oh=c9783b4c45f8830a7d429d356b47dc62&oe=61B13C5A",
			"contactEmail": "Jevon73@yahoo.com",
			"restaurantPhone": "432-782-2033",
            "rate": "4",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		{
			"userId": "4f0c67ca-028e-45c0-b5d9-73b90e191d08",
			"restaurantName": "Chicken Broast",
			"description": "Quidem quia sed qui quos eligendi tenetur harum fugit. Quia quod qui perspiciatis expedita. Et et pariatur. Cupiditate quam nulla voluptatibus dolorum neque voluptatem nisi assumenda labore. Labore quis voluptatem natus quisquam. Omnis soluta odit.",
			"restaurantFullAddress": "Pittsfield, Simone River, 932 Leffler Road",
			"lat": "-79.7171",
			"lon": "-59.3275",
			"logoUrl": "https://scontent.fgza9-1.fna.fbcdn.net/v/t1.6435-9/102318117_160951795435717_4683754221034536960_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=KSdIsWzORL8AX8fcXm0&_nc_ht=scontent.fgza9-1.fna&oh=f0ea278bf456af8948e37bb4f06b458c&oe=61B48725",
			"contactEmail": "Wilford.Parker@yahoo.com",
			"restaurantPhone": "(995) 311-2902 x141",
            "rate": "4.5",
            image:"https://img.freepik.com/premium-psd/3d-chrome-logo-mockup-modern-restaurant-facade_204971-184.jpg?w=2000"
		},
		// {
		// 	"userId": "a1e5b67a-2b38-48d0-9c90-6828f2d3d3ac",
		// 	"restaurantName": "Palmera",
		// 	"description": "Occaecati et omnis. Qui unde ducimus ullam tempora nihil et modi sit expedita. Nulla debitis eius aut. Et assumenda sunt sapiente fugit vel omnis incidunt. Excepturi natus voluptatem voluptatem reiciendis.",
		// 	"restaurantFullAddress": "Tuckahoe, Chadd Burg, 8915 Orville Branch",
		// 	"lat": "12.5680",
		// 	"lon": "67.1005",
		// 	"logoUrl": "https://scontent.fgza9-1.fna.fbcdn.net/v/t39.30808-6/244547723_1762141773994011_726848193161932089_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=enBJcWORIHcAX9pXla6&_nc_ht=scontent.fgza9-1.fna&oh=a8b44aa6682343a2cf919fd4168fb6c2&oe=61919067",
		// 	"contactEmail": "Reggie.Lebsack96@yahoo.com",
		// 	"restaurantPhone": "(660) 849-4261",
    //         "rate": "4.5"
		// },
		// {
		// 	"userId": "96776c0c-c327-43f8-95c1-a76ee64592e8",
		// 	"restaurantName": "Italiano",
		// 	"description": "Possimus assumenda dolores laborum sed quo iste. Autem vel quia deleniti culpa. Illo sequi id quae magni sed et. Ipsam amet saepe repellat magnam incidunt in unde repudiandae possimus.",
		// 	"restaurantFullAddress": "Waterbury, Braun Causeway, 3693 Grimes Land",
		// 	"lat": "-84.8636",
		// 	"lon": "-86.1968",
		// 	"logoUrl": "https://scontent.fgza9-1.fna.fbcdn.net/v/t1.6435-9/145775554_5255610064464275_5707569470569901820_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=JdjSoTKI6bgAX-Bm_JD&_nc_ht=scontent.fgza9-1.fna&oh=2083174bb7ae05a5b61cd4d25a33b4b2&oe=61B13F0B",
		// 	"contactEmail": "Logan9@gmail.com",
		// 	"restaurantPhone": "1-381-674-7457 x0738",
    //         "rate": "4.5"
		// }
	]
  

  constructor() { }

  ngOnInit(): void {
  }

}
