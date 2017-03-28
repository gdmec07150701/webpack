document.write("Webpack work.<br>")
var commonjs = require("./commonjs.js")
document.write(commonjs.fun())
import {es6fun} from './es6module.js'
document.write(es6fun())