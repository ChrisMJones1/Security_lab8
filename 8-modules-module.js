//LAB 8 - MODULES - MODULE FILE
//THIS FILE CONTAINS YOUR CUSTOM MODULE.

var myModNS = (function () {

    var devName = "Maggie Chen";
    var modName = "namePop";
    var namePop = function () {
        alert(devName + " created this " + modName + " module!");
        };

    var module = {
        showCredit : namePop
    };
    return module;

    })();