'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
var board = e.getBoard();
var colors = e.getColors();
var color_counter = e.getColorCounter();

PalettoTestCase.prototype.testStory1 = function () {
    e.init();
    for(var line = 0; line < board.length; line++){
        console.log(board[line]);
    }
    assertTrue(true);
};

PalettoTestCase.prototype.testStory2 = function () {
    p1.takePiece(0,5);

    assertTrue(board[0][5] == "yellow" && p1.yellow == 1);
};