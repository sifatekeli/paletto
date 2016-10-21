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
    console.log("Scenario 6");

    e2.takePiece("A1");
    e2.takePiece("B1");
    e2.takePiece("A2");
    e2.takePiece("A3");
    e2.takePiece("A5");
    e2.takePiece("E1");
    e2.takePiece("C3");
    e2.takePiece("B3");
    e2.takePiece("B4");

    assertTrue(e2.getWinner() == 0);
};

PalettoTestCase.prototype.testStory7 = function () {
    var e3 = new Engine();
    var board3 = e3.getBoard();
    e3.init();
    console.log("Scenario 7");

    e3.takePiece("A1");
    e3.takePiece("A2");
    e3.takePiece("A5");
    e3.takePiece("E6");
    e3.takePiece("A3");
    e3.takePiece("C1");
    e3.takePiece("E1");
    e3.takePiece("D1");
    e3.takePiece("E2");
    e3.takePiece("C6");
    e3.takePiece("B5");
    e3.takePiece("D2");
    e3.takePiece("D3");
    e3.takePiece("E4");
    e3.takePiece("C5");
    e3.takePiece("D4");
    e3.takePiece("C3");
    e3.takePiece("B4");
    e3.takePiece("C4");

    assertTrue(e3.getWinner() == 0);
};




