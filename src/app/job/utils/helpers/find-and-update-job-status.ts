import { JobAd, JobAdStatus } from "../../model/job-add.model";

export function findAndUpdateJobStatus(status: JobAdStatus, jobId: number, jobs: JobAd[]): JobAd | undefined {
  const job = jobs.find(j => j.id === jobId);
  if (!job) {
    return undefined;
  }
  return {
    ...job,
    status
  };
}