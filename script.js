var t = 3;
//algorithms
var fururf = [[0,true],[4,true],[3,true],[4,false],[3,false],[0,false]];
//defs
var colors = ["white", "yellow", "green", "blue", "red", "orange"];
//pieces
var pieces = [];
for(var i = 0; i < (t*t*t) - (t - 2); i++) {
    pieces.push({x: 0, y: 0, z: 0, tiles: [2,3,6], type: 2});
}

function piece(n) {
    return(pieces[n]);
}

function pieceAt(x,y,z) {
    for (var i = 0; i < pieces.length; i++) {
        if (pieces[i].x === x && pieces[i].y === y && pieces[i].z === z) {
            return(pieces[i]);
        }
    }
}

function rotateCorner(index,dir) {
    if (dir === true) {
        piece(index).tiles.splice(0,0,piece(index).tiles[piece(index).tiles.length - 1]);
        piece(index).tiles.splice(piece(index).tiles.length - 1, 1);
    }
    if (dir === false) {
        piece(index).tiles.push(piece(index).tiles.shift(1));
    }
}

function doAlgorithm(array) {
    for (var i = 0; i < array.length; i++) {
        
    }
}
