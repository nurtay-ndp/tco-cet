import { Routes } from '@angular/router';

import { MyCeRequests } from './pages/my-ce-requests/my-ce-requests';
import { ProjectTeamComponent } from './pages/project-team/project-team';
import { NewProjectComponent } from './pages/new-project/new-project';
import { ExistingProjectComponent } from './pages/existing-project/existing-project';
import { ViewRequestComponent } from './pages/view-request/view-request';

export const routes: Routes = [
  { path: '', component: MyCeRequests, title: 'My CE Requests' },
  { path: 'project-team', component: ProjectTeamComponent, title: 'Project Team' },
  { path: 'new-project', component: NewProjectComponent, title: 'New Project' },
  { path: 'existing-project', component: ExistingProjectComponent, title: 'Existing Project' },
  { path: 'view-request', component: ViewRequestComponent, title: 'View Request' },
  { path: '**', redirectTo: '' },
];
