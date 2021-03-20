import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ContactosApp';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  isLargeScreen(): boolean {
    return window.innerWidth > 501 ? true : false;
  }

  close(): void{
    console.log(this.sidenav);
    this.sidenav?.toggle();
  }

}
