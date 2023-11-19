import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule }  from '../../../../libs/TerrariaWiki/features/src/lib/features.module'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeaturesModule],
  selector: 'client-side-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-side';
}
