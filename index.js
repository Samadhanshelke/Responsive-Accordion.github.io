const openBox = document.querySelectorAll(".box");
const labels = document.querySelectorAll(".label");
for(let i=0;i<labels.length;i++){
    labels[i].addEventListener('click',function(){
         for(let j=0;j<openBox.length;j++){
          if(i==j){
            openBox[j].classList.toggle("active");
          }
          else{
            openBox[j].classList.remove("active");
          }
         }
    });   
}
