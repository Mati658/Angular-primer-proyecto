import { Component, getNgModuleById } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  edad1! : number | undefined;
  edad2! : number | undefined;
  promedio : number = 0;
  sumaTotal : number = 0;

  calcularPromedio(num1 : any, num2 : any, total : number){
    console.log(num1)
    if (num1 == undefined || num2 == undefined) {
      return alert("Llene todos los campos!!!");
    }
    this.sumaTotal = (num1 + num2)
    this.promedio =  this.sumaTotal / total;
  }

  limpiar(){
    this.edad1 = undefined;
    this.edad2 = undefined;
    this.sumaTotal = 0;
    this.promedio = 0;
  }
}
