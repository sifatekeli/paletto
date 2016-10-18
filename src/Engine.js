'use strict';

var Engine = function () {

    var board = new Array(new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6));
    var colors = new Array("black", "blue", "green", "red", "white", "yellow");
    var color_counter = new Array(6).fill(0);
    var current_player = 0;

    var p = {black: 0, blue: 0, green: 0, red: 0, white: 0, yellow: 0};
    var players = new Array(2).fill(p);

    this.getBoard = function () {
        return board;
    };

    this.getColors = function () {
        return colors;
    };

    this.getColorCounter = function () {
        return color_counter;
    };

    this.getPlayer = function(p){
        return players[p];
    };


    this.init = function () {
        board[0] = ["black", "green", "white", "blue", "red", "white"];
        board[1] = ["yellow", "white", "green", "red", "yellow", "blue"];
        board[2] = ["blue", "yellow", "blue", "white", "black", "red"];
        board[3] = ["red", "black", "red", "green", "blue", "white"];
        board[4] = ["white", "green", "yellow", "black", "yellow", "green"];
        board[5] = ["yellow", "blue", "black", "red", "green", "black"];
    };

    this.takePiece = function (location) {
        var column = location.charCodeAt(0) - "A".charCodeAt(0);
        var line = (location.charCodeAt(1) - "0".charCodeAt(0))-1;
        var color = board[line][column];
        takePieceOf(color);
        //players[current_player][color]++;
        //board[line][column] = null;
        nextTour();
    };

    function takePieceOf(color){
        var tab_color = getColorPos(color);
        for(var pos = 0; pos < tab_color.length; pos++){
            if(nbNeighbour(tab_color[pos][0], tab_color[pos][1]) <= 2){
                board[tab_color[pos][0]][tab_color[pos][1]] = null;
                players[current_player][color]++;
            }
        }
    }

    function nbNeighbour(line, column){
        var counter = 0;
        if(line == 0){
            if(column == 0){
                counter+= isEmpty(line +1, column) + isEmpty(line, column +1);
            }else{
                counter+= isEmpty(line +1, column) + isEmpty(line, column +1) + isEmpty(line, column -1);
            }
        }else if(column == 0){
            if(line == 5){
                counter += isEmpty(line, column +1) + isEmpty(line -1, column);
            }else {
                counter += isEmpty(line +1, column) + isEmpty(line, column +1) + isEmpty(line -1, column);
            }
        }else{
            if(line == 5){
                counter += isEmpty(line - 1, column) + isEmpty(line, column + 1) + isEmpty(line, column - 1);
            }else {
                counter += isEmpty(line + 1, column) + isEmpty(line - 1, column) + isEmpty(line, column + 1) + isEmpty(line, column - 1);
            }
        }
        return counter;
    }

    function isEmpty(line, column){
        if(board[line][column] != null) return 1;
        return 0;
    }


    function getColorPos(color) {
        var color_tab = new Array();
        for (var line = 0; line < board.length; line++) {
            for (var column = 0; column < board.length; column++) {
                if (board[line][column] == color) color_tab.push(new Array(line, column));
            }
        }
        return color_tab;
    }

    function nextTour(){
        if(current_player != players.length) current_player = (current_player % players.length) +1;
        else current_player = 0;
    }

    this.currentPlayer = function(){
        return current_player;
    };

    this.nbPiece = function (location) {
        var counter = 0;
        for(var line = 0; line < board.length; line++){
            for(var column = 0; column < board[line].length; column++){
                if (board[line][column] != null) counter++;
            }
        }
        return counter;
    };

};

