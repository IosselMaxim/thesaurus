import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent {


  constructor(private router: Router) {
    const navEndEvents$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd));

    navEndEvents$.subscribe((e: NavigationEnd) => {
        gtag('config', 'UA-23904957-2', {
          page_path: e.urlAfterRedirects
        });
      });
  }
}
