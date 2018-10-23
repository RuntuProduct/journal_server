import { Application } from 'egg';
import { DB } from '../../database/definition/user';
import BaseModel from './model';

export default function UserModel (app: Application) {
  return BaseModel(app, 'user', DB);
}
