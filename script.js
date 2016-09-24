//algorithms
var fururf = [['F',true],['U',true],['R',true],['U',false],['R',false],['F',false]];

var F = [[0,0,0],[0,0,0],[0,0,0]];
var B = [[0,0,0],[0,0,0],[0,0,0]];
var L = [[0,0,0],[0,0,0],[0,0,0]];
var R = [[0,0,0],[0,0,0],[0,0,0]];
var U = [[0,0,0],[0,0,0],[0,0,0]];
var D = [[0,0,0],[0,0,0],[0,0,0]];

function doAlg(arr) {
    for (var  i = 0; i < arr.length; i++) {
        var targ = arr[i][0];
        var dir = arr[i][1];
        if (targ === 'F') {
            console.log('front');
            var face = F;
            var temp = [[0,0,0],[0,0,0],[0,0,0]];
            if (dir) {
                for (var l = 0; l < face.length; l++) {
                    temp[l] = [face[2][l],face[1][l],face[0][l]];
                }
                F = temp;
                var x = L[2];
                L[2] = D[2];
                D[2] = R[2];
                R[2] = U[2];
                U[2] = x;
            }
            else {
                for (var l = 0; l < face.length; l++) {
                    temp[l] = [face[0][2 - l],face[1][2 - l],face[2][2 - l]];
                }
                F = temp;
                var x = R[2];
                R[2] = D[2];
                D[2] = L[2];
                L[2] = U[2];
                U[2] = x;
            }
        }
        if (targ === 'B') {
            console.log('back');
            var face = B;
            var temp = [[0,0,0],[0,0,0],[0,0,0]];
            if (!dir) {
                for (var l = 0; l < face.length; l++) {
                    temp[l] = [face[2][l],face[1][l],face[0][l]];
                }
                B = temp;
                var x = L[0];
                L[0] = D[0];
                D[0] = R[0];
                R[0] = U[0];
                U[0] = x;
            }
            else {
                for (var l = 0; l < face.length; l++) {
                    temp[l] = [face[0][2 - l],face[1][2 - l],face[2][2 - l]];
                }
                B = temp;
                var x = R[0];
                R[0] = D[0];
                D[0] = L[0];
                L[0] = U[0];
                U[0] = x;
            }
        }
        if (targ === 'L') {
            console.log('left');
        }
        if (targ === 'R') {
            console.log('right');
        }
        if (targ === 'U') {
            console.log('up');
        }
        if (targ === 'D') {
            console.log('down');
        }
        if (targ === 'M') {
            console.log('middle');
        }
        if (targ === 'E') {
            console.log('equator');
        }
        if (targ === 'S') {
            console.log('side');
        }
    }
}
