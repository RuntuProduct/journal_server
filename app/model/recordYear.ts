import { Application } from 'egg';
import { DB } from '../../database/definition/recordYear';
import BaseModel from './model';

export default function RecordYearModel (app: Application) {
  return BaseModel(app, 'record_year', DB);
}
