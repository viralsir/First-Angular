import { Component } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productservice:any;

constructor() {
   this.productservice=new ProductService();
}

}
