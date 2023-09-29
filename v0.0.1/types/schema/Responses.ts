/**
 * @id #Responses
 * @description The ordered list of questions, answers, and their metadata for this application
 */
export type Responses = QuestionAndResponses[];

export interface QuestionMetaData {
  autoAnswered?: boolean;
  policyRefs?: Array<{
    url?: string;
    text?: string;
  }>;
  sectionName?: string;
}

export interface ResponseMetaData {
  flags?: Array<string>; // @todo connect to result/flags enum
}

export interface Response {
  value: string;
  metadata?: ResponseMetaData;
}

export interface QuestionAndResponses {
  question: string;
  responses: Array<Response> | string;
  metadata?: QuestionMetaData;
}
