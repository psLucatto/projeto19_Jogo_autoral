var personagem 

var chão 

function preload(){

}

function setup() {
 createCanvas (600,600)
personagem = createSprite(200,545,50,50)

chão = createSprite(300,585,600,30)
}

function draw() {
 background("blue")
 if(keyIsDown(32)){
    personagem.y = personagem.y-10
 }
 drawSprites()
}