
var fnstr = require('./str.js');

require('../css/style.css');

document.write(fnstr('<div>天气非常晴!06</div>'));

var $=require('jquery');
$("div").html('这是一个jQuery语法改变内容01').css({"background-color":'blue'});
