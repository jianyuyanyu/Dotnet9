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
import { FriendLinkOutput } from './friend-link-output';
/**
 * 
 * @export
 * @interface RESTfulResultListFriendLinkOutput
 */
export interface RESTfulResultListFriendLinkOutput {
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    statusCode?: number | null;
    /**
     * 
     * @type {Array<FriendLinkOutput>}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    data?: Array<FriendLinkOutput> | null;
    /**
     * 
     * @type {boolean}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    succeeded?: boolean;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    extras?: any | null;
    /**
     * 
     * @type {number}
     * @memberof RESTfulResultListFriendLinkOutput
     */
    timestamp?: number;
}