import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

   // Structural Directives => NgIf Directives

   isValid:boolean = false;

   onClick(){
     this.isValid = true;
   }

}
