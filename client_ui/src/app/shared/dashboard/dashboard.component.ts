import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navbarCollapsed = true;
  searchText = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  search(event: Event) {
    event.preventDefault();
    if (!this.searchText) {
      return;
    }
    this.router.navigate(['/search'], {
      queryParams: {
        'search': this.searchText
      }
    });
  }

}
