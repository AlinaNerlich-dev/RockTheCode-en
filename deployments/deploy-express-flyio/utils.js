const removeSpacesAndReplace = (text, replacer) => {
  return text.split(" ").join(replacer);
};

module.exports = { removeSpacesAndReplace };
