

let yourName = "Azuka Ehi" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let total = 0;


    
    

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbDown = document.querySelector("#minus-gb")

const chipPlus = document.querySelector("#add-cc")
const chipMinus = document.querySelector("#minus-cc")

const sugarPlus = document.querySelector("#add-sugar")
const sugarMinus = document.querySelector("#minus-sugar")

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    gb++;
    total++;
    let gbtab = document.querySelector("#qty-gb");
    gbtab.textContent = gb;

    let ttab = document.querySelector('#qty-total');
    ttab.textContent = total;
    

})



gbDown.addEventListener('click', function(){
    if (gb > 0) {
        gb--;
        total--;
        
        let gbtab = document.querySelector("#qty-gb");
        gbtab.textContent = gb;

        let ttab = document.querySelector('#qty-total');
        ttab.textContent = total;
    }
})

chipPlus.addEventListener('click', function(){
    cc++;
    total++;
    
    let cctab = document.querySelector("#qty-cc");
    cctab.textContent = cc;

    let ttab = document.querySelector('#qty-total');
    ttab.textContent = total;
})
chipMinus.addEventListener('click', function(){
    if (cc > 0){
        cc--;
        total--;
        
        let cctab = document.querySelector("#qty-cc");
        cctab.textContent = cc;

        let ttab = document.querySelector('#qty-total');
        ttab.textContent = total;
    }
})   
sugarPlus.addEventListener('click', function(){
    sugar++;
    total++;
   
    let stab = document.querySelector("#qty-sugar");
        stab.textContent = sugar;

        let ttab = document.querySelector('#qty-total');
        ttab.textContent = total;    
})
sugarMinus.addEventListener('click', function(){
    if (sugar > 0){
        sugar--;
        total--;
      
        let stab = document.querySelector("#qty-sugar");
        stab.textContent = sugar;

        let ttab = document.querySelector('#qty-total');
        ttab.textContent = total;
    }
})   



// TODO: Hook up event listeners for the rest of the buttons