import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CeRequestStatus } from '../../models/ce-request.model';
import { CeRequestStateService } from '../../services/ce-request-state.service';
import { MOCK_VIEW_REQUEST, ViewRequestData } from '../../data/mock-view-request';

@Component({
  selector: 'app-view-request',
  standalone: true,
  imports: [],
  templateUrl: './view-request.html',
  styleUrl: './view-request.scss',
})
export class ViewRequestComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly state = inject(CeRequestStateService);

  protected readonly request = computed<ViewRequestData>(() => {
    const id = this.route.snapshot.queryParamMap.get('id');
    const found = this.state.requests().find(r => r.estimateNumber === id);

    if (found) {
      return {
        estimateNumber: found.estimateNumber,
        projectName: found.projectTitle,
        requestDate: found.requestDate,
        projectTeam: this.state.draftForm().projectTeam,
        afeNumber: this.state.draftForm().afeNumber,
        designProgress: this.state.draftForm().designProgress,
        preliminaryCostDeadline: this.state.draftForm().preliminaryCostDeadline,
        ibpTurnaroundYear: this.state.draftForm().ibp,
        status: found.status,
      };
    }

    return MOCK_VIEW_REQUEST;
  });

  protected statusClass(status: CeRequestStatus): string {
    return 'status status--' + status.toLowerCase().replace(/\s+/g, '-');
  }

  protected goBack(): void {
    this.router.navigate(['/']);
  }
}
