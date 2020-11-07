$(document).ready(function(){


    $('#profile__ripple').ripples({
        resolution : 512,
        dropRadius : 10
    });

    const bars = document.querySelectorAll('.progress__bar');
    
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%";
        console.log(percentage);
        
    })
    

    // counter
    const counters = document.querySelectorAll('.counter');
    console.log(counters);
    function runCounter ()
    {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;
            let step = target / 100;

            let countit = function(){
                let displayedCount = +counter.innerText;
                if(displayedCount < target)
                {
                    counter.innerText = Math.ceil(displayedCount +step);
                    setTimeout(countit, 1);
                }
                else{
                    counter.innerText = target;
                }
            }
            countit();
        })
    }
 
    runCounter();
      
});