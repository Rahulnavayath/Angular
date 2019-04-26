import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers:[ProductService],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string="Product Management"
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;


  products:Iproduct[];
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  

  constructor(private ps: ProductService) { }

  ngOnInit():void {
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
    
  }

}
