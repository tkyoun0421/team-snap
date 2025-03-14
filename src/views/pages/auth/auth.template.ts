import Handlebars from 'handlebars';

const template = /* html */ `
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">

    <div class="leading-loose">
      <form id="auth-form" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium mb-5 text-center">{{title}}</p>
        <div id="required-fields">
        </div>
        
        <!-- <p class="mt-8 text-gray-300 text-sm">회원가입</p></p> -->

        {{#if 'signup'}}
        <div id="optional-fields">
        </div>
        {{/if}}

        <div class="mt-4 flex justify-around gap-5">
          <button id="btn-join" class="px-4 py-1 text-white font-light tracking-wider bg-gray-300 rounded flex-1 cursor-pointer" type="submit">회원 가입</button>
          <button id="btn-cancel" class="px-4 py-1 text-white font-light tracking-wider bg-gray-300 rounded flex-1 cursor-pointer" type="submit">취소</button>
        </div>    
      </form>
    </div>

  </div>
</div>
`;

export default Handlebars.compile(template);
