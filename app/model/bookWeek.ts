import { Application } from 'egg';
import { DB } from '../../database/definition/bookWeek';
import BaseModel from './model';

export default function BookWeekModel (app: Application) {
  return BaseModel(app, 'book_week', DB);
}
