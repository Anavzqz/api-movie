global.window = global;
global.assert = require("chai").assert //pide las aserciones de Chai
require("../src/js/data") //Que archivo vamos a testear
require("./data.spec.js") //que aserciones se van a utilizar y con que 