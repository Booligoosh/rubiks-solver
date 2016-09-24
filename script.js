/*
COLORS:
0: white
1: yellow
2: green
3: blue
4: orange
5: red
*/
//algorithms
var fururf = [['F',true],['U',true],['R',true],['U',false],['R',false],['F',false]];
//faces
var U = [[0,0,0],[0,0,0],[0,0,0]];
var D = [[1,1,1],[1,1,1],[1,1,1]];
var F = [[2,2,2],[2,2,2],[2,2,2]];
var B = [[3,3,3],[3,3,3],[3,3,3]];
var L = [[4,4,4],[4,4,4],[4,4,4]];
var R = [[5,5,5],[5,5,5],[5,5,5]];

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
function getCube() {
        console.log('F');
        console.log(F.join('\n'));
        console.log('B');
        console.log(B.join('\n'));
        console.log('L');
        console.log(L.join('\n'));
        console.log('R');
        console.log(R.join('\n'));
        console.log('U');
        console.log(U.join('\n'));
        console.log('D');
        console.log(D.join('\n'));
}
