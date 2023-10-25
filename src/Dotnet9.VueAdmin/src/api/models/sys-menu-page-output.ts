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
import { MenuType } from './menu-type';
import { SysMenuPageOutput } from './sys-menu-page-output';
/**
 * 
 * @export
 * @interface SysMenuPageOutput
 */
export interface SysMenuPageOutput {
    /**
     * 菜单Id
     * @type {number}
     * @memberof SysMenuPageOutput
     */
    id?: number;
    /**
     * 菜单名称
     * @type {string}
     * @memberof SysMenuPageOutput
     */
    name?: string | null;
    /**
     * 权限标识
     * @type {string}
     * @memberof SysMenuPageOutput
     */
    code?: string | null;
    /**
     * 菜单图标
     * @type {string}
     * @memberof SysMenuPageOutput
     */
    icon?: string | null;
    /**
     * 
     * @type {MenuType}
     * @memberof SysMenuPageOutput
     */
    type?: MenuType;
    /**
     * 路由地址
     * @type {string}
     * @memberof SysMenuPageOutput
     */
    path?: string | null;
    /**
     * 组件路径
     * @type {string}
     * @memberof SysMenuPageOutput
     */
    component?: string | null;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof SysMenuPageOutput
     */
    status?: AvailabilityStatus;
    /**
     * 排序值（值越小越靠前）
     * @type {number}
     * @memberof SysMenuPageOutput
     */
    sort?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysMenuPageOutput
     */
    createdTime?: Date;
    /**
     * 子菜单
     * @type {Array<SysMenuPageOutput>}
     * @memberof SysMenuPageOutput
     */
    children?: Array<SysMenuPageOutput> | null;
}
