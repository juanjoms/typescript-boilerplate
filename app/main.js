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
var list = document.getElementById('list-tab');
var elements = Array.from(document.querySelectorAll('.searche'));
var texto = document.querySelector('.prueba');
var texto2 = document.querySelector('.prueba2');
var texto3 = document.querySelector('.prueba3');
var button = document.querySelector(".btnadd");
var searchbar = document.querySelector(".searchbar");
var criterio = document.querySelector('.searchbar');
//button.disabled=true;
document.onkeypress = function () {
    texto.value === "" || texto2.value === "" || texto3.value === "" ? button.disabled = true : button.disabled = false;
};
/* texto2.onkeyup = () => {
  texto.value ==="" || texto2.value === "" || texto3.value ==="" ? button.classList.add("disabled"): button.classList.remove("disabled");
}

texto3.onkeyup = () => {
  texto.value ==="" || texto2.value === "" || texto3.value ==="" ? button.classList.add("disabled"): button.classList.remove("disabled");
} */
searchbar.onblur = function () {
    console.log(elements);
    elements.forEach(function (element) {
        element.text;
    });
};
var prueba = function () {
    var x = 2;
    var newFramework = { name: texto.value, description: texto2.value, url: texto3.value };
    agregar(newFramework);
    x === 2 ? true : false;
    console.log(x);
};
var agregar = function (framework) {
    var link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action searche';
    link.href = 'javascript:void(0)';
    link.textContent = framework.name;
    link.onclick = function () {
        document.querySelector('.card-title').textContent = framework.name;
        document.querySelector('.card-text').textContent = framework.description;
        var frameworkSite = document.querySelector('.card .btn.btn-primary');
        frameworkSite.target = '_blank';
        frameworkSite.href = framework.url;
        frameworkSite.textContent = "Go to " + framework.url + " site";
    };
    list.appendChild(link);
    button.classList.add("disabled");
    texto.value = "";
    texto2.value = "";
    texto3.value = "";
    button.disabled = true;
};
jsFrameworks.forEach(function (framework) {
    agregar(framework);
    //elements.push(link);
});
