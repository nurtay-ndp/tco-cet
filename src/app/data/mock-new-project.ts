export const ESTIMATE_REQUEST_TYPES = [
  'Support concept selection process',
  'Engineering funds',
  'LLI procurement + Early Works funds',
  'Support Construction contract award',
  'Construction funds',
  'Scope of work (scope change)',
];

export const PROJECT_MANAGEMENT_TYPES = [
  'Evaluation: Pre-Scrum / Scrum',
  'Evaluation: Pre-FEED / Pre-Kanban',
  'Engineering: Kanban FEED',
  'Engineering: Kanban Detailed Engineering',
  'Pre-Construction / Construction',
];

export const CPDEP_PHASES = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5'];

export const DESIGN_PROGRESS_OPTIONS = [
  'Eng < 1%',
  'Eng 1 - 5%',
  'Eng 30 – 60%',
  'Eng 60-90%',
  'Eng 80-100%',
];

export const AREA_OPTIONS = [
  'Area 100 — Process',
  'Area 200 — Utilities',
  'Area 300 — Offsite',
];

export const UNIT_OPTIONS = [
  'Unit 12 — Crude',
  'Unit 22 — Vacuum',
  'Unit 32 — Reformer',
];

export const IBP_OPTIONS = ['IBP 2024', 'IBP 2025', 'IBP 2026'];

export const TA_YEAR_OPTIONS = ['TA 2025', 'TA 2026', 'TA 2027'];

export const MOCK_NEW_PROJECT_FORM = {
  projectTitle: 'Compressor Upgrade',
  estimateTitle: 'Compressor Upgrade',
  projectNumber: '16-0510',
  projectCode: 'ECD0011307',
  estimateRequestType: 'Engineering funds',
  projectManagementType: 'Engineering: Kanban FEED',
  cpdepPhase: 'Phase 2',
  anticipatedCompletionDate: '2026-06-18',
  preliminaryCostDeadline: '2026-06-25',
  area: 'Area 100 — Process',
  unit: 'Unit 12 — Crude',
  ibp: 'IBP 2025',
  taYear: 'TA 2026',
  designProgress: '>= 60%',
};
