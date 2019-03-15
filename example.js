const bf = require('./bruteforce');
const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


bf({ chars }, stepFunction)

function stepFunction (variant) {
  console.log(variant)
  return new Promise((resolve, reject) => setTimeout(resolve, 100))
}
