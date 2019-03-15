/**
 * Function that combinates all chars from list infinitelly
 * Stops when step function resolves true
 * @param {Object} params - options of function
 * @param {Function} step - takes next string to check as argument and returns Promise
 * @returns {String/Function} - recursive call or found string
 */

module.exports = async function bruteforce (params, step) {
  let { chars, variant } = params;

  variant = variant || '';

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
