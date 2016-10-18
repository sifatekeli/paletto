'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
var board = e.getBoard();
var colors = e.getColors();
var color_counter = e.getColorCounter();
var p1 = e.getPlayer(0);
var p2 = e.getPlayer(1);

PalettoTestCase.prototype.testStory1 = function () {
    e.init();
    assertTrue(true);
};

PalettoTestCase.prototype.testStory2 = function () {
     e.takePiece("A6");
     assertTrue(board[5][0] == null && p1.yellow == 1);
};

PalettoTestCase.prototype.testStory3 = function () {
    assertTrue(e.nbPiece() == 35 && p1.yellow == 1 && board[5][0] == null);
};

PalettoTestCase.prototype.testStory4 = function () {
    var current_player = e.currentPlayer();
    e.takePiece("A1");
    assertTrue(current_player == 1);
    assertTrue(e.nbPiece() == 33);
    assertTrue(p2.black == 2);
    assertTrue(board[0][0] == null);
    assertTrue(board[5][5] == null);
};



