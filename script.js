//me
document.querySelector('#sports').addEventListener('click', function(e){
    e.target.style.color = 'blue'
})

//teacher
// document.querySelector('#sports').addEventListener('click', function(e){
//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'pink'
//     }
// })
const sports = document.querySelector('#sports')
const newSport = document.createElement('li')
newSport.innerText = 'rugby'
newSport.setAttribute('id', 'rugby')
sports.appendChild(newSport)