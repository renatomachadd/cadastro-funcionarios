import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funcionarios';
  site1:string;

constructor() { 
  this.site1="aaaaaa bbbbbb";
}
  
  ngOnInit(): void {}
    
}