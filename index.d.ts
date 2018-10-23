import { Model, SequelizeStatic, Sequelize } from 'sequelize';
import { DefaultConfig } from './config/config.default';
// Controller
import UserController from './app/controller/user';
import TaskController from './app/controller/task';
import SummaryController from './app/controller/summary';

// Model
import UserModel from './app/model/user';
import TaskModel from './app/model/task';
import BookMonthModel from './app/model/bookMonth';
import BookYearModel from './app/model/bookYear';

// Service
import UtilsService from './app/service/utils';
import TaskService from './app/service/task';
import SummaryService from './app/service/summary';
import BookMonthService from './app/service/bookMonth';
import BookYearService from './app/service/bookyear';

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & DefaultConfig;
    Sequelize: SequelizeStatic
    model: Sequelize
  }

  export interface IController {
    user: UserController;
    task: TaskController;
    summary: SummaryController;
  }

  export interface Context {
    model: {
      User: Model<UserModel, {}>;
      Task: Model<TaskModel, {}>;
      BookMonth: Model<BookMonthModel, {}>;
      BookYear: Model<BookYearModel, {}>;
    }
  }

  export interface IService {
    utils: UtilsService;
    task: TaskService;
    summary: SummaryService;
    bookMonth: BookMonthService;
    bookYear: BookYearService;
  }
}

// expand sequelize model Object
declare module 'sequelize' {
  interface Model<TInstance, TAttributes> {
    fillable(): string[];
    hidden(): string[];
    visible(): string[];
    getAttributes(): string[];
    findAttribute(attribute: string): object | undefined;
    /**
     * Get the value of the underlying data value
     */
    getDataValue(key: string): any;

    /**
     * Update the underlying data value
     */
    setDataValue(key: string, value: any): void;
  }
}
