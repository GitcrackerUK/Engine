import removeQuotation from 'https://gist.githubusercontent.com/GitcrackerUK/5809f9dc4e4df29cadae5d8c4cf7d9e2/raw/2a3ebe7f87edf2f42c43295c01f15c124d7363a4/utils.js'

import {
   convertToHTML
} from 'draft-convert'

let contentState = ''

const html = convertToHTML({
    blockToHTML: block => {
      if(block.type === 'unstyled') {
        if (block.text === ' ' || block.text === '') {
          return <br/>;
        }
        return <p/>;
      }
    },
    entityToHTML: (entity, originalText) => {
      if (entity.type === 'LINK') {
        return <a href={entity.data.url}>{this.replaceQuotationMarks(originalText)}</a>;
      }
      return originalText;
    }
  })(contentState);

function check(content) {
    const obj2 = {
        first: '1',
        second: '2',
        third: '3',
        fourth: '4',
    };

    let ret = null;

    if (obj2[content]) {
        ret =  true;
    } else {
        ret =  false;
    }
    return ret;
}
console.log(check('second'))


removeQuotation('dddsfsdfdsf')