var pregunta = 1;
var pregunta1 = ["-Sepultura- is Portuguese for what?", "Grave", "Blood", "Skeleton", "Morbid"];
var pregunta2 = ["Which death metal band was in the movie -Ace Ventura: Pet Detective-?", "Obituary", "Cannibal Corpse", "Suffocation", "Angel"];
var pregunta3 = ["Which Iron Maiden members were there since the first album?", "Steve Harris and Bruce Dickinson", "Steve Harris and Clive Burr", "Steve Harris and Dave Murray", "Nico McBrain and Steve Harris"];
var pregunta4 = ["Complete the KISS song title -I ...-", "Like Cake", "Think Gene Simmons Should Be President", "Love Paul Stanley", "Was Made For Loving You"];
var pregunta5 = ["Who was the first METAL band ever made?", "KISS", "Metallica", "Black Sabbath", "Pantera"];
var pregunta6 = ["Who was Well Renowned biting heads off bats?", "Marilyn Manson", "Ozzie Osbourne", "Canibal Corpse", "Alice Cooper"];
var pregunta7 = ["	Who did the first ever power slide in rock history?", "Led Zeppelin", "Metallica", "AC/DC", "Black Sabbath"];
var seconds = 10;
var nextsec = 3;
var intervalId;
var correcta = 0;
var incorrecta = 0;
var paso = 1;
var trash = 0;

$(".startbtn").click(function () {
    $(".buttons1").css("display", "none");
    $(".s2").css("display", "block");
    $(".q1").text(window['pregunta' + pregunta][0]);
    $(".a1").text(window['pregunta' + pregunta][1]);
    $(".a2").text(window['pregunta' + pregunta][2]);
    $(".a3").text(window['pregunta' + pregunta][3]);
    $(".a4").text(window['pregunta' + pregunta][4]);
    $("#remain").text("Remain time 10");
    function run() {
        imagengif="assets/images/"+(pregunta)+".gif";
        $(".gifs").attr("src",imagengif);
        if (paso == 3) {
            $(".t1").css("display", "none");
            $(".s2").css("display", "none");
            $(".r1").css("display", "none");
            $(".final").css("display", "block");
            $(".correctA").text("Correct: " + correcta);
            $(".incorrectA").text("Inorrect: " + incorrecta);
            clearInterval(intervalId);
            return;
        }
        else if (paso == 1) {
            $(".t1").css("display", "none");
            $(".s2").css("display", "block");
            $(".q1").text(window['pregunta' + pregunta][0]);
            $(".a1").text("a)"+window['pregunta' + pregunta][1]);
            $(".a2").text("b)"+window['pregunta' + pregunta][2]);
            $(".a3").text("c)"+window['pregunta' + pregunta][3]);
            $(".a4").text("d)"+window['pregunta' + pregunta][4]);
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        else if (paso == 2) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement2, 1000);

        }
    }
    function decrement2() {
        nextsec--;
        if (nextsec === 0) {
            stop();
            $(".t1").css("display", "none");
            $(".r1").css("display", "none");
            $(".s2").css("display", "block");
            nextsec = 3;
            seconds = 10;
            paso = 1;
            $("#remain").text("Remain time " + seconds);
            run();

        }
        function stop() {
            clearInterval(intervalId);
        }

    }




    function decrement() {
        seconds--;
        $("#remain").text("Remain time " + seconds);

        if (seconds == 0) {
            stop();
            $(".s2").css("display", "none");
            $(".t1").css("display", "block");
            if (pregunta == 1 || pregunta == 7) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][1]);
                incorrecta++;
            }
            else if (pregunta == 2 || pregunta == 6) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][2]);
                incorrecta++;
            }
            else if (pregunta == 3 || pregunta == 5) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][3]);
                incorrecta++;
            }
            else if (pregunta == 4) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][4]);
                incorrecta++;
            }
            pregunta++;
            if (pregunta == 8) {
                paso = 3;
            }
            else paso = 2;
            seconds = 10;
            run();

        }
        function stop() {
            clearInterval(intervalId);
        }
    }

    $(".a1").click(function () {
        stop();
        $(".s2").css("display", "none");
        $(".r1").css("display", "block");
        if (pregunta == 1 || pregunta == 7) {
            $(".correctanswer").text("Well Done");
            correcta++;
        }  else if (pregunta == 2 || pregunta == 6) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][2]);
            incorrecta++;
        }
        else if (pregunta == 3 || pregunta == 5) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][3]);
            incorrecta++;
        }
        else if (pregunta == 4) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][4]);
            incorrecta++;
        }
        pregunta++;
        seconds = 10;
        if (pregunta == 8) {
            paso = 3;
        }
        else paso = 2;
        run();

    });


    $(".a2").click(function () {
        stop();
        $(".s2").css("display", "none");
        $(".r1").css("display", "block");
        if (pregunta == 2 || pregunta == 6) {
            $(".correctanswer").text("Well Done");
            correcta++;
        } else if (pregunta == 1 || pregunta == 7) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][1]);
            incorrecta++;
        }
        else if (pregunta == 3 || pregunta == 5) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][3]);
            incorrecta++;
        }
        else if (pregunta == 4) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][4]);
            incorrecta++;
        }
        pregunta++;
        seconds = 10;
        if (pregunta == 8) {
            paso = 3;
        }
        else paso = 2;
        run();

    });
    $(".a3").click(function () {
        stop();
        $(".s2").css("display", "none");
        $(".r1").css("display", "block");
        if (pregunta == 3 || pregunta == 5) {
            $(".correctanswer").text("Well Done");
            correcta++;
        }  else if (pregunta == 2 || pregunta == 6) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][2]);
                incorrecta++;
            }
            else if (pregunta == 1 || pregunta == 7) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][1]);
                incorrecta++;
            }
            else if (pregunta == 4) {
                $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][4]);
                incorrecta++;
            }
        
        pregunta++;
        seconds = 10;
        if (pregunta == 8) {
            paso = 3;
        }
        else paso = 2;
        run();

    });
    $(".a4").click(function () {
        stop();
        $(".s2").css("display", "none");
        $(".r1").css("display", "block");
        if (pregunta == 4) {
            $(".correctanswer").text("Well Done");
            correcta++;
        } else if (pregunta == 2 || pregunta == 6) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][2]);
            incorrecta++;
        }
        else if (pregunta == 1 || pregunta == 7) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][1]);
            incorrecta++;
        }
        else if (pregunta == 3 || pregunta == 5) {
            $(".correctanswer").text("Correct Answer was: " + window['pregunta' + pregunta][3]);
            incorrecta++;
        }
        pregunta++;
        seconds = 10;
        if (pregunta == 8) {
            paso = 3;
        }
        else paso = 2;
        run();

    });

    $(".restart").click(function () {
        $(".final").css("display", "none");
        pregunta = 1;
        seconds = 10;
    nextsec = 3;
    intervalId;
    correcta = 0;
    incorrecta = 0;
    paso = 1;
    trash = 0;
    run();
    });
    


    run();
});



