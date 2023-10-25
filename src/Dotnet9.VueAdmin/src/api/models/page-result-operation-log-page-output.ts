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
import { OperationLogPageOutput } from './operation-log-page-output';
/**
 * 
 * @export
 * @interface PageResultOperationLogPageOutput
 */
export interface PageResultOperationLogPageOutput {
    /**
     * 当前页
     * @type {number}
     * @memberof PageResultOperationLogPageOutput
     */
    pageNo?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof PageResultOperationLogPageOutput
     */
    pageSize?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof PageResultOperationLogPageOutput
     */
    pages?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof PageResultOperationLogPageOutput
     */
    total?: number;
    /**
     * 数据
     * @type {Array<OperationLogPageOutput>}
     * @memberof PageResultOperationLogPageOutput
     */
    rows?: Array<OperationLogPageOutput> | null;
}
