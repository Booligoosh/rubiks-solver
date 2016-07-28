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
    var algorithmLoop = 0;
    while (algorithmLoop <  array.length) {
      //clockwise
      if (array[algorithmLoop][1] === true) {
        //front/back faces
        if (array[algorithmLoop][0] < 2) {
            if (array[algorithmLoop][0] === 0) {
                var newftl = corner_fbl;
                corner_fbl = corner_fbr
                corner_fbr = corner_ftr;
                corner_ftr = corner_ftl;
                corner_ftl = newftl;
                assignObjects();
            }
            else {
                var newbtl = corner_bbl;
                corner_bbl = corner_bbr
                corner_bbr = corner_btr;
                corner_btr = corner_btl;
                corner_btl = newbtl;
                assignObjects();
            }
        }
        //left/right faces
        else if (array[algorithmLoop][0] < 4) {
            if (array[algorithmLoop][0] === 2) {
                var newbtl = corner_bbl;
                corner_bbl = corner_fbl;
                corner_bbl = corner_ftl;
                corner_ftl = corner_btl;
                corner_btl = newbtl;
                assignObjects();
            }
            else {
                var newbtr = corner_ftr;
                corner_ftr = corner_fbr;
                corner_fbr = corner_bbr;
                corner_bbr = corner_btr;
                corner_btr = newbtr;
                assignObjects();
            }
        }
        //top/bottom faces
        else if (array[algorithmLoop][0] < 6) {
            if (array[algorithmLoop][0] === 4) {
                var newftl = corner_ftr;
                corner_ftr = corner_btr;
                corner_btr = corner_btl;
                corner_btl = corner_ftl;
                corner_ftl = newftl;
                assignObjects();
            }
            else {
                var newfbl = corner_fbr;
                corner_fbr = corner_bbr;
                corner_bbr = corner_bbl;
                corner_bbl = corner_fbl;
                corner_fbl = newfbl;
                assignObjects();
            }
        }
    }
      algorithmLoop = algorithmLoop + 1;
    }
}
