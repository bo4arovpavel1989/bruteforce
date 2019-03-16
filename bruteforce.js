/**
 * Function that combinates all chars from list infinitelly
 * Stops when step function resolves true
 * Function can accept as charset both array of strings or numbers
 * but it always resolves string values
 * so you probably should use '==' in step function to check your value
 * or transform returned types directly in step function
 * @param {Object} params - options of function
 * @param {Function} step - takes next string to check as argument and returns Promise
 * @returns {String/Function} - recursive call or found string
 */

module.exports = async function bruteforce (params, step) {
  let { chars, variant } = params;

  if (!chars.pop || chars.length === 0) throw new TypeError('Charset must be not empty array!')

  variant = variant || '';

  if (variant === '') stringify(chars);

  const result = step(variant);

  if (await result) return variant;

  variant = addNextChar(variant, chars);

  return bruteforce({
    chars,
    variant
  }, step)
}

/**
 * Function adds next string in ascending order
 * @param {String} variant - previous checked string
 * @param {Array} chars - set of posssible chars
 * @returns {String/Function} - recursive call or next string
 */
function addNextChar (variant, chars) {
  const lastVarChar = variant.charAt(variant.length - 1);
  const lastPossibleChar = chars[chars.length - 1];

  if (lastVarChar === '') return chars[0];

  if (lastVarChar !== lastPossibleChar) {
    const charIndex = chars.indexOf(lastVarChar);

    return variant.slice(0, -1) + chars[charIndex + 1];
  }

  return addNextChar(variant.slice(0, -1), chars) + chars[0];
}

/**
 * Function transforms every arrai item to string
 * @param {Array} arr - char set to be combined
 * @returns {Array} transformed to array of strings
 */
function stringify (arr) {
  return arr.forEach((item, i) => {
    arr[i] = item.toString()
  })
}
