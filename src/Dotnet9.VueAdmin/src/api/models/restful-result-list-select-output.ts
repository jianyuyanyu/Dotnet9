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
import { SelectOutput } from './select-output';
/**
 * 
 * @export
 * @interface RESTfulResultListSelectOutput
 */
export interface RESTfulResultListSelectOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSelectOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<SelectOutput>}
     * @memberof RESTfulResultListSelectOutput
     */
    data?: Array<SelectOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListSelectOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSelectOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListSelectOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListSelectOutput
     */
    timestamp?: number;
}
