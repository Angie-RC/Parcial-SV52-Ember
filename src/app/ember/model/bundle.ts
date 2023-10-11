import {Product} from "./product";

export class Bundle {
  id:string
  title:string
  description:string
  photoUrl:string
  price: number
  rating:number


  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.photoUrl = '';
    this.price = 18.0;
    this.rating = 18.0;
  }
}
