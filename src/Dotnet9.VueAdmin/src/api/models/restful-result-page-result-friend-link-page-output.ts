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
import { PageResultFriendLinkPageOutput } from './page-result-friend-link-page-output';
/**
 * 
 * @export
 * @interface RESTfulResultPageResultFriendLinkPageOutput
 */
export interface RESTfulResultPageResultFriendLinkPageOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {PageResultFriendLinkPageOutput}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    data?: PageResultFriendLinkPageOutput;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultPageResultFriendLinkPageOutput
     */
    timestamp?: number;
}