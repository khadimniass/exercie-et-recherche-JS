const buttons=document.querySelectorAll("button");
    for (let i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click",function (){
          const joueur=buttons[i].innerHTML;
          const robot=buttons[Math.floor(Math.random()*buttons.length)].innerHTML;

          let result='';
          console.log(`Joueur :${joueur} vs Robot : ${robot}`);
        });
    }