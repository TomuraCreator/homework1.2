'use strict';

let val = [74989, 74990, 84990, 62000, 58480, 61800];
let i = -1;
function bestScores() {
    let bs = Math.max.apply(null, val);
    return console.log(`Самый лучший балл - ${bs}.`);
    }
function midScores(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    let mid = (arr[3] + arr[4] + arr[5]) / 3;
    return console.log(`Средний балл топ-3 игроков = ${mid}`);
}

bestScores();
midScores(val);