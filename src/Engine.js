'use strict';

var Engine = function () {

    var board = new Array(new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6));
    var colors = new Array("black", "blue", "green", "red", "white", "yellow");
    var color_counter = new Array(6).fill(0);

    var p1 = {black: 0, blue: 0, green: 0, red: 0, white: 0, yellow: 0};

    this.getBoard = function () {
        return board;
    };

    this.getColors = function () {
        return colors;
    };

    this.getColorCounter = function () {
        return color_counter;
    };

    this.getP1 = function(){
        return p1;
    };

    this.init = function () {
        board[0] = ["black", "green", "white", "blue", "red", "white"];
        board[1] = ["yellow", "white", "green", "red", "yellow", "blue"];
        board[2] = ["blue", "yellow", "blue", "white", "black", "red"];
        board[3] = ["red", "black", "red", "green", "blue", "white"];
        board[4] = ["white", "green", "yellow", "black", "yellow", "green"];
        board[5] = ["yellow", "blue", "black", "red", "green", "black"];
    };

    this.takePiece = function (line, column) {
        var color = board[line][column];
        p1[color]++;
        board[line][column] = null;
    };

};

