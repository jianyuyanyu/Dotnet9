/* tslint:disable */
/* eslint-disable */
/**
 * 规范化接口演示
 * 让 .NET 开发更简单，更通用，更流行。
 *
 * OpenAPI spec version: 1.0.0
 * Contact: monksoul@outlook.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AvailabilityStatus } from './availability-status';
/**
 * 
 * @export
 * @interface AddCustomConfigInput
 */
export interface AddCustomConfigInput {
    /**
     * 配置名称
     * @type {string}
     * @memberof AddCustomConfigInput
     */
    name: string;
    /**
     * 配置唯一编码（类名）
     * @type {string}
     * @memberof AddCustomConfigInput
     */
    code: string;
    /**
     * 是否是多项（集合）
     * @type {boolean}
     * @memberof AddCustomConfigInput
     */
    isMultiple?: boolean;
     /**
     * 是否允许创建实体
     * @type {boolean}
     * @memberof AddCustomConfigInput
     */
     allowCreationEntity?: boolean;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof AddCustomConfigInput
     */
    status?: AvailabilityStatus;
    /**
     * 备注
     * @type {string}
     * @memberof AddCustomConfigInput
     */
    remark?: string | null;
}
