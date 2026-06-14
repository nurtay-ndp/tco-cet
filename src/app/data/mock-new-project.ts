export const ESTIMATE_REQUEST_TYPES = [
  'AFE Forecast (EPC)',
  'AFE Forecast (EPCM)',
  'Budget Estimate',
  'Conceptual Estimate',
];

export const PROJECT_MANAGEMENT_TYPES = [
  'Pre-Engineering (Survey)',
  'Engineering',
  'Construction',
  'Commissioning',
];

export const CPDEP_PHASES = ['01', '02', '03', '04', '05'];

export const DESIGN_PROGRESS_OPTIONS = ['< 30%', '>= 30%', '>= 60%', '100%'];

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
  projectNumber: '',
  estimateRequestType: 'AFE Forecast (EPC)',
  projectManagementType: 'Pre-Engineering (Survey)',
  afeNumber: '5739821755',
  cpdepPhase: '02',
  projectTitle: '',
  projectNumberFree: '',
  projectCodeFree: '',
  designProgress: '>= 60%',
  anticipatedCompletionDate: '2026-06-18',
  area: 'Area 100 — Process',
  unit: 'Unit 12 — Crude',
  preliminaryCostDeadline: '2026-06-25',
  ibp: 'IBP 2025',
  taYear: 'TA 2026',
};
