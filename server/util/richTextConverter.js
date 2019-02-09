const dth= require('draftjs-to-html');
const htd = require('html-to-draftjs');
const convertToRaw = require('draft-js').convertToRaw;

export const htmlToDraft = (obj) => {
  console.log('html to draft')
};

export const draftToHtml = (obj) => {
  console.log('draft to html');
  console.log(dth(convertToRaw(obj.getCurrentContent())));
};