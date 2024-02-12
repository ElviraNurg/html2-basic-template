const toggleMin=document.querySelector('.toggle-min');
const toggleMax=document.querySelector('.toggle-max');

toggleMin.addEventListener('mouseover', function(){ 
    toggleMin.classList.add('toggle-min--hover')
})

toggleMin.addEventListener('mouseout', function(){  
    toggleMin.classList.contains('toggle-min--hover')&&
    toggleMin.classList.remove('toggle-min--hover')
})

toggleMax.addEventListener('mouseover', function(){   
    toggleMax.classList.add('toggle-max--hover')
})
toggleMax.addEventListener('mouseout', function(){
    toggleMax.classList.contains('toggle-max--hover')&&
    toggleMax.classList.remove('toggle-max--hover')
})

toggleMin.addEventListener('mousedown', function(){ 
    toggleMin.classList.add('toggle-min--active')
})
toggleMin.addEventListener('mouseup', function(){ 
    toggleMin.classList.contains('toggle-min--active')&&
    toggleMin.classList.remove('toggle-min--active')
})

toggleMax.addEventListener('mousedown', function(){ 
    toggleMax.classList.add('toggle-max--active')
})
toggleMax.addEventListener('mouseup', function(){ 
    toggleMax.classList.contains('toggle-max--active')&&
    toggleMax.classList.remove('toggle-max--active')
})
