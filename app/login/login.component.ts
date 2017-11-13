import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
        <Button (tap)="goToHome()" text="Login"></Button>
    `
})
export class LoginComponent {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate([
      '/home',
      //{ outlets: { catoutlet: ['cats'] } }
    ]);
  }
}
