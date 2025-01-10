import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks=signal([
    'Instalar el angular cli',
    'Crear proyecto',
    'Crear componentes'
  ])
  name=signal('Eliud');
  age=19;
  disabled=true;
  img ='https://w3schools.com/howto/img_avatar.png';

  person=signal({
    name: 'Fani',
    age: 17,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })
  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    const input=event.target as HTMLInputElement;
    const newValue=input.value
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input=event.target as HTMLInputElement;
    console.log(input.value);
  }
  colorControl=new FormControl();

  constructor(){
    this.colorControl.valueChanges.subscribe(value=>{
      console.log(value);

    })
  }

}
