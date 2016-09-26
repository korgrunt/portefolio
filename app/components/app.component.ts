import { Component }          from '@angular/core';

import { HeaderComponent }     from './macro/header.component';
import { FooterComponent }     from './macro/footer.component';

import '../rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
  <!-- Static header component goes here -->

  <my-header></my-header>

  <main class="mdl-layout__content" width="100%">
  	<div class="page-content">
  	  <!-- Dynamic content goes here -->
      <router-outlet></router-outlet>
    </div>
	</main>

  <!-- Static footer component goes here -->
  <my-footer></my-footer>

  `,
  styleUrls: ['app/components/app.component.css']
})

export class AppComponent {
  title: string = 'Aouaichia Naïm Portefolio';

}
