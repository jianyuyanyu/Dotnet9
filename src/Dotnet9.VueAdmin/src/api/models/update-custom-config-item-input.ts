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
import { AvailabilityStatus } from './availability-status';
/**
 * 
 * @export
 * @interface UpdateCustomConfigItemInput
 */
export interface UpdateCustomConfigItemInput {
    /**
     * 自定义配置Id
     * @type {number}
     * @memberof UpdateCustomConfigItemInput
     */
    configId: number;
    /**
     * 配置
     * @type {string}
     * @memberof UpdateCustomConfigItemInput
     */
    json: string;
    /**
     * 
     * @type {AvailabilityStatus}
     * @memberof UpdateCustomConfigItemInput
     */
    status?: AvailabilityStatus;
    /**
     * 
     * @type {number}
     * @memberof UpdateCustomConfigItemInput
     */
    id: number;
}
