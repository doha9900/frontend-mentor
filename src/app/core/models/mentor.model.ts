import { Hv } from './hv.models';

export interface Mentor {
  _id?: string;
  name?: string;
  last_name?: string;
  dni?: Number;
  email?: string;
  tier?: Number;
  mentorized?:string[];
}
