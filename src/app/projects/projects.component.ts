import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ProjectsComponent {

}
