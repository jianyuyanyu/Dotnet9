/* tslint:disable */
/* eslint-disable */
/**
 * 博客前端接口
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BlogOutput } from './blog-output';
/**
 * 
 * @export
 * @interface RESTfulResultBlogOutput
 */
export interface RESTfulResultBlogOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultBlogOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {BlogOutput}
     * @memberof RESTfulResultBlogOutput
     */
    data?: BlogOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultBlogOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultBlogOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultBlogOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultBlogOutput
     */
    timestamp?: number;
}