import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import {
  ESTIMATE_REQUEST_TYPES,
  PROJECT_MANAGEMENT_TYPES,
  CPDEP_PHASES,
  DESIGN_PROGRESS_OPTIONS,
  AREA_OPTIONS,
  UNIT_OPTIONS,
  IBP_OPTIONS,
  TA_YEAR_OPTIONS,
  MOCK_NEW_PROJECT_FORM,
} from '../../data/mock-new-project';
import { CeRequestStateService } from '../../services/ce-request-state.service';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './new-project.html',
  styleUrl: './new-project.scss',
})
export class NewProjectComponent {
  private readonly router = inject(Router);
  private readonly state = inject(CeRequestStateService);

  protected readonly steps = [
    { number: 2, label: 'Project Team', completed: true },
    { number: 3, label: 'Project Details · New', active: true },
    { number: 4, label: 'Questionnaire' },
  ];

  protected readonly estimateRequestTypes = ESTIMATE_REQUEST_TYPES;
  protected readonly projectManagementTypes = PROJECT_MANAGEMENT_TYPES;
  protected readonly cpdepPhases = CPDEP_PHASES;
  protected readonly designProgressOptions = DESIGN_PROGRESS_OPTIONS;
  protected readonly areaOptions = AREA_OPTIONS;
  protected readonly unitOptions = UNIT_OPTIONS;
  protected readonly ibpOptions = IBP_OPTIONS;
  protected readonly taYearOptions = TA_YEAR_OPTIONS;

  protected formData = signal({ ...MOCK_NEW_PROJECT_FORM });

  protected goBack(): void {
    this.router.navigate(['/project-team']);
  }

  protected saveDraft(): void {
    this.syncToState();
    const newRequest = this.state.addRequest();
    this.router.navigate(['/view-request'], { queryParams: { id: newRequest.estimateNumber } });
  }

  protected goToQuestionnaire(): void {
    this.syncToState();
    this.router.navigate(['/questionnaire']);
  }

  private syncToState(): void {
    const f = this.formData();
    this.state.draftForm.update(d => ({
      ...d,
      estimateRequestType: f.estimateRequestType,
      projectManagementType: f.projectManagementType,
      cpdepPhase: f.cpdepPhase,
      projectTitle: f.projectTitle,
      projectNumberFree: f.projectNumberFree,
      projectCodeFree: f.projectCodeFree,
      designProgress: f.designProgress,
      anticipatedCompletionDate: f.anticipatedCompletionDate,
      area: f.area,
      unit: f.unit,
      preliminaryCostDeadline: f.preliminaryCostDeadline,
      ibp: f.ibp,
      taYear: f.taYear,
    }));
  }
}
