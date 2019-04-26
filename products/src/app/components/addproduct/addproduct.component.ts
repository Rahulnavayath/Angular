import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../component/product-list/product.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ps: ProductService) { }

  productItem= new Iproduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
  AddProduct(){
    console.log(this.productItem)
    this.ps.newProduct(this.productItem);
    alert("Success");
  }
}
