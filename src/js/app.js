'use strict';

let val = [74989, 74990, 84990, 62000, 58480, 61800];
function bestScores() {
    let bs = Math.max.apply(null, val);
    return console.log(`Самый лучший балл - ${bs}.`);
    }
function midScores(arr) {
    arr.sort();
    let mid = (arr[3] + arr[4] + arr[5]) / 3;
    return console.log(`Средний балл топ-3 игроков = ${mid}`);
}

bestScores();
midScores(val);