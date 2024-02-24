


let pitanja=[
    {
        
        pitanje:"Koji grad se smatra glavnim gradom SAD-a?",
        odgovori:[
            {tekst: "Washington, D.C.", tacnost:true},
            {tekst: "New York City", tacnost:false},
            {tekst: "Los Angeles", tacnost:false},
            {tekst: "Chicago", tacnost:false},
                ]
    },

    {
        
        pitanje:"Koja reka predstavlja prirodnu granicu između SAD-a i Meksika?",
        odgovori:[
            {tekst: "Misisipi", tacnost:false},
            {tekst: "Jukon", tacnost:false},
            {tekst: "Rio Grande", tacnost:true},
            {tekst: "Hudson", tacnost:false},
                ]
    },

    {
        
        pitanje:"Koliko država čini Sjedinjene Američke Države?",
        odgovori:[
            {tekst: "48", tacnost:false},
            {tekst: "50", tacnost:true},
            {tekst: "52", tacnost:false},
            {tekst: "49", tacnost:false},
                ]
    },

    {
        
        pitanje:"Koja je najviša planina u Sjedinjenim Američkim Državama?",
        odgovori:[
            {tekst: "Rocky Mountains", tacnost:false},
            {tekst: "Appalachian Mountains", tacnost:false},
            {tekst: "Mount McKinley (Denali)", tacnost:true},
            {tekst: "Sierra Nevada", tacnost:false},
                ]
    },

    {
        
        pitanje:"Ko je bio prvi predsednik Sjedinjenih Američkih Država?",
        odgovori:[
            {tekst: "Thomas Jefferson", tacnost:false},
            {tekst: "John Adams", tacnost:false},
            {tekst: "George Washington", tacnost:true},
            {tekst: "James Madison", tacnost:false},
                ]
    },

    {
        
        pitanje:"Ko je napisao Deklaraciju o nezavisnosti Sjedinjenih Američkih Država?",
        odgovori:[
            {tekst: "Thomas Jefferson", tacnost:true},
            {tekst: "Benjamin Franklin", tacnost:false},
            {tekst: "George Washington", tacnost:false},
            {tekst: "John Adams", tacnost:false},
                ]
    },

   

];



const element_pitanje = document.getElementById("Pitanje");
const dugme_odgovori=document.getElementById("odgovori")
const dugme_sledecepitanje=document.getElementById("next_dugme")

let index_pitanja=0;
let poeni=0;

function startkviz()
{
    index_pitanja=0;
    poeni=0;
    prikazi_pitanja();
    dugme_sledecepitanje.innerHTML="Sledece pitanje";
    dugme_sledecepitanje.classList.add("next-dugme")
}

function prikazi_pitanja()
{
    resetStanja();

    let tretutno_pitanje=pitanja[index_pitanja];
    let broj_pitanja=index_pitanja + 1;
    element_pitanje.innerHTML = broj_pitanja +". " +tretutno_pitanje.pitanje;
   
    tretutno_pitanje.odgovori.forEach(odgovor => {
        const dugme =document.createElement("button");
        dugme.innerHTML=odgovor.tekst;
        dugme.classList.add("dugme");
        dugme_odgovori.appendChild(dugme);

        if(odgovor.tacnost)
        {
            dugme.dataset.tacnost=odgovor.tacnost;
        }
        
        dugme.addEventListener("click",odabir_odgovora);

    });
}

function resetStanja()
{
    dugme_sledecepitanje.style.display = "none";
    while(dugme_odgovori.firstChild)
    {
        dugme_odgovori.removeChild(dugme_odgovori.firstChild)
    }
}

function odabir_odgovora(o)
{
    const izabrano_dugme=o.target;
    

    if(izabrano_dugme.dataset.tacnost)
    {
        izabrano_dugme.classList.add("tacno");
        poeni++;
    }
    else
    {
        izabrano_dugme.classList.add("netacno");
    }

    Array.from(dugme_odgovori.children).forEach(dugme => {
        if(dugme.dataset.tacnost =="true"){
            dugme.classList.add("tacno");
        }
        dugme.disabled =true;
    });
    dugme_sledecepitanje.style.display ="block";
}

function prikazi_poene()
{
    resetStanja();
    element_pitanje.innerHTML='Poena osvojeno '+ poeni + ' od 6';
    
    dugme_sledecepitanje.innerHTML ="Pokusaj ponovo";
    dugme_sledecepitanje.style.display="block";
}

function  sledecepitanje()
{
    index_pitanja++;
    if(index_pitanja<pitanja.length)
    {
        prikazi_pitanja();
    }
    else
    {
        prikazi_poene();
    }
}

dugme_sledecepitanje.addEventListener("click", ()=>{
    if(index_pitanja<pitanja.length)
    {
        sledecepitanje();
    }
    else{
        startkviz();
    }
})


startkviz();