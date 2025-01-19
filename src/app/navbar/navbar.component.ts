import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,
    MatButtonModule,
  RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class NavbarComponent {

}
