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
import { SysUserInfoOutput } from './sys-user-info-output';
/**
 * 
 * @export
 * @interface RESTfulResultSysUserInfoOutput
 */
export interface RESTfulResultSysUserInfoOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {SysUserInfoOutput}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    data?: SysUserInfoOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultSysUserInfoOutput
     */
    timestamp?: number;
}
