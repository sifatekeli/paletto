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

PalettoTestCase.prototype.testStory5 = function () {
    var current_player = e.currentPlayer();
    board[0][0] = null;
    board[0][1] = null;
    board[0][2] = null;
    board[1][0] = null;
    board[1][1] = null;
    board[1][2] = null;
    board[1][5] = null;
    board[2][0] = null;
    board[2][1] = null;
    board[2][5] = null;
    board[3][3] = null;
    board[3][4] = null;
    board[3][5] = null;
    board[4][0] = null;
    board[4][3] = null;
    board[4][4] = null;
    board[4][5] = null;
    board[5][0] = null;
    board[5][1] = null;
    board[5][3] = null;
    board[5][4] = null;
    board[5][5] = null;

    e.takePiece("D1");

    assertTrue(board[0][3] == null);
    assertTrue(board[2][2] == "blue");
};





