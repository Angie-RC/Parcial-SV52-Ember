export class Product {
  id:string
  title:string
  description:string
  photoUrl:string
  price: number
  bundleId:string

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.photoUrl = '';
    this.price = 18.0;
    this.bundleId = '';
  }
}
