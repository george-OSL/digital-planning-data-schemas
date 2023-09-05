import {Schema} from '../types/Schema';
import {validAgent, validApplicant} from './data/Applicant';
import {validApplication} from './data/Application';
import {validProperty} from './data/Property';
import {validProposal} from './data/Proposal';

const validMetadata: Schema['metadata'] = {
  service: {
    publishedFlowId: 'b3320abe-f5bc-4185-b61f-40e9e65f07ad',
    name: 'Test',
    owner: 'Test',
    url: 'https://www.planx.uk/',
  },
  session: {
    source: 'PlanX',
    id: 'b3320abe-f5bc-4185-b61f-40e9e65f07ad',
    createdAt: '2018-11-13T20:20:39+00:00',
    submittedAt: '2018-11-13T20:20:39+00:00',
  },
};

const validFiles: Schema['files'] = [
  {
    name: 'https://api.editor.planx.uk/file/private/folderId/file1.pdf',
    type: [
      {
        value: 'proposal.drawing.roofPlan',
        description: 'Roof plan - proposed',
      },
      {
        value: 'property.drawing.roofPlan',
        description: 'Roof plan - existing',
      },
    ],
  },
  {
    name: 'https://api.editor.planx.uk/file/private/folderId/file2.pdf',
    description: 'Evidence of my project start date',
    type: [
      {
        value: 'proposal.document.construction.invoice',
        description: 'Construction invoice',
      },
    ],
  },
];

export const validExampleApplicant: Schema = {
  data: {
    user: {
      role: 'applicant',
    },
    applicant: validApplicant,
    application: validApplication,
    property: validProperty,
    proposal: validProposal,
  },
  result: {
    name: 'Test',
  },
  metadata: validMetadata,
  responses: {
    name: 'Test',
  },
  files: validFiles,
};

export const validExampleAgent: Schema = {
  data: {
    user: {
      role: 'agent',
    },
    applicant: validAgent,
    application: validApplication,
    property: validProperty,
    proposal: validProposal,
  },
  result: {
    name: 'Test',
  },
  metadata: validMetadata,
  responses: {
    name: 'Test',
  },
  files: validFiles,
};
