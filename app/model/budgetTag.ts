import { Application } from 'egg';
import { DB } from '../../database/definition/budgetTag';
import BaseModel from './model';

export default function BudgetTagModel (app: Application) {
  return BaseModel(app, 'budget_tag', DB);
}
