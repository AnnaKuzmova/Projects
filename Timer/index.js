var print_result = document.querySelector(".seconds")
var print_result2 = document.querySelector(".minutes");


var mySec = 0;
var myMin = 0;
var myFunc;

function myStartFunction(){

    myFunc = setInterval(start,50)
}

function start(){

    mySec++;
    if(mySec < 10) {
        print_result.innerHTML = "0" + mySec;

    }else if(mySec == 60) {

        myMin++;
        mySec = 0;
        print_result.innerHTML = "0" + mySec;

    }else {

        print_result.innerHTML = mySec;
    }

    if(myMin < 10) {

        print_result2.innerHTML = "0" + myMin;
    }else {

        print_result2.innerHTML = myMin;
    }
}

function myStopFunction() {
    
    clearInterval(myFunc);
  }
