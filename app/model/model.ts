import { Application } from 'egg';
import { DefineAttributes } from 'sequelize';

export default function BaseModel (
  app: Application,
  table: string,
  attributes: DefineAttributes,
  options: object = {},
) {
  const modelSchema = app.model.define(
    table,
    {...attributes },
    { ...options },
  );

  /**
   * @returns {string[]} 获取定义的所有字段属性
   */
  modelSchema.getAttributes = (): string[] => {
    return Object.keys(attributes);
  };

  /**
   * @returns {string} 获取定义的指定字段属性的值
   */
  modelSchema.findAttribute = (attribute: string): object | undefined => {
    return (attributes as any)[attribute];
  };

  /**
   * @returns {array} 可批量赋值的数组,当为空时，会自动遍历 model 定义的字段属性来进行过滤
   */
  modelSchema.fillable = (): string[] => {
    return [];
  };

  /**
   * @returns {array} 输出数据时，隐藏字段数组 [ 黑名单 ]
   */
  modelSchema.hidden = (): string[] => {
    return [];
  };

  /**
   * @returns {array} 输出数据时显示的属性 [ 白名单 ]
   */
  modelSchema.visible = (): string[] => {
    return [];
  };

  return modelSchema;
}
