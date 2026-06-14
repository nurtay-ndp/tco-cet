import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ce-request-flow');
  protected readonly currentRoute = signal('');

  protected readonly navigationItems = [
    { label: 'My CE Requests', id: '', active: true },
    { label: '1 · Project Team', id: 'project-team' },
    { label: '2a · New Project', id: 'new-project' },
    { label: '2b · Existing Project', id: 'existing-project' },
    { label: '3 · Questionnaire', id: 'questionnaire' },
    { label: 'View Request', id: 'view-request' },

  ];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const route = this.router.url.split('/')[1] || '';
      this.currentRoute.set(route);
      this.updateActiveItem();
    });
  }

  protected navigate(item: any): void {
    this.router.navigate([item.id || '']);
  }

  private updateActiveItem(): void {
    this.navigationItems.forEach(item => {
      item.active = item.id === this.currentRoute();
    });
  }
}
