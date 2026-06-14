import { Injectable, signal } from '@angular/core';
import { CeRequest } from '../models/ce-request.model';
import { MOCK_CE_REQUESTS } from '../data/mock-ce-requests';

@Injectable({ providedIn: 'root' })
export class CeRequestStateService {
  readonly requests = signal<CeRequest[]>(MOCK_CE_REQUESTS);

  readonly draftForm = signal({
    projectTeam: 'Project Engineering',
    afeNumber: '',
    isNewProject: true,
    estimateRequestType: '',
    projectManagementType: '',
    cpdepPhase: '',
    projectTitle: '',
    projectNumberFree: '',
    projectCodeFree: '',
    designProgress: '',
    anticipatedCompletionDate: '',
    area: '',
    unit: '',
    preliminaryCostDeadline: '',
    ibp: '',
    taYear: '',
  });

  addRequest(): CeRequest {
    const form = this.draftForm();
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];

    const lastNum = this.requests().length + 1;
    const newRequest: CeRequest = {
      estimateNumber: `17-022-02-00-A-${String.fromCharCode(64 + lastNum)}`,
      projectTitle: form.projectTitle || 'New Project',
      requestDate: dateStr,
      status: 'Draft',
    };

    this.requests.update(list => [newRequest, ...list]);
    return newRequest;
  }

  resetDraft(): void {
    this.draftForm.set({
      projectTeam: 'Project Engineering',
      afeNumber: '',
      isNewProject: true,
      estimateRequestType: '',
      projectManagementType: '',
      cpdepPhase: '',
      projectTitle: '',
      projectNumberFree: '',
      projectCodeFree: '',
      designProgress: '',
      anticipatedCompletionDate: '',
      area: '',
      unit: '',
      preliminaryCostDeadline: '',
      ibp: '',
      taYear: '',
    });
  }
}
