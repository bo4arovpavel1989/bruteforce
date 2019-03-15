const bf = require('./bruteforce');
const connect = require('./fireconnect')

bf({
  chars:[' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  step: function (login) {
    console.log(login);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(false), 100)
    })
    
  }
})