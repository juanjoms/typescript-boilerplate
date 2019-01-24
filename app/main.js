var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, asd " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("from Typescript");
var jsFrameworks = [
    {
        name: 'Angular',
        description: 'Officia excepteur do dolor id ullamco magna qui ullamco.',
        url: 'https://angular.io'
    },
    {
        name: 'Vue.js',
        description: 'Ex do exercitation voluptate nisi Lorem non officia reprehenderit incididunt irure eiusmod.',
        url: 'angular.io'
    },
    {
        name: 'React',
        description: 'Nostrud Lorem excepteur tempor Lorem non ad occaecat commodo ut duis commodo consectetur proident.',
        url: 'angular.io'
    },
    {
        name: 'Ember',
        description: 'Cupidatat et id aliqua laboris esse irure eu incididunt veniam ea labore aute adipisicing.',
        url: 'angular.io'
    }
];
var agregar = function (framework) {
    var link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.href = 'javascript:void(0)';
    link.textContent = framework.name;
    link.onclick = function () {
        document.querySelector('.card-title').textContent = framework.name;
        document.querySelector('.card-text').textContent = framework.description;
        var frameworkSite = document.querySelector('.card .btn btn-primary'); //boton
        frameworkSite.target = '_blank';
        frameworkSite.href = framework.url;
        frameworkSite.textContent = "Go to " + framework.name + " site";
    };
    list.appendChild(link);
};
var list = document.getElementById('list-tab');
jsFrameworks.forEach(function (framework) {
    agregar(framework);
});
/* const Pdatos = (framework:Framework) => {

document.querySelector('formTecnologia').textContent = framework.name;
const frameworkSite: HTMLAnchorElement = document.querySelector('.formTecnologia.card .btn btn-agregar');

} */
var add = document.getElementById('btnAdd');
add.onclick = function () {
    var inputTecnologia = document.getElementById('inlineFormInputTecnologia');
    var inputDescripcion = document.getElementById('inlineFormInputDescripcion');
    //inputDescripcion.value;
    var inputUrl = document.getElementById('inlineFormInputurl');
    if (inputTecnologia.value.length > 0 && inputDescripcion.value.length > 0 && inputUrl.value.length > 0) {
        var send = {
            name: inputTecnologia.value,
            description: inputDescripcion.value,
            url: inputUrl.value
        };
        jsFrameworks.push(send);
        agregar(send);
        inputTecnologia.value = "";
        inputDescripcion.value = "";
        inputUrl.value = "";
    }
};
