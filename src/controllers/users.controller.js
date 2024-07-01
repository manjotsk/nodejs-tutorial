const { fetchUsers } = require("../services/users.service")

const listUsers = async (req,res,next) => {
    // service call
    const users = await fetchUsers()

    res.send({
        message: 'List of users fetched successfully',
        data: users
    })
}

module.exports = {
    listUsers
}