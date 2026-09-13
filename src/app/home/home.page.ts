import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNote, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonBadge } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNote, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonBadge],
})
export class HomePage {
  constructor() {}
  // INTERPOLACIÓN: Valores que se mostrarán en el template con {{ }}
  titulo: string = "Maravilloso";
  descripcion: string = "Aprendiendo Ionic y Angular"

  // PROPERTY BINDING: Variables que se vinculan a propiedades de componentes con [ ]
  colorBoton: string = "primary";
  botonDeshabilitado: boolean = false;

  // EVENT BINDING:
  contador: number = 0;

  incrementar():void{
    this.contador++;
    this.colorBoton = this.contador>=5 ? "danger" : "primary";
  }

  resetear():void{
    this.contador=0;
    this.colorBoton="primary";
  }
  // ION-LIST y lógica{
  alumnos = [
    {nombre: "Ana Garcia", nota: 9},
    {nombre: "Luis Martinez", nota: 4},
    {nombre: "Guille Melendez", nota: 10},
    {nombre: "Edu Berville", nota: 7},
  ];

  colorNota (nota: number): string {
    if (nota >= 9) return "success";
    if (nota >= 6) return "warning";
    return "danger";
  }


}
