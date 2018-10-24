import { Application } from 'egg';
import { DB } from '../../database/definition/bookDay';
import BaseModel from './model';

export default function BookDayModel (app: Application) {
  return BaseModel(app, 'book_day', DB);
}
