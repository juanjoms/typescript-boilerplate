class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, asd" + this.greeting;
  }
}
let greeter = new Greeter("from Typescript");
type Framework = {
  name: string,
  description: string,
  url: string
}
let jsFrameworks: Framework[] = [
  {
    name: 'Angular',
    description: 'Officia excepteur do dolor id ullamco magna qui ullamco.',
    url: 'https://angular.io/'
  },
  {
    name: 'Vue.js',
    description: 'Ex do exercitation voluptate nisi Lorem non officia reprehenderit incididunt irure eiusmod.',
    url: 'https://vuejs.org/'
  },
  {
    name: 'React',
    description: 'Nostrud Lorem excepteur tempor Lorem non ad occaecat commodo ut duis commodo consectetur proident.',
    url: 'https://reactjs.org/'
  },
  {
    name: 'Ember',
    description: 'Cupidatat et id aliqua laboris esse irure eu incididunt veniam ea labore aute adipisicing.',
    url: 'https://www.emberjs.com/'
  }
];
const newName: HTMLInputElement = document.getElementById('new-name') as HTMLInputElement;
const newDescription: HTMLInputElement = document.getElementById('new-description') as HTMLInputElement;
const newUrl: HTMLInputElement = document.getElementById('new-url') as HTMLInputElement;
const button: HTMLInputElement = document.getElementById("button") as HTMLInputElement;

document.onkeypress = () => {
  if(newName.value == "" ||  newDescription.value == "" || newUrl.value == "") {
    button.disabled=true;
  } else {
    button.disabled = false;
  }
}
const save = () => {
  let newFramework: Framework = {
    name: newName.value, 
    description: newDescription.value, 
    url: newUrl.value
  };
  agregar(newFramework);
}
const list: HTMLElement = document.getElementById('list-tab');
jsFrameworks.forEach((framework) => {
  agregar(framework);
  button.disabled = true;
});
let agregar = (framework: { 
  name: string,
  description: string,
  url: string; 
}) => {
  const link: HTMLAnchorElement = document.createElement('a');
  link.className = 'list-group-item list-group-item-action';
  link.href = 'javascript:void(0)';
  link.textContent = framework.name;
  link.onclick = () => {
    document.querySelector('.card-title').textContent = framework.name;
    document.querySelector('.card-text').textContent = framework.description;
    const frameworkSite: HTMLAnchorElement = document.querySelector('.card .btn.btn-primary');
    frameworkSite.target = '_blank';
    frameworkSite.href = framework.url;
    frameworkSite.textContent = `Go to ${framework.name} site`;
  }
  list.appendChild(link);
  newName.value = '';
  newDescription.value = '';
  newUrl.value = '';
  button.disabled = false;
}