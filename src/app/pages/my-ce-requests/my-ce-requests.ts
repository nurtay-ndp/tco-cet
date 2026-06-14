import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { CeRequest, CeRequestStatus } from '../../models/ce-request.model';
import { CeRequestStateService } from '../../services/ce-request-state.service';

@Component({
  selector: 'app-my-ce-requests',
  imports: [DatePipe, FormsModule, NgbPaginationModule, MatIconModule],
  templateUrl: './my-ce-requests.html',
  styleUrl: './my-ce-requests.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCeRequests {
  private readonly router = inject(Router);
  private readonly state = inject(CeRequestStateService);

  protected readonly user = {
    name: 'Ashley Barnes',
    role: 'Project Engineer',
    department: 'Project Engineering',
    initials: 'JM',
  };

  protected readonly pageSize = 8;
  protected readonly currentPage = signal(1);
  protected readonly search = signal('');

  private readonly requests = this.state.requests;

  protected get totalRequests(): number {
    return this.requests().length;
  }

  protected readonly filteredRequests = computed(() => {
    const term = this.search().trim().toLowerCase();
    const page = this.currentPage();
    const all = term
      ? this.requests().filter(
          (r) =>
            r.estimateNumber.toLowerCase().includes(term) ||
            r.projectTitle.toLowerCase().includes(term),
        )
      : this.requests();

    const start = (page - 1) * this.pageSize;
    return all.slice(start, start + this.pageSize);
  });

  protected readonly filteredTotal = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) return this.requests().length;
    return this.requests().filter(
      (r) =>
        r.estimateNumber.toLowerCase().includes(term) ||
        r.projectTitle.toLowerCase().includes(term),
    ).length;
  });

  protected statusClass(status: CeRequestStatus): string {
    return 'status status--' + status.toLowerCase().replace(/\s+/g, '-');
  }

  protected createRequest(): void {
    this.state.resetDraft();
    this.router.navigate(['/project-team']);
  }

  protected view(request: CeRequest): void {
    this.router.navigate(['/view-request'], { queryParams: { id: request.estimateNumber } });
  }
}
