import { Component, OnInit } from '@angular/core';
import { Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';


// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    public loading: boolean = true;
    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void { }

}