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
import { CustomConfigDetailOutput } from './custom-config-detail-output';
/**
 * 
 * @export
 * @interface RESTfulResultCustomConfigDetailOutput
 */
export interface RESTfulResultCustomConfigDetailOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {CustomConfigDetailOutput}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    data?: CustomConfigDetailOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultCustomConfigDetailOutput
     */
    timestamp?: number;
}
