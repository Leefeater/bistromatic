const jwt = require('jsonwebtoken')

export default function validateUserData( req, res ) {

    console.log(jwt.verify(req.headers.token, "1e03660d-88f8-41f4-9d5a-627bee10f20d" ), 'exp:::::')

    res.end()

}