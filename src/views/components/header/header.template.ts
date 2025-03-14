import Handlebars from 'handlebars';

const template = /*html*/ `
  <header class="flex items-center gap-5">
    <h1 class="text-xl font-bold">TeamSnap</h1>
    <div class="w-96">
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-gray-500">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input type="text" placeholder="Search files...." class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9" />
      </div>
    </div>
  </header>
`;

export default Handlebars.compile(template);
