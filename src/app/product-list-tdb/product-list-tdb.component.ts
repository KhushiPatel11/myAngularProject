import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-tdb',
  templateUrl: './product-list-tdb.component.html',
  styleUrls: ['./product-list-tdb.component.scss']
})
export class ProductListTdbComponent {
  searchText:string = '';
  updateSearchText(event: any){
   this.searchText = event.target.value;
  }

  color: string = 'blue';
  fruit = 'Apple';

  inStock = true;
  
}
