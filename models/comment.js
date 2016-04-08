/**
 * 函数功能简述
 *
 *
 *
 * @param    {string}
 * @param    {array}
 * @param    {string}
 * @returns  void
 *
 * @date     16/4/8
 * @author   Aaron
 */
var mongodb = require('./db');
function Comment(name, day, title, comment) {
    this.name = name;
    this.day = day;
    this.title = title;
    this.comment = comment;
}
module.exports = Comment;

Comment.prototype.save = function (callback) {
    var name = this.name, day = this.day, title = this.title, comment = this.comment;
    mongodb.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection('posts', function (err, collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.update({
                'name': name,
                'time.day': day,
                'title': title
            }, {
                $push: {'comments': comment}
            }, function (err) {
                if (err) {
                    return callback(err)
                }
                callback(null);
            })
        })
    })
}
