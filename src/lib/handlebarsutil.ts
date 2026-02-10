import * as Handlebars from 'handlebars';

import { firstInitial, formatDate } from './codeutil';

export function registerHandlebarsHelpers() {
  Handlebars.registerHelper('formatDate', formatDate);
  Handlebars.registerHelper('firstInitial', firstInitial);
  Handlebars.registerHelper('join', function (array, separator) {
    return Array.isArray(array) ? array.join(separator) : '';
  });
  Handlebars.registerHelper('isArray', function (value) {
    return Array.isArray(value);
  });
}
