// FOR COUNTER/////////////////////

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
//     converting string to number by adding + in the beginning
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


// MAKING TOP ARROW BUTTON VISIBLE ALLOVER THE PAGE
const arrowButon=document.querySelector('.footer-arrow');

// when the user scrolls 20px down from top of document then show the button
window.onscroll=()=>{
    // we test both for safari and chrome,firefox,edge
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    arrowButon.style.display="block";        
    }else{
        arrowButon.style.display="none";
    }
}

arrowButon.addEventListener('click',()=>{
    document.body.scrollTop=0; ///For safari
    document.documentElement.scrollTop=0; //For chrome firefox safari   
})


