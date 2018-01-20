import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">{{title}}</a>
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="#">Home</a>
        <a class="nav-item nav-link" href="#">Profiles</a>
      </div>
    </nav>

    <div class='container'>
      <h1>Hello world</h1>
    </div>

  </div>
   `
})
export class AppComponent {
  title: string = 'Profiel App';
}
