// export interface IItem {
//   quantity: number;
//   description: string;
// }

export interface Racket {
  name: string;
  weight: number;
  img: string;
  brand: string;
}

export const racket_images = {
  head : "http://www.directtennis.co.uk/Images/ExtraLarge/head_ti_s6_tennis_racket_black.jpg",
  wilson : "http://tennisbusters.com/wp-content/uploads/2014/12/wilson-tennis-rackets-9.jpg",
  prince : "http://tennisbusters.com/wp-content/uploads/2014/12/prince-tennis-racket-10.jpg",
  babolat : "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/2aYAAOxyRNJSgnl8/$_1.JPG?set_id=2"
}

export const racket_brands = {
  head: 'Head',
  prince: 'Prince',
  babolat: 'Babolat',
  wilson: 'Wilson'
}

export const rackets = {
    data: [
      {
      "name": "Head A",
      "weight": 100,
      "img": racket_images.head,
      "brand": racket_brands.head
      },
      {
        "name": "Wilson A",
        "weight": 90,
        "img": racket_images.wilson,
        "brand": racket_brands.wilson
      },
      {
        "name": "Prince A",
        "weight": 110,
        "img": racket_images.prince,
        "brand": racket_brands.prince
      },
      {
        "name": "Babolat A",
        "weight": 95,
        "img": racket_images.babolat,
        "brand": racket_brands.babolat
      },
      {
        "name": "Head B",
        "weight": 105,
        "img": racket_images.head,
        "brand": racket_brands.head
      },
      {
        "name": "Wilson B",
        "weight": 95,
        "img": racket_images.wilson,
        "brand": racket_brands.wilson
      },
      {
        "name": "Prince B",
        "weight": 112,
         "img": racket_images.prince,
         "brand": racket_brands.prince
      },
      {
        "name": "Babolat B",
        "weight": 90,
        "img": racket_images.babolat,
        "brand": racket_brands.babolat
      }
    ]
};