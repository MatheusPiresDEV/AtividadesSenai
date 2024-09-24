function changeImage(){
    const html = document.documentElement
    html.classList.toggle("light")

    var imagem = document.querySelector("#profile")
    var dt = document.getElementById("data")
    var paragraph = document.getElementById("p")
    var gender = document.getElementById("gender")

    var registro = new Date()
    dt = registro

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "https://mrwallpaper.com/images/hd/cool-smiley-profile-picture-6lqzc2aegkuxbini.jpg")
        paragraph.style.color = "lightgreen"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent = "Homem"
    }else{
        imagem.setAttribute("src", "https://i1.sndcdn.com/artworks-GjzEpne671a18Vm5-TkB41w-t500x500.jpg")
        paragraph.style.color = "lightpink"
        document.getElementById("data").textContent = formatarData(dt)
        gender.textContent = "Mulher"
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    return item.toLocaleString("pt-BR", options)
}