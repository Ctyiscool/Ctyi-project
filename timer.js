document.getElementById("timer").innerHTML = 01 + ":" + 00;
document.onmousemove = resetTimer;
Document.onmouseclick = resetTimer;
document.onkeypress = resetTimer;

var pressCount = 0;

function startTimer(buttonPressed) {

    if (buttonPressed == 1) {
        pressCount = pressCount + 1;
        //alert("First call!")
    }

    if (pressCount>1) {
        document.getElementById("timer").innerHTML = "0:00";
    }

    var presentTime = document.getElementById("timer").innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));

    //document.getElementByName("timer").disable = true;

    if(s==59){m=m-1}
    //if(m<0){alert('timer completed')}

    document.getElementById("timer").innerHTML = m + ":" + s;

    if ((m==0 && s==0) || m<0)  {
        document.getElementById("timer").innerHTML = "0:00";
        return;
    } else {
        setTimeout(startTimer, 1000);
    }
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 00) {sec = "59"};
    return sec;
}

function resetTimer() {
    document.getElementById("timer").innerHTML = "0:00";
     
}