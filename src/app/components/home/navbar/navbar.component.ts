import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSmallScreen: Observable<boolean> | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isSmallScreen = this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).pipe(
      map((result:any) => result.matches)
    );
  }
}
