let arr=[
    {
        dp:"https://images.unsplash.com/photo-1566915189815-b72e74007040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        story:"https://images.unsplash.com/photo-1551860863-d98db3dbbee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1601313956242-05c59bc1251c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        story:"https://images.unsplash.com/photo-1620770175211-08191dfcf05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1608169941368-fd7ac986ac3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        story:"https://images.unsplash.com/photo-1612913736596-4ea103f403b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        story:"https://images.unsplash.com/photo-1599847022902-f64cc1ae97fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
    },
]
let storiya=document.querySelector("#stories")
let clutter=""
arr.forEach(function(elem,idx){
clutter +=`<div class="story">
<img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiya.innerHTML=clutter;


storiya.addEventListener("click",function(dets){
    document.querySelector("#full-scrn").style.display="block";
    document.querySelector("#full-scrn").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-scrn").style.display="none";

    },1000)
})