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
 * @interface RESTfulResultListInt64
 */
export interface RESTfulResultListInt64 {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListInt64
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RESTfulResultListInt64
     */
    data?: Array<number> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListInt64
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListInt64
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListInt64
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListInt64
     */
    timestamp?: number;
}