'use strict';

var Rx = require('rxjs/Rx');

console.log('start');

var source = Rx.Observable.of(1,2,3);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

console.log('done');
