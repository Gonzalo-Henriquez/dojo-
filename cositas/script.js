var borrarImg = document.getElementById("btn1");
borrarImg.addEventListener("click",function(){
    var img= document.querySelector("#imagen");
    var txt= document.querySelector("#txt");
    console.log(img);
    img.remove()
    txt.innerText="¡MAGIA!"

    return console.log("lo logramos gente")
});
