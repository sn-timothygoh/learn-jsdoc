/**
 * Feed routes
 * @module Feed
 */

const router = require('express').Router()
const Feed = require('../model/feed.model')
const verify = require('./verifyToken')

/**
 *@function getFeedList
 *@return {Object.Array<Object>}
 *Success
 *```json
 * status: 200,
 * data: [
 * {
 *      "_id":{"$oid":"5e6b40c984ee6f5f87b42a04"},
 *      "user":[{"$oid":"5e69ddb836ddf517d8f1e120"}],
 *      "upvote":{"$numberInt":"0"},
 *      "downvote":{"$numberInt":"0"},
 *      "content":"testing the latest release",
 *      "createdAt":{"$date":{"$numberLong":"1584087241899"}},
 *      "updatedAt":{"$date":{"$numberLong":"1584087301497"}}
 *    
 * },
 * {
 *      "_id":{"$oid":"5e8c2d690630f203e8dd47b4"},
 *      "upvote":{"$numberInt":"0"},
 *      "downvote":{"$numberInt":"0"},
 *      "user":{"$oid":"5e68e6404f907236b0cfdc1f"},
 *      "content":"adfadfadfasf",
 *      "createdAt":{"$date":{"$numberLong":"1586244969523"}},
 *      "updatedAt":{"$date":{"$numberLong":"1586244969523"}}
 * }]
 * 
 * ```
 * 
 * @return {Object}
 * Fail
 * ```json
 * status: 400,
 * data: 'Fail to fetch feed data'
 * ```

 */
router.route('/').get((req, res) => {
  Feed.find()
    .populate('user')
    .sort({ createdAt: -1 })
    .then(feeds => res.json(feeds))
    .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * @function createFeed
 * @param {string} user Object ID of user who created the feed
 * @param {string} content Content of the feed
 * @return {Object} Success
 * ```json
 * status: 200,
 * data: [
 * {
 *      "_id":{"$oid":"5e8c2d690630f203e8dd47b4"},
 *      "upvote":{"$numberInt":"0"},
 *      "downvote":{"$numberInt":"0"},
 *      "user":{"$oid":"5e68e6404f907236b0cfdc1f"},
 *      "content":"Stay 127.0.0.1, don't go 255.255.255.255",
 *      "createdAt":{"$date":{"$numberLong":"1586244969523"}},
 *      "updatedAt":{"$date":{"$numberLong":"1586244969523"}}
 * }]
 * ```
 * @return {Object} Fail
 * ```json
 * status: 400,
 * data: 'Please login to create post'
 * ```
 */
router.post('/add', verify, async (req, res) => {
  console.log(req.user)
  const feed = new Feed({
    user: req.user._id,
    content: req.body.content,
  })

  try {
    const savedFeed = await feed.save()
    const savedFeedWithUserData = await Feed.findById(savedFeed._id).populate(
      'user',
    )
    res.send(savedFeedWithUserData)
  } catch (err) {
    res.sendStatus(400)
  }
})

/**
 * @function updateFeed
 * @param {Boolean} upvote User like the feed post
 * @param {Boolean} downvote User dislike the feed post
 * @return {Object} Success
 * ```json
 * status: 200,
 * data: [
 * {
 *      "_id":{"$oid":"5e6b40c984ee6f5f87b42a04"},
 *      "user":[{"$oid":"5e69ddb836ddf517d8f1e120"}],
 *      "upvote":{"$numberInt":"0"},
 *      "downvote":{"$numberInt":"0"},
 *      "content":"testing the latest release",
 *      "createdAt":{"$date":{"$numberLong":"1584087241899"}},
 *      "updatedAt":{"$date":{"$numberLong":"1584087301497"}}
 *

 * }]
 * ```
 * @return {Object} Fail
 * ```json
 * status: 400,
 * data: 'Please login to upvote/downvote post'
 * ```
 */
router.put('/update', verify, async (req, res) => {
  console.log(req.user)
  try {
    await Feed.findByIdAndUpdate(req.body._id, {
      upvote: req.body.upvote,
      downvote: req.body.downvote,
    })
    res.send({ success: true })
  } catch {
    req.sendStatus(400)
  }
})

module.exports = router
