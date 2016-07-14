var pages = GLOBAL.bedrock.pages || {};

pages.keys = pages.keys || {};
pages.keys.keySelector = require('./key-selector');

module.exports = GLOBAL.bedrock.pages = pages;
