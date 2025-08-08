'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const rules = sourceString.split(';');
  const result = {};

  for (const rule of rules) {
    const [key, value] = rule.split(':').map((item) => item.trim());

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
