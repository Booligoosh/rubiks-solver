/*
FACE NUMBERS
-------------
top face: 0
bottom face: 1
left face: 2
right face: 3
front face: 4
back face: 5
-------------
*/
var t = 3;
//algorithms
var fururf = [[0,true],[4,true],[3,true],[4,false],[3,false],[0,false]];
//defs
var colors = ["white", "yellow", "green", "blue", "red", "orange"];
var axies = ['x','y','z'];
var bandFaces = [[0,3,1,2],[0,5,1,4],[4,2,5,3]];
//bands
var bands = [];
for (var l = 0; l < t; l++) {
    for(var i = 0; i < t ; i++) {
        bands.push({orient: axies[l], ind: i, strips: [[bandFaces[l][0],0,0,0],[bandFaces[l][1],0,0,0],[bandFaces[l][2],0,0,0],[bandFaces[l][3],0,0,0]]});
    }
}
function fillFace(face, color) {
    for (band in bands) {
        for (strip in band.strips) {
            if (strip[0] === face) {
                for (var i = 0; i < strip.length; i++) {
                    strip[i] = color;
                }
            }
        }
    }
}
function doAlgorithm(array) {
    for (var i = 0; i < array.length; i++) {
        
    }
}
