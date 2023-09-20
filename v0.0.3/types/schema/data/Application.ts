import {DateTime} from '../../utils';
import {ApplicationTypes} from '../../enums/ApplicationTypes';

/**
 * @id #Application
 * @description Information about this planning application
 */
export interface Application {
  type: ApplicationType;
  fee: ApplicationFee;
  declaration: {
    accurate: true;
    connection:
      | 'employee'
      | 'relation.employee'
      | 'electedMember'
      | 'relation.electedMember'
      | 'none';
    description?: string; // application.declaration.connection.description in content
  };
  preApp?: PreApplication;
}

/**
 * @id #ApplicationFee
 * @description The costs associated with this application
 */
export interface ApplicationFee {
  calculated: number;
  payable: number;
  exemption: {
    disability: boolean; // @todo add application.fee.exemption.disability.reason & applicant.disability.evidence (file)
    resubmission: boolean; // @todo add application.resubmission.original.applicationReference & application.resubmission.originalReference.appeal
  };
  reduction: {
    alternative: boolean;
    parishCouncil: boolean;
    sports: boolean;
  };
  reference?: {
    // @todo require when payable > 0
    govPay: string;
  };
}

/**
 * @id #PreApplication
 * @description Details of the pre-application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: DateTime;
  officer: string;
  summary: string;
}

type ApplicationTypeKeys = keyof typeof ApplicationTypes;

type GenericApplicationType<TKey extends ApplicationTypeKeys> = {
  value: TKey;
  description: (typeof ApplicationTypes)[TKey];
};

type ApplicationTypeMap = {
  [K in ApplicationTypeKeys]: GenericApplicationType<K>;
};

/**
 * @id #ApplicationType
 * @description Planning application types supported by this schema
 */
export type ApplicationType = ApplicationTypeMap[keyof ApplicationTypeMap];