(function () {
    'use strict';
    angular.module("webstorm")
    .filter("labelCase", labelCase);
    
    function labelCase() {
// worker function
        return function (value, reverse) {
            if (angular.isString(value)) {
                //    uppercase or lowercase base on reverse
                var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
                //    return something base on reverse
                return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return value;
            }
        }
        
    }
    
})();