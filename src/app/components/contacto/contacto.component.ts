import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  contactos: Contacto[] = [
    {
      id: 1,
      nombre: 'frank',
      apellido: 'ospino',
      direccion: 'calle 6c1 # 29-25 nueva esperanza',
      telefono: '3046449579',
      telefono2: '3152414827',
      email: 'ospi89@hotmail.com',
      activo: true
    }
  ];
  displayedColumns: string[] = ['id', 'Nombre', 'Apellido', 'Telefono 1', 'Telefono 2', 'opciones'];

  constructor() { }

  ngOnInit(): void {
  }

}
