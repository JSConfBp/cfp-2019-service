const store = require('../../store')
const USERS = JSON.parse(process.env.CFP_VOTE_USERS || "[]")


module.exports = async function ({ payload }) {
	console.log('REMOVE CFPS');

	//const year = await store.del('year')
	//talkIds =  await store.llen('talks')
	// del ...talkids

	//const key = `votes-${login}`
	//await store.rpush(key, JSON.stringify(vote))

	return { success: false }
}