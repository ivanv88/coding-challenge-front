import { JobAdStatus } from "./job-add.model";

export interface JobAdPagination {
  page?: number;
  limit?: number;
  filter?: {
    status?: JobAdStatus;
    title?: string;
  }
}