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
    var e1 = new Engine();
    var board1 = e1.getBoard();
    e1.init();

    board1[0][0] = null;
    board1[0][1] = null;
    board1[0][2] = null;
    board1[1][0] = null;
    board1[1][1] = null;
    board1[1][2] = null;
    board1[1][5] = null;
    board1[2][0] = null;
    board1[2][1] = null;
    board1[2][5] = null;
    board1[3][3] = null;
    board1[3][4] = null;
    board1[3][5] = null;
    board1[4][0] = null;
    board1[4][3] = null;
    board1[4][4] = null;
    board1[4][5] = null;
    board1[5][0] = null;
    board1[5][1] = null;
    board1[5][3] = null;
    board1[5][4] = null;
    board1[5][5] = null;

    e1.takePiece("D1");

    assertTrue(board1[0][3] == null);
    assertTrue(board1[2][2] == "blue");

};


PalettoTestCase.prototype.testStory6 = function () {
    var e2 = new Engine();
    var board2 = e2.getBoard();
    e2.init();

    e2.takePiece("A1");
    e2.takePiece("B1");
    e2.takePiece("A2");
    e2.takePiece("A3");
    e2.takePiece("A5");
    e2.takePiece("E1");
    e2.takePiece("C3");
    e2.takePiece("B3");
    e2.takePiece("B4");

    var p1 = e2.getPlayer(0);
    assertTrue(e2.getWinner() == 0);
};





