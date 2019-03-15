module.exports = async function bruteforce (params) {
  let { chars, step, variant } = params;
  
  variant = variant || chars[0];
 
  const result = step(variant);
  
  if (await result) return variant;
  
  variant = addNextChar(variant, chars);
  
  return bruteforce({
    chars,
    step, 
    variant
  })
}

function addNextChar (variant, chars) {
  let numbered = toNumbered(variant, chars);

  numbered = numbered + 1;
  
  return toStringFromNumbered(numbered, chars);
}

function toNumbered (variant, chars) {
  const base = chars.length;
  let reverseVariant = variant.split('').reverse();
  let result = 0;

  reverseVariant.forEach((val, index) => {
    result += chars.indexOf(val) * (base ** index)
  })
 
  return result;
}

function toStringFromNumbered (numbered, chars) {
  let result = '';
  const base = chars.length;
  let left = numbered;

  while (left > 0) {
    const index = left % base;
    result = chars[index] + result;

    left = Math.floor(left / base)
  }

  return result;
}
