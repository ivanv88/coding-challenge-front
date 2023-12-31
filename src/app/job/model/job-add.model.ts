export interface JobAd {
  id: number;
  /**
   * Title of a job ad. Required property.
   * It's not allowed to have two job ads with the same title.
   */
  title: string;
  /**
   * Description of a job ad. Required property.
   * Its length should not be less than 10 characters.
   */
  description: string;
  /**
   * List of skills required for a job ad.
   */
  skills: string[];
  /**
   * When a job ad has a "draft" status, it can be switched to "published" or "archived".
   * When a job ad has a "published" status, it can be only switched to "archived".
   * When a job ad has an "archived" status, it cannot be updated.
   */
  status: JobAdStatus;
}

const AllJobAddStatuses = {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
} as const;

export type JobAdStatus = keyof typeof AllJobAddStatuses;
export const jobAddStatuses: string[] = Object.values(AllJobAddStatuses) as string[];
