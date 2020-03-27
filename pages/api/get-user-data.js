const jwt = require('jsonwebtoken')

export function getUserData(req, res) {
    res.setHeader({
        userDataToken: jwt.sign(
            {
              id: 'your-internal-user-id-for-this-user',
              aCustomExampleField: 'you can put whatever in this object'
            },
            "1e03660d-88f8-41f4-9d5a-627bee10f20d"
          )
    })  
}