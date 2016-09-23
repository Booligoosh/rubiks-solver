//algorithms
var fururf = [['F',true],['U',true],['R',true],['U',false],['R',false],['F',false]];
var cube = {F: [[0,0,0],[0,0,0],[0,0,0]], B: [[0,0,0],[0,0,0],[0,0,0]], L: [[0,0,0],[0,0,0],[0,0,0]], R: [[0,0,0],[0,0,0],[0,0,0]], U: [[0,0,0],[0,0,0],[0,0,0]], D: [[0,0,0],[0,0,0],[0,0,0]]};
function doAlg(arr) {
    for (var  i = 0; i < arr.length; i++) {
        var targ = arr[i][0];
        var dir = arr[i][1];
        if (targ === 'F') {
            console.log('front');
        }
        if (targ === 'B') {
            console.log('back');
        }
        if (targ === 'L') {
            console.log('left');
        }
        if (targ === 'R') {
            console.log('right');
        }
        if (targ === 'U') {
            console.log('upper');
        }
        if (targ === 'D') {
            console.log('down');
        }
    }
}
