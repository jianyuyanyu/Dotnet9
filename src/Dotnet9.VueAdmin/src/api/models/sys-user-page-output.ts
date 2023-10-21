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
import { Gender } from './gender';
/**
 * 
 * @export
 * @interface SysUserPageOutput
 */
export interface SysUserPageOutput {
    /**
     * 主键
     * @type {number}
     * @memberof SysUserPageOutput
     */
    id?: number;
    /**
     * 姓名
     * @type {string}
     * @memberof SysUserPageOutput
     */
    name?: string | null;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof SysUserPageOutput
     */
    status?: AvailabilityStatus;
    /**
     * 账户名
     * @type {string}
     * @memberof SysUserPageOutput
     */
    account?: string | null;
    /**
     * 生日
     * @type {string}
     * @memberof SysUserPageOutput
     */
    birthday?: string | null;
    /**
     * 手机号码
     * @type {string}
     * @memberof SysUserPageOutput
     */
    mobile?: string | null;
    /**
     * 
     * @type {Gender}
     * @memberof SysUserPageOutput
     */
    gender?: Gender;
    /**
     * 昵称
     * @type {string}
     * @memberof SysUserPageOutput
     */
    nickName?: string | null;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysUserPageOutput
     */
    createdTime?: Date;
    /**
     * 邮箱
     * @type {string}
     * @memberof SysUserPageOutput
     */
    email?: string | null;
}
