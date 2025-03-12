import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  listOfString: string[] = ['mark', 'john', 'harry', 'abc', 'pqr']
}
