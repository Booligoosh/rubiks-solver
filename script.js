//algorithms
var fururf = [[0,true],[4,true],[3,true],[4,false],[3,false],[0,false]];
//defs
var colors = ["white", "yellow", "green", "blue", "red", "orange"];
//pieces
var corner1 = {cornerNum:1, tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:true, lr:true};
var corner2 = {cornerNum:2, tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:true, lr:false};
var corner3 = {cornerNum:3, tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:false, lr:true};
var corner4 = {cornerNum:4, tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:false, lr:false};
var corner5 = {cornerNum:5, tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:true, lr:true};
var corner6 = {cornerNum:6, tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:true, lr:false};
var corner7 = {cornerNum:7, tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:false, lr:true};
var corner8 = {cornerNum:8, tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:false, lr:false};
var edge1 = {tiles:2, tile1:2, tile2:5};
var edge2 = {tiles:2, tile1:2, tile2:5};
var edge3 = {tiles:2, tile1:2, tile2:5};
var edge4 = {tiles:2, tile1:2, tile2:5};
var edge5 = {tiles:2, tile1:2, tile2:5};
var edge6 = {tiles:2, tile1:2, tile2:5};
var edge7 = {tiles:2, tile1:2, tile2:5};
var edge8 = {tiles:2, tile1:2, tile2:5};
var edge9 = {tiles:2, tile1:2, tile2:5};
var edge10 = {tiles:2, tile1:2, tile2:5};
var edge11 = {tiles:2, tile1:2, tile2:5};
var edge12 = {tiles:2, tile1:2, tile2:5};
var center1 = {tiles:1, tile1:2};
var center2 = {tiles:1, tile1:2};
var center3 = {tiles:1, tile1:2};
var center4 = {tiles:1, tile1:2};
var center5 = {tiles:1, tile1:2};
var center6 = {tiles:1, tile1:2};
//positions
var corner_ftl = corner1;
var corner_ftr = corner2;
var corner_fbl = corner3;
var corner_fbr = corner4;
var corner_btl = corner5;
var corner_btr = corner6;
var corner_bbl = corner7;
var corner_bbr = corner8;

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
    }
      algorithmLoop = algorithmLoop + 1;
    }
}

function assignObjects() {
    //fb
    corner_ftl.fb = true;
    corner_ftr.fb = true;
    corner_fbl.fb = true;
    corner_fbr.fb = true;
    corner_btl.fb = false;
    corner_btr.fb = false;
    corner_bbl.fb = false;
    corner_bbr.fb = false;
    //tb
    corner_ftl.tb = true;
    corner_ftr.tb = true;
    corner_fbl.tb = false;
    corner_fbr.tb = false;
    corner_btl.tb = true;
    corner_btr.tb = true;
    corner_bbl.tb = false;
    corner_bbr.tb = false;
    //lr
    corner_ftl.lr = true;
    corner_ftr.lr = false;
    corner_fbl.lr = true;
    corner_fbr.lr = false;
    corner_btl.lr = true;
    corner_btr.lr = false;
    corner_bbl.lr = true;
    corner_bbr.lr = false;
}
