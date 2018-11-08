import { Application } from 'egg';
import { DB } from '../../database/definition/recordWeek';
import BaseModel from './model';

export default function RecordWeekModel (app: Application) {
  return BaseModel(app, 'record_week', DB);
}
