import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MENU} from '../../../app-assets/constants/menu';
import {NavigationEnd, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements AfterViewInit {
  @ViewChild('drawerRef') drawerRef;
  mdtRef = null;
  scroll = null;
  menu = MENU;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.mdtRef = document.getElementsByTagName('mat-drawer-content')[0];
    fromEvent(this.mdtRef, 'scroll').subscribe(v => console.log(v));
    // @ts-ignore
    this.scroll = fromEvent(this.mdtRef, 'scroll').pipe(map((r: Event ) => r.target.scrollTop));
    console.log('this.mdtRef', this.mdtRef);
    console.log('this.drawerRef', this.drawerRef);


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mdtRef.scrollTo(0, 0, 'auto');
      }
    });
  }

  scrollToTop() {
    this.mdtRef.scrollTo(0, 0);
  }

  get isMainPage() {
    return this.router.url === '/';
  }
}
