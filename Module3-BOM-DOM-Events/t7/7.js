'use strict'

const hover = document.querySelector('p')
const target = document.getElementById('target')
hover.addEventListener('mouseover', function(evt) {
  target.src = "img/picB.jpg"
})
hover.addEventListener('mouseout', function(evt){
  target.src = "img/picA.jpg"
})