'use strict';

var Engine = function () {

    var board = new Array(new Array(6), new Array(6), new Array(6), new Array(6), new Array(6), new Array(6));
    var colors = new Array("black", "blue", "green", "red", "white", "yellow");
    var color_counter = new Array(6).fill(0);
    var current_player = 0;
    var winner = null;

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
        isWinner(color);
        nextTour();
    };

    function takePieceOf(color){
        var tab_color = getColorPos(color);

        for(var pos = 0; pos < tab_color.length; pos++){

            var nb_neigbour = getNeighbours(tab_color[pos][0], tab_color[pos][1]).length;
            if(nb_neigbour <= 2){
                //on prend
                if((nb_neigbour == 2 && isALink(tab_color[pos][0], tab_color[pos][1])) || nb_neigbour==1) {
                    board[tab_color[pos][0]][tab_color[pos][1]] = null;
                    players[current_player][color]++;
                }
            }
        }
    }

    function isALink(line, column){
        if((line==getNeighbours(line,column)[0][1] && column>=getNeighbours(line,column)[1][0]) || (line==getNeighbours(line,column)[1][0] && column>=getNeighbours(line,column)[0][1])){
            if((board[getNeighbours(line,column)[0][0]][getNeighbours(line,column)[1][1]])==null){
                return false;
            }else{
                return true;
            }
        }else{
            if((board[getNeighbours(line,column)[1][0]][getNeighbours(line,column)[0][1]])==null){
                return false;
            }else{
                return true;
            }
        }
    }


    function getNeighbours(line, column){
        var counter = 0;
        var tab_neighbour = new Array();
        if(line == 0){
            if(column == 0){
                addIfExist(line +1, column, tab_neighbour);
                addIfExist(line, column +1, tab_neighbour);
            }else{
                addIfExist(line +1, column, tab_neighbour);
                addIfExist(line, column +1, tab_neighbour);
                addIfExist(line, column -1, tab_neighbour);
            }
        }else if(column == 0){
            if(line == 5){
                addIfExist(line, column +1, tab_neighbour);
                addIfExist(line -1, column, tab_neighbour);
            }else {
                addIfExist(line +1, column, tab_neighbour);
                addIfExist(line, column +1, tab_neighbour);
                addIfExist(line -1, column, tab_neighbour);
            }
        }else{
            if(line == 5){
                addIfExist(line - 1, column, tab_neighbour);
                addIfExist(line, column + 1, tab_neighbour);
                addIfExist(line, column - 1, tab_neighbour);
            }else {
                addIfExist(line + 1, column, tab_neighbour);
                addIfExist(line - 1, column, tab_neighbour);
                addIfExist(line, column + 1, tab_neighbour);
                addIfExist(line, column - 1, tab_neighbour);
            }
        }
        return tab_neighbour;
    }

    function addIfExist(line, column, tab_neighbour) {
        if(isEmpty(line, column) == 1) tab_neighbour.push(new Array(line, column));
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
        if(current_player != players.length-1) current_player++;
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

    function isWinner(color) {
        if(players[current_player][color] == 6){
            winner = current_player;
            console.log("Player "+winner+" is the winner because he have the 6 "+color+" balls !");
            return true;
        }
        return false;
    }

    this.getWinner = function () {
        return winner;
    }


};