import { CeRequest } from '../models/ce-request.model';

export const MOCK_CE_REQUESTS: CeRequest[] = [
  {
    estimateNumber: '17-022-02-00-A-A',
    projectTitle: 'Compressor Upgrade',
    requestDate: '2026-06-08',
    status: 'In Review',
  },
  {
    estimateNumber: '17-022-02-00-A-B',
    projectTitle: 'Cooling Water',
    requestDate: '2026-06-02',
    status: 'Submitted',
  },
  {
    estimateNumber: '17-022-02-00-A-C',
    projectTitle: 'Flare KO Drum Replacement',
    requestDate: '2026-05-21',
    status: 'Approved',
  },
  {
    estimateNumber: '17-022-02-00-A-D',
    projectTitle: 'Tank 13 Roof Seal',
    requestDate: '2026-05-15',
    status: 'Draft',
  },
  {
    estimateNumber: '17-022-02-00-A-E',
    projectTitle: 'Substation B - Replace Pump',
    requestDate: '2026-05-09',
    status: 'Rejected',
  },
  {
    estimateNumber: '17-022-02-00-A-F',
    projectTitle: 'Crude Unit Heat Exchanger Retube',
    requestDate: '2026-04-28',
    status: 'Completed',
  },
  {
    estimateNumber: '17-022-02-00-A-G',
    projectTitle: 'Pipe Repair',
    requestDate: '2026-04-19',
    status: 'Submitted',
  },
];
