# API-nodejs

## Installation
Change directory to your project folder and install with NPM.
```bash
cd API-nodejs/
npm install
```

# Start
Run project on localhost
```bash
npm run start
```
The API runs on port 2000 by default, and the root can be accessed by navigating to http://localhost:2000/auth to get an access token with Postman on post method, using the following user:
```json
email: "teste@gmail.com"
password: 123456
```

# Testing
To run tests, you need to generate and update the access token, on verifyToken.spec.js file.
```bash
npm run test
```

## Herokuapp
The project is deployed on [Herokuapp](https://tati-19mob.herokuapp.com/).
