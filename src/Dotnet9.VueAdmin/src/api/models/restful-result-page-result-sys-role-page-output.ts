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
import { PageResultSysRolePageOutput } from './page-result-sys-role-page-output';
/**
 * 
 * @export
 * @interface RESTfulResultPageResultSysRolePageOutput
 */
export interface RESTfulResultPageResultSysRolePageOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {PageResultSysRolePageOutput}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    data?: PageResultSysRolePageOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultSysRolePageOutput
     */
    timestamp?: number;
}