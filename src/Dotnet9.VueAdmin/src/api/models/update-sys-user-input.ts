/* tslint:disable */
/* eslint-disable */
/**
 * 博客后端接口
 * Dotnet9后端
 *
 * OpenAPI spec version: 0.0.1
 * Contact: 632871194@qq.com
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
 * @interface UpdateSysUserInput
 */
export interface UpdateSysUserInput {
    /**
     * 用户名
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    account: string;
    /**
     * 姓名
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    name: string;
    /**
     * 
     * @type {Gender}
     * @memberof UpdateSysUserInput
     */
    gender?: Gender;
    /**
     * 组织机构id
     * @type {number}
     * @memberof UpdateSysUserInput
     */
    orgId?: number;
    /**
     * 昵称
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    nickName?: string | null;
    /**
     * 生日
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    birthday?: string | null;
    /**
     * 手机号码
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    mobile?: string | null;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof UpdateSysUserInput
     */
    status?: AvailabilityStatus;
    /**
     * 邮箱
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    email?: string | null;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateSysUserInput
     */
    remark?: string | null;
    /**
     * 角色
     * @type {Array<number>}
     * @memberof UpdateSysUserInput
     */
    roles?: Array<number> | null;
    /**
     * 用户Id
     * @type {number}
     * @memberof UpdateSysUserInput
     */
    id?: number;
}