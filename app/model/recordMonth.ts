import { Application } from 'egg';
import { DB } from '../../database/definition/recordMonth';
import BaseModel from './model';

export default function RecordMonthModel (app: Application) {
  return BaseModel(app, 'record_month', DB);
}
