import { Application } from 'egg';
import { DB } from '../../database/definition/budget';
import BaseModel from './model';

export default function BudgetModel (app: Application) {
  return BaseModel(app, 'budget', DB);
}
