let elem=document.querySelectorAll(".elem");
// let elimg=document.querySelector("#elem1 img")

// el1.addEventListener("mousemove",function(dets){
//     elimg.style.left=dets.x+"px"
//     elimg.style.top=dets.y+"px"
// })
// el1.addEventListener("mouseenter",function(dets){
//     elimg.style.opacity=1
    
// })
// el1.addEventListener("mouseleave",function(dets){
//     elimg.style.opacity=0
    
// })

elem.forEach(function(val){

val.addEventListener("mouseenter",function(){
  val.childNodes[3].style.opacity=1
});
val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
})
val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    // val.childNodes[3].style.top=dets.y+"px"
})

})