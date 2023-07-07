const { expressjwt } = require('express-jwt');

function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;
  return expressjwt({
    secret: secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked // آیا یک توکن JWT مورد اعتماد است یا خیر.
  }).unless({
    path: [
      {url: /\/api\/v1\/products(.*)/ , methods: ['GET','PUT','POST','DELETE', 'OPTIONS'] },
      {url: /\/api\/v1\/categories(.*)/ , methods: ['GET','PUT','POST','DELETE', 'OPTIONS'] },
      {url: /\/api\/v1\/api#(.*)/ , methods: ['GET', 'OPTIONS', 'POST'] },
      {url: /\/api\/v1\/users\/login/ , methods: ['POST'] },
      {url: /\/api\/v1\/users\/register/ , methods: ['POST']}
    ]
  })
}

// more about this:
// https://chat.openai.com/share/7a6a0b57-add1-45fc-9051-62edfa5b5fbd
function isRevoked(req, payload, done) {
  console.log('JWT Check IT');
  if(!payload.payload.isAdmin) {
     // done(null, true) // Reject the token
    return true;
  }
   return false; // Done!
}



module.exports = authJwt