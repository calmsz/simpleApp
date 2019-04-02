import { Schedules } from './schedules';

export class Stores {
  id: number;
  name: string;
  description: string;
  tags: string[];
  schedule: Schedules[];
}
