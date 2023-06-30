export const validationErrors = new Map<string, {[key: string]: string}>([
  ['description', {required: 'Job Description is Required', minlength: 'Minimum of 10 Characters is Required'}],
  ['title', {required: 'Job Title is Required', unique: 'Job with this Title already exists'}],
  ['skills', {required: 'Minimum One Skill is Required', uniqueArrayValues: 'Duplicate Skill Entered'}],
]);