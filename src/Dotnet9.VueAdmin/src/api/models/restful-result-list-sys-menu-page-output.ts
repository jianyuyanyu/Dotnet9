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
import { SysMenuPageOutput } from './sys-menu-page-output';
/**
 * 
 * @export
 * @interface RESTfulResultListSysMenuPageOutput
 */
export interface RESTfulResultListSysMenuPageOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<SysMenuPageOutput>}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    data?: Array<SysMenuPageOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSysMenuPageOutput
     */
    timestamp?: number;
}
