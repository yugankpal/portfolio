import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  imports: [MatButtonModule,
    MatCardModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class SkillsComponent {

}
