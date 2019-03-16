const bf = require('./bruteforce');
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

bf({ chars }, stepFunction).then(console.log)

/**
 * Function calls to check every generated variant
 * @param {String} variant - value to be checked
 * @returns {Promise} representing whether generated variant is correct
 */
function stepFunction (variant) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve.bind(null, variant === 'ba'), 0)
  });
}
