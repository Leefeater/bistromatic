const jwt = require('jsonwebtoken');
import uuid from 'uuid'

export default function getUserData(req, res) {

    res.statusCode = 200;

    const userDataToken = jwt.sign(
        {
            id: uuid(),
            displayName: uuid(),
        },
        "1e03660d-88f8-41f4-9d5a-627bee10f20d"
    );
    res.setHeader(
        'Content-Type', 'application/json',
    )
    //res.setHeader('userDataToken', userDataToken);
    console.log(userDataToken);

    res.end( JSON.stringify({userDataToken}) )

}

