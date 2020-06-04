fetch("http://api.github.com/users/joeyviolacode")
    .then( res => res.json())
    .then(buildCard)
    
function buildCard(user) {

    let headerTemplate = document.querySelector("#header-template").innerHTML
    let headerGenerator = _.template(headerTemplate)
    let headerTarget = document.querySelector(".header-box")
    let headerHTML = headerGenerator(user)
    headerTarget.innerHTML += headerHTML

    let cardTemplate = document.querySelector("#card-template").innerHTML
    let cardGenerator = _.template(cardTemplate)
    let cardTarget = document.querySelector(".display-box")
    let cardHTML = cardGenerator(user)
    cardTarget.innerHTML += cardHTML
}