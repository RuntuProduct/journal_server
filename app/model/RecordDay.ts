import { Application } from 'egg';
import { DB } from '../../database/definition/recordDay';
import BaseModel from './model';

export default function RecordDayModel (app: Application) {
  return BaseModel(app, 'record_day', DB);
}
