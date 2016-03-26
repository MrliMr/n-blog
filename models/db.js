/**
 * 函数功能简述
 *
 * 具体描述一些细节
 *
 * @param    {string}  address     地址
 * @param    {array}   com         商品数组
 * @param    {string}  pay_status  支付方式
 * @returns  void
 *
 * @date     16/3/26
 * @author   Aaron
 */
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = requier('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});