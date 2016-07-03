//algorithms
var fururf = [[0,true],[4,true],[3,true],[4,false],[3,false],[0,false]];
//defs
var colors = ["white", "yellow", "green", "blue", "red", "orange"];
//pieces
var corner1 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:true, lr:true};
var corner2 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:true, lr:false};
var corner3 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:false, lr:true};
var corner4 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:true, tb:false, lr:false};
var corner5 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:true, lr:true};
var corner6 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:true, lr:false};
var corner7 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:false, lr:true};
var corner8 = {tiles:3, tile1:2, tile2:3, tile3:1, fb:false, tb:false, lr:false};
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
        if (array[algorithmLoop][0] < 2) {
            if (array[algorithmLoop][0] === 0) {
                var newftl = fbl;
                fbl = fbr
                fbr = ftr;
                ftr = ftl;
                ftl = newftl;
                assignObjects();
            }
            else {
                var newbtl = bbl;
                bbl = bbr
                bbr = btr;
                btr = btl;
                btl = newbtl;
                assignObjects();
            }
        }
    }
      algorithmLoop = algorithmLoop + 1;
    }
}

function assignObjects() {
    //fb
    ftl.fb = true;
    ftr.fb = true;
    fbl.fb = true;
    fbr.fb = true;
    btl.fb = false;
    btr.fb = false;
    bbl.fb = false;
    bbr.fb = false;
    //tb
    ftl.tb = true;
    ftr.tb = true;
    fbl.tb = false;
    fbr.tb = false;
    btl.tb = true;
    btr.tb = true;
    bbl.tb = false;
    bbr.tb = false;
    //lr
    ftl.lr = true;
    ftr.lr = false;
    fbl.lr = true;
    fbr.lr = false;
    btl.lr = true;
    btr.lr = false;
    bbl.lr = true;
    bbr.lr = false;
}
