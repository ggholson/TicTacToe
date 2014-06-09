var turn = "X";
var win = false;
var change;
var counter = 0;


$(document).ready(function() {



    $('.square').click(function() {

        if (win === true) {
            turn = "";
        }

        if ($(this).html() === "") {
            $(this).html(turn);
            change = true;
            counter++;
        } else change = false;

        if (win === false) {
            if ($('#sq1').html() != "" && $('#sq1').html() === $('#sq2').html() && $('#sq1').html() === $('#sq3').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq1').html() != "" && $('#sq1').html() === $('#sq4').html() && $('#sq1').html() === $('#sq7').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq1').html() != "" && $('#sq1').html() === $('#sq5').html() && $('#sq1').html() === $('#sq9').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq2').html() != "" && $('#sq2').html() === $('#sq5').html() && $('#sq2').html() === $('#sq8').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq3').html() != "" && $('#sq3').html() === $('#sq6').html() && $('#sq3').html() === $('#sq9').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq3').html() != "" && $('#sq3').html() === $('#sq5').html() && $('#sq3').html() === $('#sq7').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq4').html() != "" && $('#sq4').html() === $('#sq5').html() && $('#sq4').html() === $('#sq6').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if ($('#sq7').html() != "" && $('#sq7').html() === $('#sq8').html() && $('#sq7').html() === $('#sq9').html()) {
                $('#header').html(turn + " WINS!!!");
                win = true;
            } else if (counter > 8) {
                $('#header').html("DRAW!!!");
                win = true;
            } else if (change === true) {
                if (win === false) {
                    if (turn === "X") turn = "O";
                    else turn = "X";
                    $('#header').html(turn + "'s turn");
                }
            }
        }

        if (win === true) {
            $('button').css('opacity', '1');
        }

    });

    $('button').click(function() {
        $('#sq1').html('');
        $('#sq2').html('');
        $('#sq3').html('');
        $('#sq4').html('');
        $('#sq5').html('');
        $('#sq6').html('');
        $('#sq7').html('');
        $('#sq8').html('');
        $('#sq9').html('');
        win = false;
        counter = 0;
        turn = 'X';
        $('button').css('opacity', '0');
        $('#header').html(turn + "'s turn");
    });

});