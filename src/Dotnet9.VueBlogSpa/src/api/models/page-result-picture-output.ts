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
import { PictureOutput } from './picture-output';
/**
 * 
 * @export
 * @interface PageResultPictureOutput
 */
export interface PageResultPictureOutput {
    /**
     * 当前页
     * @type {number}
     * @memberof PageResultPictureOutput
     */
    pageNo?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof PageResultPictureOutput
     */
    pageSize?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof PageResultPictureOutput
     */
    pages?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof PageResultPictureOutput
     */
    total?: number;
    /**
     * 数据
     * @type {Array<PictureOutput>}
     * @memberof PageResultPictureOutput
     */
    rows?: Array<PictureOutput> | null;
}