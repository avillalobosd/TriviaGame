var pregunta = 1;
var pregunta1 = ["Da click en el numero uno", "1", "2", "3", "4"];
var pregunta2 = ["Da click en el numero dos", "1", "2", "3", "4"];
var pregunta3 = ["Da click en el numero tres", "1", "2", "3", "4"];
var pregunta4 = ["Da click en el numero cuatro", "1", "2", "3", "4"];
var pregunta5 = ["Da click en el numero cinco", "1", "2", "5", "4"];
var pregunta6 = ["Da click en el numero seis", "1", "6", "3", "4"];
var pregunta7 = ["Da click en el numero siete", "7", "2", "3", "4"];
var seconds = 5;
var nextsec=3;
var intervalId;
var correcta=0;
var incorrecta=0;
var paso=1;

$(".startbtn").click(function () {
    $(".buttons1").css("display", "none");
    $(".s2").css("display", "block");
    $(".q1").text(window['pregunta' + pregunta][0]);
    $(".a1").text(window['pregunta' + pregunta][1]);
    $(".a2").text(window['pregunta' + pregunta][2]);
    $(".a3").text(window['pregunta' + pregunta][3]);
    $(".a4").text(window['pregunta' + pregunta][4]);
    $("#remain").text("Remain time 5");
    function run() {
        if(paso==1){
            $(".s2").css("display", "block");
            $(".q1").text(window['pregunta' + pregunta][0]);
            $(".a1").text(window['pregunta' + pregunta][1]);
            $(".a2").text(window['pregunta' + pregunta][2]);
            $(".a3").text(window['pregunta' + pregunta][3]);
            $(".a4").text(window['pregunta' + pregunta][4]);
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        }
        else if (paso==2){
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
            nextsec=3;
            seconds=5;
            paso=1;
            $("#remain").text("Remain time "+seconds);
            run();
        
        }
        function stop() {
            clearInterval(intervalId);
        }

    }
  


    function decrement() {
        seconds--;
        $("#remain").text("Remain time " + seconds);
        
        if (seconds === 0) {
            stop();
            $(".s2").css("display", "none");
            $(".t1").css("display", "block");
            $(".correctanswer").text("Correct Answer was: "+ window['pregunta' + pregunta][1]);
            pregunta++;
            paso=2;
            seconds=5;
            run();
        }
        function stop() {
            clearInterval(intervalId);
        }

        $(".a1").click(function () {
            stop();
            $(".s2").css("display", "none");
            $(".r1").css("display", "block");
            $(".correctanswer").text("Correct Answer was: "+ window['pregunta' + pregunta][1]);
            pregunta++;
            seconds=5;
            paso=2;
            run();
            
        });
    }
  





    run();
});


