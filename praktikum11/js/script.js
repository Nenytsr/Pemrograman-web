document.querySelectorAll("a").forEach((a)=>{
    //jika diklik akan menjalanjakn fungsi computerChoice()
    a.addEventListener("click",(element)=>{
        computerChoice(element);
    })
        
})
function computerChoice(element){
    //pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    //membuat pilihan komputer dengan array
    let choices = ["Rock","paper","scissors"];

    //pilihan computer secara random
    pilihanKomputer.innerHTML =choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //jika pilihan user == pilihan komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
        setTimeout(()=>alert("DRAW"),300);
    }

    //jika pilihan komputer menang
    if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        // alert("Komputer WIN")
        setTimeout(()=>alert("Komputer WIN"),300);
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        // alert("Komputer WINN");
        setTimeout(()=>alert("Komputer WINN"),300);
    }else if(pilihanKomputer == "Scissor" && pilihanUser == "Paper"){
        // alert("Komputer WINNN");
        setTimeout(()=>alert("Komputer WINNN"),300);
    }

    //jika pilihan user menang
    if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        // alert("User WIN");
        setTimeout(()=>alert("User WIN"),300);
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        // alert("User WINN");
        setTimeout(()=>alert("User WINN"),300);
    }else if(pilihanUser == "Scissor" && pilihanKomputer == "Paper"){
        // alert("User WINNN");
        setTimeout(()=>alert("User WINNN"),300);

        }
    }
    


















        
