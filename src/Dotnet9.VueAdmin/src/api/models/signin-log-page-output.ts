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
 * @interface SigninLogPageOutput
 */
export interface SigninLogPageOutput {
    /**
     * 日志ID
     * @type {number}
     * @memberof SigninLogPageOutput
     */
    id?: number;
    /**
     * 消息
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    message?: string | null;
    /**
     * ip地址
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    remoteIp?: string | null;
    /**
     * 地理位置
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    location?: string | null;
    /**
     * 客户端系统信息
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    osDescription?: string | null;
    /**
     * 客户端浏览器信息
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    userAgent?: string | null;
    /**
     * 登录时间
     * @type {Date}
     * @memberof SigninLogPageOutput
     */
    createdTime?: Date;
    /**
     * 登录人账户名
     * @type {string}
     * @memberof SigninLogPageOutput
     */
    account?: string | null;
}
