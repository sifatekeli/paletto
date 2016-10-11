'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
var board = e.getBoard();
var colors = e.getColors();
var color_counter = e.getColorCounter();
var p1 = e.getP1();

PalettoTestCase.prototype.testStory1 = function () {
    e.init();
    for(var line = 0; line < board.length; line++){
        console.log(board[line]);
    }
    assertTrue(true);
};

PalettoTestCase.prototype.testStory2 = function () {
    e.takePiece(5,0);
    assertTrue(board[5][0] == null && p1.yellow == 1);
};