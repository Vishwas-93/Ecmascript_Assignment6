import Formhandler from './formhandler.js';
// import $ from 'jquery';
const FORM_SELECTOR = '[data-coffee-order="form"]';
var formhandler = new Formhandler(FORM_SELECTOR);
// formhandler.addSubmitHandler((cb)=>{
//   console.log(formhandler);
// });
// console.log(data);
// });


// console.log($(formhandler).serialize());
formhandler.addSubmitHandler((cb) =>{
  console.log(cb);
});
