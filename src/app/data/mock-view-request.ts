import { CeRequestStatus } from '../models/ce-request.model';

export interface ViewRequestData {
  estimateNumber: string;
  projectName: string;
  requestDate: string;
  projectTeam: string;
  afeNumber: string;
  designProgress: string;
  preliminaryCostDeadline: string;
  ibpTurnaroundYear: string;
  status: CeRequestStatus;
}

export const MOCK_VIEW_REQUEST: ViewRequestData = {
  estimateNumber: '17-022-02-00-A-Y',
  projectName: 'Compressor Upgrade',
  requestDate: '08-Jun-2026',
  projectTeam: 'Project Engineering',
  afeNumber: '5739821755',
  designProgress: '>= 60%',
  preliminaryCostDeadline: '25-06-2026',
  ibpTurnaroundYear: 'IBP 2025',
  status: 'In Review',
};
