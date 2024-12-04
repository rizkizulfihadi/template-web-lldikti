let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplays)=> {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});