import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ContactsComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { hostID: crypto.randomUUID().toString() },
})
export class HomeComponent {

}
