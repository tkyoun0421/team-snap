import Handlebars from 'handlebars';

const template = `
  <div id="input-field-{{id}}">
    <label id="{{id}}" for="{{id}}">{{label}}</label>
    <input id="{{id}}" name="{{id}}" type="{{type}}"></input> 
  </div>  
`;

export default Handlebars.compile(template);
