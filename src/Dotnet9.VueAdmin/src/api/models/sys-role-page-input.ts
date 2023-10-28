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
 * @interface SysRolePageInput
 */
export interface SysRolePageInput {
    /**
     * 主键
     * @type {number}
     * @memberof SysRolePageInput
     */
    id?: number;
    /**
     * 角色名称
     * @type {string}
     * @memberof SysRolePageInput
     */
    name?: string | null;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysRolePageInput
     */
    createdTime?: Date;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof SysRolePageInput
     */
    status?: AvailabilityStatus;
    /**
     * 角色编码
     * @type {string}
     * @memberof SysRolePageInput
     */
    code?: string | null;
    /**
     * 排序值
     * @type {number}
     * @memberof SysRolePageInput
     */
    sort?: number;
    /**
     * 备注
     * @type {string}
     * @memberof SysRolePageInput
     */
    remark?: string | null;
}