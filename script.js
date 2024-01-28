const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
const learnMore=document.getElementsByClassName('learn-more');
const info=document.getElementsByClassName('learn-more-info');
function onLoadFunction() {
    let count = localStorage.getItem("productsCount");
    if (count) {
      document.querySelector(".cartAmount span").textContent = count;
    }
}
onLoadFunction();

if(bar){
    console.log("bat");
    bar.addEventListener('click',()=>{
        console.log("jygy");
       nav.classList.add('active');
    })
}
if(close){
    
    close.addEventListener('click',()=>{
       
       nav.classList.remove('active');
    })
}
let a=0;
let b=0;
let c=0;
let d=0;
let e=0
if(learnMore[0]!=undefined){learnMore[0].addEventListener('click',function(){
   
        if(a==0){
            info[0].innerHTML="<p> Lippan or mud-washing using materials locally available in the region like mixture of clay and camel dung keeps the interiors of the houses cool Though the work is limited mainly to the interior walls, it can be found on the outer walls as well. These scintillating murals bring life, gaiety, and beauty to generally harsh life of people of Kutch.</p>"
            return a=1;
        }
        else{
            info[0].innerHTML=" ";
            return a=0;
        }
})}
if(learnMore[1]!=undefined){learnMore[1].addEventListener('click',function(){
   
    if(b==0){
        info[1].innerHTML="<p> In art and applied art, craft, construction, and architecture, terracotta is the term normally used for earthenware objects that are sculpture or practical pieces such as flower pots, water and waste water pipes, roofing tiles, bricks, and surface embellishment in building construction.</p>"
        return b=1;
    }
    else{
        info[1].innerHTML=" ";
        return b=0;
    }
})}
if(learnMore[2]!=undefined){learnMore[2].addEventListener('click',function(){
   
    if(c==0){
        info[2].innerHTML="<p> The knots are square and form full-hitch and double half-hitches. The craft required only inexpensive and accessible materials like cotton twine, hemp, leather or yarn, with various beads used to enhance the piece.</p>"
        return c=1;
    }
    else{
        info[2].innerHTML=" ";
        return c=0;
    }
})}
if(learnMore[3]!=undefined){learnMore[3].addEventListener('click',function(){
   
    if(d==0){
        info[3].innerHTML="<p> Lippan or mud-washing using materials locally available in the region like mixture of clay and camel dung keeps the interiors of the houses cool Though the work is limited mainly to the interior walls, it can be found on the outer walls as well. These scintillating murals bring life, gaiety, and beauty to generally harsh life of people of Kutch.</p>"
        return d=1;
    }
    else{
        info[3].innerHTML=" ";
        return d=0;
    }
})}
if(learnMore[4]!=undefined){learnMore[4].addEventListener('click',function(){
   
    if(e==0){
        info[4].innerHTML="<p> Lippan or mud-washing using materials locally available in the region like mixture of clay and camel dung keeps the interiors of the houses cool Though the work is limited mainly to the interior walls, it can be found on the outer walls as well. These scintillating murals bring life, gaiety, and beauty to generally harsh life of people of Kutch.</p>"
        return e=1;
    }
    else{
        info[4].innerHTML=" ";
        return e=0;
    }
})}
   
