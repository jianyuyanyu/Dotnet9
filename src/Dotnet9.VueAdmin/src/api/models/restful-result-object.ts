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
/**
 * 
 * @export
 * @interface RESTfulResultObject
 */
export interface RESTfulResultObject {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultObject
     */
    statusCode?: number | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultObject
     */
    data?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultObject
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultObject
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultObject
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultObject
     */
    timestamp?: number;
}