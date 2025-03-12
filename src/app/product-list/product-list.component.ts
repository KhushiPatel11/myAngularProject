import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  name:string = 'Phone';
  price:number = 999;
  color:string =  'black';

  fname:string = 'John Deo'

  product = {
    name: 'Phone',
    price: 789,
    color: 'black',
    discount: 8.9,
    inStock: 10,
    pImage: 'assets/images.jpg'
  }

  getDiscountedPrice () {
   return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event : any){
    this.fname = event.target.value;
    // console.log(event.target.value)
  }

  addToCart:number = 0;
  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
}
