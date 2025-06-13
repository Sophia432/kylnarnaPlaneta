const intr = ["Готування - це мистецтво, яке починається з голоду.",
"Ідеальний рецепт - це інтуїція й любов.",
"У кулінарії немає помилок, є лише нові смаки.",
"У будь-якій незрозумілій ситувції краще поїсти.",
"Тобі не потрібна срібна виделка, щоб їсти добре.",
"Апетит приходить під час їжі - особливо, якщо їсте не ви",
""
]



 function randNumber(min, max){
        return Math.round(Math.random()*(max - min)  + min)
    }

let m = randNumber(0, 5)

let r = document.querySelector(".intr")



r.innerHTML = intr[m]


let day = document.querySelectorAll(".card")
let menu = document.querySelectorAll(".menu-item")
let main = document.querySelector(".main")
let sypu = document.querySelector(".sypu")
let card = document.querySelectorAll(".card")
let syp = document.querySelectorAll(".syp")
let salat = document.querySelectorAll(".salat")
let salatu = document.querySelector(".salatu")
let desertu = document.querySelector(".desertu")
let desert = document.querySelectorAll(".desert")
let vupichka2 = document.querySelector(".vupichka2")
let vupichka = document.querySelectorAll(".vupichka")
let napoi2 = document.querySelector(".napoi2")
let napoi = document.querySelectorAll(".napoi")
let t = document.querySelectorAll(".t")
let vi = document.querySelectorAll(".vi")
let o = document.querySelector("main")
let stril = document.querySelectorAll(".strilca")
let int = document.querySelector(".int")
let cen = document.querySelector(".cen")


menu[0].addEventListener('click', function(){
    salatu.style.display = "none"
    desertu.style.display = "none"
    vupichka2.style.display = "none"
    napoi2.style.display = "none"
    
    int.style.display = "none"
    cen.style.display = "none"

    for (let n = 0; n < card.length; n += 1){
        card[n].style.display = "none"
    }
    
    for(let m = 0; m < syp.length; m += 1){
        syp[m].style.display = "block"
    }

    sypu.style.display = "flex"
})


menu[1].addEventListener('click', function(){
    sypu.style.display = "none"
    desertu.style.display = "none"
    vupichka2.style.display = "none"
    napoi2.style.display = "none"

    int.style.display = "none"
    cen.style.display = "none"

    for (let n = 0; n < card.length; n += 1){
        card[n].style.display = "none"
    }
    
    for(let m = 0; m < salat.length; m += 1){
        salat[m].style.display = "block"
    }

    salatu.style.display = "flex"
})

menu[2].addEventListener('click', function(){
    salatu.style.display = "none"
    sypu.style.display = "none"
    vupichka2.style.display = "none"
    napoi2.style.display = "none"

    int.style.display = "none"
    cen.style.display = "none"

    for (let n = 0; n < card.length; n += 1){
        card[n].style.display = "none"
    }
    
    for(let m = 0; m < desert.length; m += 1){
        desert[m].style.display = "block"
    }

    desertu.style.display = "flex"
})


menu[3].addEventListener('click', function(){
    salatu.style.display = "none"
    desertu.style.display = "none"
    sypu.style.display = "none"
    napoi2.style.display = "none"

    int.style.display = "none"
    cen.style.display = "none"

    for (let n = 0; n < card.length; n += 1){
        card[n].style.display = "none"
    }
    
    for(let m = 0; m < vupichka.length; m += 1){
        vupichka[m].style.display = "block"
    }

    vupichka2.style.display = "flex"
})

menu[4].addEventListener('click', function(){
    salatu.style.display = "none"
    desertu.style.display = "none"
    vupichka2.style.display = "none"
    sypu.style.display = "none"

    int.style.display = "none"
    cen.style.display = "none"

    for (let n = 0; n < card.length; n += 1){
        card[n].style.display = "none"
    }
    
    for(let m = 0; m < napoi.length; m += 1){
        napoi[m].style.display = "block"
    }

    napoi2.style.display = "flex"
})

card[0].addEventListener('click', function(){
    o.style.display = "none"


    vi[0].style.display = "flex"
})

card[1].addEventListener('click', function(){
    o.style.display = "none"


    vi[1].style.display = "flex"
})

menu[5].addEventListener('click', function(){
    main.style.display = "block"   

    salatu.style.display = "none"
    desertu.style.display = "none"
    vupichka2.style.display = "none"
    sypu.style.display = "none"
    napoi2.style.display = "none"

})


card[2].addEventListener('click', function(){
    o.style.display = "none"

    vi[2].style.display = "flex"
})
