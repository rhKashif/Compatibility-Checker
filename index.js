let compEl = document.getElementById("comp-el");
let scoreEl = document.getElementById("score-el");
let score = 0;


const compCalc = (var1, var2) =>{
    compEl.textContent = "Compatibility Score: " + var1 + " and " + var2;
    score = Math.ceil(Math.random(1)*100)
    scoreEl.textContent = score + "%";
}

const names = () => {
    let var1 = prompt("Enter name 1: ")
    let var2 = prompt("Enter name 2: ")
    compCalc(var1, var2)
}

const birthMonth = () => {
    let var1 = prompt("Enter birthmonth 1: ")
    let var2 = prompt("Enter birthmonth 2: ")
    compCalc(var1, var2)
}


const starSign = () =>{
    let var1 = prompt("Enter starsign 1: ")
    let var2 = prompt("Enter starsign 2: ")
    let var3 = var1 + var2
    let var4 = var2 + var1
    switch (var3.toLowerCase() || var4.toLowerCase()){
        case "ariesaries":
            scoreEl.textContent = "70%";
            break;
        case "ariestaurus":
            scoreEl.textContent = "60%";
            break;
        case "ariesgemini":
            scoreEl.textContent = "90%";
            break;
        case "ariescancer":
            scoreEl.textContent = "79%";
            break;
        case "ariesleo":
            scoreEl.textContent = "91%";
            break;
        case "ariesvirgo":
            scoreEl.textContent = "84%";
            break;
        case "arieslibra":
            scoreEl.textContent = "67%";
            break;    
        case "ariesscorpius":
            scoreEl.textContent = "49%";
            break; 
        case "ariessagittarius":
            scoreEl.textContent = "96%";
            break; 
        case "ariescapricornus":
            scoreEl.textContent = "55%";
            break; 
        case "ariesaquarius":
            scoreEl.textContent = "97%";
            break; 
        case "ariespisces":
            scoreEl.textContent = "77%";
            break;      
        case "taurusaries":
            scoreEl.textContent = "50%";
            break;
        case "taurustaurus":
            scoreEl.textContent = "92%";
            break;
        case "taurusgemini":
            scoreEl.textContent = "70%";
            break;
        case "tauruscancer":
            scoreEl.textContent = "94%";
            break;
        case "taurusleo":
            scoreEl.textContent = "56%";
            break;
        case "taurusvirgo":
            scoreEl.textContent = "85%";
            break;
        case "tauruslibra":
            scoreEl.textContent = "82%";
            break;    
        case "taurusscorpius":
            scoreEl.textContent = "90%";
            break; 
        case "taurussagittarius":
            scoreEl.textContent = "45%";
            break; 
        case "tauruscapricornus":
            scoreEl.textContent = "89%";
            break; 
        case "taurusaquarius":
            scoreEl.textContent = "75%";
            break; 
        case "tauruspisces":
            scoreEl.textContent = "94%";
            break;   
        case "geminiaries":
            scoreEl.textContent = "88%";
            break;
        case "geminitaurus":
            scoreEl.textContent = "83%";
            break;
        case "geminigemini":
            scoreEl.textContent = "82%";
            break;
        case "geminicancer":
            scoreEl.textContent = "68%";
            break;
        case "geminileo":
            scoreEl.textContent = "82%";
            break;
        case "geminivirgo":
            scoreEl.textContent = "78%";
            break;
        case "geminilibra":
            scoreEl.textContent = "93%";
            break;    
        case "geminiscorpius":
            scoreEl.textContent = "67%";
            break; 
        case "geminisagittarius":
            scoreEl.textContent = "96%";
            break; 
        case "geminicapricornus":
            scoreEl.textContent = "79%";
            break; 
        case "geminiaquarius":
            scoreEl.textContent = "94%";
            break; 
        case "geminipisces":
            scoreEl.textContent = "44%";
            break;    
        case "canceraries":
            scoreEl.textContent = "72%";
            break;
        case "cancertaurus":
            scoreEl.textContent = "95%";
            break;
        case "cancergemini":
            scoreEl.textContent = "85%";
            break;
        case "cancercancer":
            scoreEl.textContent = "90%";
            break;
        case "cancerleo":
            scoreEl.textContent = "69%";
            break;
        case "cancervirgo":
            scoreEl.textContent = "85%";
            break;
        case "cancerlibra":
            scoreEl.textContent = "74%";
            break;    
        case "cancerscorpius":
            scoreEl.textContent = "90%";
            break; 
        case "cancersagittarius":
            scoreEl.textContent = "60%";
            break; 
        case "cancercapricornus":
            scoreEl.textContent = "80%";
            break; 
        case "canceraquarius":
            scoreEl.textContent = "91%";
            break; 
        case "cancerpisces":
            scoreEl.textContent = "96%";
            break;  
        case "leoaries":
            scoreEl.textContent = "95%";
            break;
        case "leotaurus":
            scoreEl.textContent = "65%";
            break;
        case "leogemini":
            scoreEl.textContent = "86%";
            break;
        case "leocancer":
            scoreEl.textContent = "70%";
            break;
        case "leoleo":
            scoreEl.textContent = "85%";
            break;
        case "leovirgo":
            scoreEl.textContent = "68%";
            break;
        case "leolibra":
            scoreEl.textContent = "91%";
            break;    
        case "leoscorpius":
            scoreEl.textContent = "60%";
            break; 
        case "leosagittarius":
            scoreEl.textContent = "95%";
            break; 
        case "leocapricornus":
            scoreEl.textContent = "68%";
            break; 
        case "leoaquarius":
            scoreEl.textContent = "85%";
            break; 
        case "leopisces":
            scoreEl.textContent = "82%";
            break;  
        case "virgoaries":
            scoreEl.textContent = "65%";
            break;
        case "virgotaurus":
            scoreEl.textContent = "89%";
            break;
        case "virgogemini":
            scoreEl.textContent = "55%";
            break;
        case "virgocancer":
            scoreEl.textContent = "87%";
            break;
        case "virgoleo":
            scoreEl.textContent = "80%";
            break;
        case "virgovirgo":
            scoreEl.textContent = "85%";
            break;
        case "virgolibra":
            scoreEl.textContent = "73%";
            break;    
        case "virgoscorpius":
            scoreEl.textContent = "71%";
            break; 
        case "virgosagittarius":
            scoreEl.textContent = "72%";
            break; 
        case "virgocapricornus":
            scoreEl.textContent = "95%";
            break; 
        case "virgoaquarius":
            scoreEl.textContent = "77%";
            break; 
        case "virgopisces":
            scoreEl.textContent = "75%";
            break;
        case "libraaries":
            scoreEl.textContent = "85%";
            break;
        case "librataurus":
            scoreEl.textContent = "90%";
            break;
        case "libragemini":
            scoreEl.textContent = "92%";
            break;
        case "libracancer":
            scoreEl.textContent = "80%";
            break;
        case "libraleo":
            scoreEl.textContent = "89%";
            break;
        case "libravirgo":
            scoreEl.textContent = "82%";
            break;
        case "libralibra":
            scoreEl.textContent = "74%";
            break;    
        case "librascorpius":
            scoreEl.textContent = "48%";
            break; 
        case "librasagittarius":
            scoreEl.textContent = "82%";
            break; 
        case "libracapricornus":
            scoreEl.textContent = "66%";
            break; 
        case "libraaquarius":
            scoreEl.textContent = "92%";
            break; 
        case "librapisces":
            scoreEl.textContent = "82%";
            break;
        case "scorpiusaries":
            scoreEl.textContent = "50%";
            break;
        case "scorpiustaurus":
            scoreEl.textContent = "93%";
            break;
        case "scorpiusgemini":
            scoreEl.textContent = "72%";
            break;
        case "scorpiuscancer":
            scoreEl.textContent = "90%";
            break;
        case "scorpiusleo":
            scoreEl.textContent = "55%";
            break;
        case "scorpiusvirgo":
            scoreEl.textContent = "85%";
            break;
        case "scorpiuslibra":
            scoreEl.textContent = "40%";
            break;    
        case "scorpiusscorpius":
            scoreEl.textContent = "79%";
            break; 
        case "scorpiussagittarius":
            scoreEl.textContent = "84%";
            break; 
        case "scorpiuscapricornus":
            scoreEl.textContent = "92%";
            break; 
        case "scorpiusaquarius":
            scoreEl.textContent = "88%";
            break; 
        case "scorpiuspisces":
            scoreEl.textContent = "93%";
            break;
        case "sagittariusaries":
            scoreEl.textContent = "88%";
            break;
        case "sagittariustaurus":
            scoreEl.textContent = "40%";
            break;
        case "sagittariusgemini":
            scoreEl.textContent = "70%";
            break;
        case "sagittariuscancer":
            scoreEl.textContent = "40%";
            break;
        case "sagittariusleo":
            scoreEl.textContent = "90%";
            break;
        case "sagittariusvirgo":
            scoreEl.textContent = "87%";
            break;
        case "sagittariuslibra":
            scoreEl.textContent = "92%";
            break;    
        case "sagittariusscorpius":
            scoreEl.textContent = "69%";
            break; 
        case "sagittariussagittarius":
            scoreEl.textContent = "92%";
            break; 
        case "sagittariuscapricornus":
            scoreEl.textContent = "80%";
            break; 
        case "sagittariusaquarius":
            scoreEl.textContent = "60%";
            break; 
        case "sagittariuspisces":
            scoreEl.textContent = "68%";
            break;
        case "capricornusaries":
            scoreEl.textContent = "45%";
            break;
        case "capricornustaurus":
            scoreEl.textContent = "91%";
            break;
        case "capricornusgemini":
            scoreEl.textContent = "69%";
            break;
        case "capricornuscancer":
            scoreEl.textContent = "74%";
            break;
        case "capricornusleo":
            scoreEl.textContent = "72%";
            break;
        case "capricornusvirgo":
            scoreEl.textContent = "98%";
            break;
        case "capricornuslibra":
            scoreEl.textContent = "68%";
            break;    
        case "capricornusscorpius":
            scoreEl.textContent = "80%";
            break; 
        case "capricornussagittarius":
            scoreEl.textContent = "76%";
            break; 
        case "capricornuscapricornus":
            scoreEl.textContent = "82%";
            break; 
        case "capricornusaquarius":
            scoreEl.textContent = "68%";
            break; 
        case "capricornuspisces":
            scoreEl.textContent = "82%";
            break;
        case "aquariusaries":
            scoreEl.textContent = "95%";
            break;
        case "aquariustaurus":
            scoreEl.textContent = "73%";
            break;
        case "aquariusgemini":
            scoreEl.textContent = "90%";
            break;
        case "aquariuscancer":
            scoreEl.textContent = "79%";
            break;
        case "aquariusleo":
            scoreEl.textContent = "80%";
            break;
        case "aquariusvirgo":
            scoreEl.textContent = "50%";
            break;
        case "aquariuslibra":
            scoreEl.textContent = "92%";
            break;    
        case "aquariusscorpius":
            scoreEl.textContent = "78%";
            break; 
        case "aquariussagittarius":
            scoreEl.textContent = "55%";
            break; 
        case "aquariuscapricornus":
            scoreEl.textContent = "82%";
            break; 
        case "aquariusaquarius":
            scoreEl.textContent = "91%";
            break; 
        case "aquariuspisces":
            scoreEl.textContent = "72%";
            break;
        case "piscesaries":
            scoreEl.textContent = "71%";
            break;
        case "piscestaurus":
            scoreEl.textContent = "94%";
            break;
        case "piscesgemini":
            scoreEl.textContent = "50%";
            break;
        case "piscescancer":
            scoreEl.textContent = "92%";
            break;
        case "piscesleo":
            scoreEl.textContent = "83%";
            break;
        case "piscesvirgo":
            scoreEl.textContent = "74%";
            break;
        case "pisceslibra":
            scoreEl.textContent = "55%";
            break;    
        case "piscesscorpius":
            scoreEl.textContent = "96%";
            break; 
        case "piscessagittarius":
            scoreEl.textContent = "78%";
            break; 
        case "piscescapricornus":
            scoreEl.textContent = "73%";
            break; 
        case "piscesaquarius":
            scoreEl.textContent = "80%";
            break; 
        case "piscespisces":
            scoreEl.textContent = "92%";
            break;
    }
}


