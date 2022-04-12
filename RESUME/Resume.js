let texts=['FreeLancer','Youtuber','Desgner'];
let elementCount=0;
let indexCount=0;


(function type(){
    let currentText="";
    let letter="";
    currentText=texts[elementCount];
    letter=currentText.slice(0,++indexCount);
    document.querySelector(".typing").textContent=letter;
    if(currentText.length === letter.length){
        elementCount++;
        indexCount=0;
    }
    if(elementCount === texts.length){
        elementCount=0;
    }
    setTimeout(type,500);
}());

let texts2=['FreeLancer','Youtuber','Desgner'];

let elementCount2=0;
let indexCount2=0;

(function type2(){
    let currentText2="";
    let letter2="";
    currentText2=texts2[elementCount2];
    letter2=currentText2.slice(0,++indexCount2);
    document.querySelector(".typing-2").textContent=letter2;
    if(currentText2.length === letter2.length){
        elementCount2++;
        indexCount2=0;
    }
    if(elementCount2 === texts2.length){
        elementCount2=0;
    }
    setTimeout(type2,500);
}());
