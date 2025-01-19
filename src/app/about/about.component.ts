import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about',
  imports: [MatGridListModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class AboutComponent {

}
