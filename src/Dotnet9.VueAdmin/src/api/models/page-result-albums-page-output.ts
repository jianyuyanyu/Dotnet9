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
import { AlbumsPageOutput } from './albums-page-output';
/**
 * 
 * @export
 * @interface PageResultAlbumsPageOutput
 */
export interface PageResultAlbumsPageOutput {
    /**
     * 当前页
     * @type {number}
     * @memberof PageResultAlbumsPageOutput
     */
    pageNo?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof PageResultAlbumsPageOutput
     */
    pageSize?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof PageResultAlbumsPageOutput
     */
    pages?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof PageResultAlbumsPageOutput
     */
    total?: number;
    /**
     * 数据
     * @type {Array<AlbumsPageOutput>}
     * @memberof PageResultAlbumsPageOutput
     */
    rows?: Array<AlbumsPageOutput> | null;
}