export type CeRequestStatus =
  | 'In Review'
  | 'Submitted'
  | 'Approved'
  | 'Draft'
  | 'Rejected'
  | 'Completed';

export interface CeRequest {
  estimateNumber: string;
  projectTitle: string;
  /** ISO date string, e.g. '2026-06-08' */
  requestDate: string;
  status: CeRequestStatus;
}
