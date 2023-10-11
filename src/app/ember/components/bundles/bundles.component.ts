import {Component, OnInit} from '@angular/core';
import {Bundle} from "../../model/bundle";
import {BundlesService} from "../../services/bundles.service";
import {Product} from "../../model/product";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit{
  bundles:Bundle[]=[];
  products: Product[]=[];
  constructor(private bundleService:BundlesService, private route:ActivatedRoute, private productService:ProductsService) {

  }

  ngOnInit() {
    this.getAll();
    this.getAllProducts();
  }
  getAll(){
    this.bundleService.getAllBundles().subscribe((response:any)=>{
      this.bundles=response;
    });
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((data:any)=>{
      this.products=data
    })
  }
  calculateYouSave(bundleId: string) {
    const bundle = this.bundles.find((b) => b.id === bundleId);
    if (!bundle) {
      console.error(`Bundle con ID ${bundleId} not found.`);
    }
    const bundleProducts = this.products.filter((product) => product.bundleId === bundleId);
    const totalPrice = bundleProducts.reduce((total, product) => total + product.price, 0);
    return totalPrice - (bundle ? bundle.price : 0);
  }

}
