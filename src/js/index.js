const rightButton = document.querySelector('.btn-right')
const leftButton = document.querySelector('.btn-left')
const cards = document.querySelectorAll('.card')
let position = 0

rightButton.addEventListener('click', nextCard)

function nextCard(){

    if(position == cards.length -1){
        return
    }
   removeSelected()
   position++
   addSelected()
}

function removeSelected(){
    const currentCard = document.querySelector('.selected')
    currentCard.classList.remove('selected')
}

function addSelected(){
    const nextCard = cards[position]
    nextCard.classList.add('selected')
}

leftButton.addEventListener('click', previousCard)

function previousCard(){
    if(position == 0){
        return
    }

    removeSelected()
    position--
    addSelected()
}