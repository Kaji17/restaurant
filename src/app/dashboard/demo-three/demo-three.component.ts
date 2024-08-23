import { Component } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { Observable, distinctUntilChanged, filter, map, startWith } from 'rxjs';
import { IBreadcrumb } from 'src/app/shared/interfaces/breadcrumb.type';
import { ThemeConstantService } from 'src/app/shared/services/theme-constant.service';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-three.component.html',
})
export class DemoThreeComponent {
  isLoading = true;
  showContent = false;

  textColor: string = 'text-white';
  rounded: string = 'rounded-full';
  bgColor: string = '';

  breadcrumbs$: Observable<IBreadcrumb[]>;
  contentHeaderDisplay: string;
  isFoldedTop: boolean;
  isFolded: boolean;
  isExpand: boolean;
  isSideNavDark: boolean;
  selectedHeaderColor: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private themeService: ThemeConstantService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
            return child.snapshot.data['headerDisplay'];
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      this.contentHeaderDisplay = data;
    });
  }


  ngOnInit() {
    // Simulate loading time
    this.loadData();
    this.breadcrumbs$ = this.router.events.pipe(
      startWith(new NavigationEnd(0, '/', '/')),
      filter(event => event instanceof NavigationEnd), distinctUntilChanged(),
      map(data => this.buildBreadCrumb(this.activatedRoute.root))
    );
    this.themeService.isMenuTopChanges.subscribe(isFoldedTop => this.isFoldedTop = isFoldedTop);
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);

    function removePreloader() {
      const preloader = document.getElementById('loaderOverlay');
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }
    window.addEventListener('load', removePreloader)
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    let label = '', path = '/', display = null;

    if (route.routeConfig) {
      if (route.routeConfig.data) {
        label = route.routeConfig.data['title'];
        path += route.routeConfig.path;
      }
    } else {
      label = 'Dashboard';
      path += 'dashboard';
    }

    const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
    const breadcrumb = <IBreadcrumb>{
      label: label, url: nextUrl
    };

    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  // Value
}
