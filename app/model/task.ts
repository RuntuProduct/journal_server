import { Application } from 'egg';
import { DB } from '../../database/definition/task';
import BaseModel from './model';

export default function TaskModel (app: Application) {
  return BaseModel(app, 'task', DB);
}
