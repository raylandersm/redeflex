import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // 👈 importar o header

@Component({
  selector: 'app-root',
  standalone: true, // 👈 certifique-se que isso existe
  imports: [RouterOutlet, HeaderComponent], // 👈 incluir aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  protected title = 'portal-angular';
}
