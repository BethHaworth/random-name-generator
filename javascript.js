var names = [
    "Beth",
    "Alex",
    "Boris",
    "George"
]
function newName() {
    var randomNumber = Math.floor(Math.random() * (names.length))
    document.getElementById('nameDisplay').innerHTML = names[randomNumber];
}