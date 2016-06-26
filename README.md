#Angular_Filters


#### there is where i code custom filters places


*   filter__LabelCase

*   filter_skip


    
    //  src/app/index.filters.js
    
    (function () {
    'use strict';
    angular.module('webstorm')
    .filter('labelCase', labelCase)
    .filter('skip', skip);
    
    function skip() {
        return function (data, count) {
            if (angular.isArray(data) && angular.isNumber(count)) {
                return count > data.length || count < 1 ? data : data.slice(count);
            } else {
                return data;
            }
        }
    }
    
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
    
    // src/index.html
        ....
            <tr ng-repeat="p in main.data|limitTo:5|skip:2">
                <td>{{p.name|labelCase }}</td>
                <td>{{p.category|labelCase:true}}</td>
                <td>{{p.expiry}}</td>
                <td class="text-right">{{p.price | currency }}</td>
            </tr>
        .....
            `



