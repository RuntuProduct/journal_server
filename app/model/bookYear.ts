import { Application } from 'egg';
import { DB } from '../../database/definition/bookYear';
import BaseModel from './model';

export default function BookYearModel (app: Application) {
  return BaseModel(app, 'book_year', DB);
}
