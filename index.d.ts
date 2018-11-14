import { Model, SequelizeStatic, Sequelize } from 'sequelize';
import { DefaultConfig } from './config/config.default';
// Controller
import UserController from './app/controller/user';
import TaskController from './app/controller/task';
import SummaryController from './app/controller/summary';
import BudgetController from './app/controller/budget';

// Model
import UserModel from './app/model/user';
import TaskModel from './app/model/task';
import RecordDayModel from './app/model/RecordDay';
import RecordWeekModel from './app/model/recordWeek';
import RecordMonthModel from './app/model/recordMonth';
import RecordYearModel from './app/model/recordYear';
import BudgetModel from './app/model/budget';
import BudgetTagModel from './app/model/budgetTag';

// Service
import UtilsService from './app/service/utils';
import TaskService from './app/service/task';
import SummaryService from './app/service/summary';
import RecordService from './app/service/record';
import RecordYearService from './app/service/recordYear';
import RecordMonthService from './app/service/recordMonth';
import RecordWeekService from './app/service/recordWeek';
import RecordDayService from './app/service/recordDay';
import BudgetService from './app/service/budget';

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
    budget: BudgetController;
  }

  export interface Context {
    model: {
      User: Model<UserModel, {}>;
      Task: Model<TaskModel, {}>;
      RecordDay: Model<RecordDayModel, {}>;
      RecordWeek: Model<RecordWeekModel, {}>;
      RecordMonth: Model<RecordMonthModel, {}>;
      RecordYear: Model<RecordYearModel, {}>;
      Budget: Model<BudgetModel, {}>;
      BudgetTag: Model<BudgetTagModel, {}>;
    }
  }

  export interface IService {
    utils: UtilsService;
    task: TaskService;
    summary: SummaryService;
    record: RecordService;
    recordYear: RecordYearService;
    recordMonth: RecordMonthService;
    recordWeek: RecordWeekService;
    recordDay: RecordDayService;
    budget: BudgetService;
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
