/*

cube[0] => F
cube[1] => U
cube[2] => B
cube[3] => D
cube[4] => L
cube[5] => R

*/

var cubeIndexReference = ['F','U','B','D','L','R',];

var cube = [];
for (var i = 0; i < 6; i++) {
    var faceTemp = [];
    for (var l = 0; l < 3; l++) {
        var rowTemp = [];
        for (var z = 0; z < 3; z++) {
            rowTemp.push(i);
        }
        faceTemp.push(rowTemp);
    }
    cube.push(faceTemp);
    log(faceTemp.join('\n'));
    log('\n');
}


function surroundingEdgesOf(face) {
    var faceNum = typeof(face) == 'number'? face:cubeIndexReference.indexOf(face);
    var surroundingFaceNames;
    switch (faceNum) {
        case 0:
            surroundingFaceNames = 'URDL';
        break;
        case 1:
            surroundingFaceNames = 'BRFL';
        break;
        case 2:
            surroundingFaceNames = 'DRUL';
        break;
        case 3:
            surroundingFaceNames = 'FRBL';
        break;
        case 4:
            surroundingFaceNames = 'UFDB';
        break;
        case 5:
            surroundingFaceNames = 'UBDF';
        break;
    }
    if (surroundingFaceNames == undefined) {
        return(undefined);
    }
    else {
        var surroundingFaceNums = surroundingFaceNames.split('');
        for (var i = 0; i < surroundingFaceNums.length; i++) {
            surroundingFaceNums[i] = cubeIndexReference.indexOf(surroundingFaceNums[i]);
        }
        return(surroundingFaceNums);
    }
}

function log(str) {
    console.log(str);
    str = str.replace(/\n/g, '<br>')
    var br = document.getElementById('console').innerHTML == '' ? '' : '<br>'
    document.getElementById('console').innerHTML = document.getElementById('console').innerHTML + br + str;
}