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
var newFramework = { name: "", description: "", url: "" };
var criterio = document.querySelector('.searchbar');
//button.disabled=true;
texto.onkeyup = function () {
    texto.value === "" || texto2.value === "" || texto3.value === "" ? button.classList.add("disabled") : button.classList.remove("disabled");
};
texto2.onkeyup = function () {
    texto.value === "" || texto2.value === "" || texto3.value === "" ? button.classList.add("disabled") : button.classList.remove("disabled");
};
texto3.onkeyup = function () {
    texto.value === "" || texto2.value === "" || texto3.value === "" ? button.classList.add("disabled") : button.classList.remove("disabled");
};
searchbar.onblur = function () {
    console.log(elements);
    elements.forEach(function (element) {
        alert("we");
    });
};
var prueba = function () {
    button.disabled = true;
    newFramework.name = texto.value.toString();
    newFramework.description = texto2.value.toString();
    newFramework.url = texto3.value.toString();
    var link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action searche';
    link.href = 'javascript:void(0)';
    link.textContent = texto.value.toString();
    link.onclick = function () {
        document.querySelector('.card-title').textContent = newFramework.name;
        document.querySelector('.card-text').textContent = newFramework.description;
        var frameworkSite = document.querySelector('.card .btn.btn-primary');
        frameworkSite.target = '_blank';
        frameworkSite.href = newFramework.url;
        frameworkSite.textContent = "Go to " + newFramework.url + " site";
    };
    list.appendChild(link);
    texto.value = "";
    texto2.value = "";
    texto3.value = "";
};
jsFrameworks.forEach(function (framework) {
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
        frameworkSite.textContent = "Go to " + framework.name + " site";
    };
    list.appendChild(link);
});
