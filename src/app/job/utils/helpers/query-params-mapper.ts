import { JobAdPagination } from "../../model/job-add-filter.pagination";
import { JobAdStatus, jobAddStatuses } from "../../model/job-add.model";

export interface JobAdQueryParams {
  page?: number;
  limit?: number;
  status?: string;
  title?: string;
}

export function mapPaginationToQueryParams(pagination: JobAdPagination): JobAdQueryParams {
  const paramsObj = {} as JobAdQueryParams;
  if (pagination.page) {
    paramsObj.page = pagination.page;
  }
  if (pagination.limit) {
    paramsObj.limit = pagination.limit;
  }
  if (pagination.filter?.status) {
      paramsObj.status = pagination.filter.status;
  }
  if (pagination.filter?.title) {
    paramsObj.title = pagination.filter.title;
  }
  return paramsObj;
}

export function mapQueryParamsToPagination(params: JobAdQueryParams): JobAdPagination {
  const paginationObj = {} as JobAdPagination;
  if (params.limit && Number.isInteger(+params.limit)) {
    paginationObj.limit = +params.limit;
  }
  if (params.page && Number.isInteger(+params.page)) {
    paginationObj.page = +params.page;
  }
  if (params.title || params.status) {
    paginationObj.filter = {};
    if (params.title && typeof params.title === 'string') {
      paginationObj.filter.title = params.title;
    }
    if (params.status && jobAddStatuses.includes(params.status)) {
      paginationObj.filter.status = params.status as JobAdStatus;
    }
  }
  return paginationObj;
}