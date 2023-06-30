import { HttpParams } from "@angular/common/http";
import { JobAdPagination } from "../../model/job-add-filter.pagination";

export function buildParamOptions(pagination: JobAdPagination): HttpParams {
  const { page, limit, filter } = pagination;
  let params = new HttpParams();
  if (page && limit) {
    params = params.append('_start', (page - 1) * limit);
    params = params.append('_end', page * limit - 1);
  }
  if (filter?.status) {
    params = params.append('status', filter.status);
  }
  if (filter?.title) {
    params = params.append('title_like', filter.title);
  }
  return params;
}

export function buildTitleParamOptions(title: string): HttpParams {;
  let params = new HttpParams().append('title', title);
  return params;
}
