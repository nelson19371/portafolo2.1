import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
  mostrarPortada = true;
  mostrarSobreMi = true;
  mostrarProyectos = false;


    // Función para mostrar el componente de portada
    mostrarPortadaComponent() {
      this.mostrarPortada = true;
      this.mostrarSobreMi = true;
      this.mostrarProyectos = false;
    }

    // Función para mostrar el componente de sobre mi
    mostrarSobreMiComponent() {
      this.mostrarPortada = false;
      this.mostrarSobreMi = false;
      this.mostrarProyectos = true;
    }
}
