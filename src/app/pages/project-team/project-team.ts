import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CeRequestStateService } from '../../services/ce-request-state.service';

@Component({
  selector: 'app-project-team',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './project-team.html',
  styleUrl: './project-team.scss',
})
export class ProjectTeamComponent {
  private readonly router = inject(Router);
  private readonly state = inject(CeRequestStateService);

  protected readonly steps = [
    { number: 2, label: 'Project Team', active: true },
    { number: 3, label: 'Project Details' },
    { number: 4, label: 'Questionnaire' },
  ];

  protected readonly teams = ['Project Engineering', 'Operations', 'Maintenance', 'Safety'];

  protected readonly formData = signal({
    projectTeam: this.state.draftForm().projectTeam,
    afeNumber: this.state.draftForm().afeNumber || '5739821755',
    isNewProject: this.state.draftForm().isNewProject,
  });

  protected goBack(): void {
    this.router.navigate(['/']);
  }

  protected continue(): void {
    this.state.draftForm.update(d => ({
      ...d,
      projectTeam: this.formData().projectTeam,
      afeNumber: this.formData().afeNumber,
      isNewProject: this.formData().isNewProject,
    }));
    const next = this.formData().isNewProject ? '/new-project' : '/existing-project';
    this.router.navigate([next]);
  }
}
