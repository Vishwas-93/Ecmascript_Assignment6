import $ from 'jquery';

class Formhandler{

  constructor(selector){
    if(!selector){
      throw new Error('No Selector Provided');
    }

    this.$formElement = $(selector);
    this.state = this.$formElement;
    console.log(this.$formElement);
    if(this.$formElement.length===0){
      throw new Error('Could not find element with selector' + selector);
    }
    console.log('Constructor created');
  }

  addSubmitHandler(fn){
    console.log(this.$formElement);
    // console.log(this.$formElement.length);
    console.log('Setting Submit Handler');
    this.$formElement.on('submit', (event) => {
      event.preventDefault();
      let data = {};
      // let coll=(this.$formElement).serializeArray();
      (this.$formElement).serializeArray().forEach((item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      // $.each( coll, function( item ) {
      //     data[item.name] = item.value;
      //     });
      console.log(data);
      fn(data);
      // this.reset();
      // this.elements[0].focus();
    });
  }
}
// new Formhandler();
export default Formhandler;
