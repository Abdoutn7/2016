function time()
{
    new Date().getFullYear()

    document.getElementById("year").value=ch;
}
function verif1(){
    days=document.getElementById("days").value;
    mois=document.getElementById("mois").value;
    piece=document.getElementById("piece").selectedIndex;
    salle=document.getElementById("salle").selectedIndex;
    if(piece==0){
        alert("choix obligatoire de piece")
    }
    if(salle==0){
        alert("choix obligatoire de salle")
    }
    if(mois==1mois==3mois==5mois==7mois==8mois==10mois==12){
        if(days<1days>31){
            alert("days incorect")
        }
    }
    if(mois==4mois==6mois==9mois==11){
        if(days<1days>30){
            alert("days incorect")
        }
    } 
    if(moin==2 && year%4==0){
        if(days<1 days>29){
            alert("le date est incorrect")
        }
    }
    if(moin==2 ){
        if(days<1 ||days>28){
            alert("le date est incorrect")
        }
    }


}