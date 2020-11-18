const body = document.querySelector('body')
const toDoList = document.querySelector('.todoList')
const input = document.querySelector('input')
const addTask = document.querySelector('.buttonAddTask')
const addEventButton = document.querySelector('.addEvent')
const newEvent = document.querySelector('.newEvent')
const calendar = document.querySelector('.calendar')
const nav = document.querySelector('nav')
const buttons = document.querySelectorAll('.buttons')
const paragraphs = document.querySelectorAll('p')
const complete = document.querySelector('.complete')
const addNewEvent = document.querySelector('.addNewEvent')
const date = document.querySelector('.date')
const calendarNumbers = document.querySelectorAll('.calendarNumber')
const title = document.querySelector('.title')
const colorBar = document.querySelector('.colorBar')




addTask.addEventListener('click', () =>{ 
     let newDiv = document.createElement('div')
     newDiv.classList.add('circle')
     newDiv.style.display = 'none'
     toDoList.append(newDiv)
     let newInput = document.createElement('input')
     newInput.placeholder ='New Task'
     newInput.classList.add('taskText')
     let newSubmit = document.createElement('input')
     newSubmit.classList.add('taskButton')
     newSubmit.type = 'submit';
     toDoList.append(newInput, newSubmit)
     
     
     newSubmit.addEventListener('click', ()=>{
          let paragraph =  document.createElement('p')
          paragraph.innerText = newInput.value
          newDiv.append(paragraph)
          newDiv.style.display = 'block'
          newSubmit.style.display = 'none'
          newInput.style.display = 'none'
          paragraph.contentEditable = 'true'
          
          complete.addEventListener('click',()=>{
               paragraph.style.textDecoration = 'line-through'
               paragraph.style.color = 'gray'
          })
          
          // paragraph.addEventListener('click',()=>{
          //      paragraph.style.textDecoration = 'line-through'
          //      paragraph.style.color = 'gray'
          //      newDiv.style.backgroundColor = 'gray'
          // })
          
          // paragraph.addEventListener('mouseover',()=>{
          //      complete.style.display = 'inline-block'
          // })

          // paragraph.addEventListener('click', ()=>{
          //      paragraph.style.textDecoration = 'line-through'
          //      paragraph.style.color = 'gray'
          // })

          // paragraph.addEventListener('mouseout',()=>{
          //      complete.style.display = 'none'

          // })
     })
     
})

addEventButton.addEventListener('click',()=>{
     toDoList.style.filter = 'blur(5px)'
     newEvent.style.display='inline-block'
     calendar.style.filter = 'blur(5px)'
     nav.style.filter = 'blur(5px)'
     buttons[0].style.filter = 'blur(5px)'
     buttons[1].style.filter = 'blur(5px)'
     buttons[2].style.filter = 'blur(5px)'
     buttons[3].style.filter = 'blur(5px)'
    
})

addNewEvent.addEventListener('click', ()=>{
const value = date.value
var object = new Date (value)
var day = (object.getDate()) + 1

calendarNumbers.forEach(element =>{
     if(element.innerHTML == day){
         square = document.getElementById(`${day}`)
          let p = document.createElement('p')
          // let div = document.createElement('div')
          // div.classList.add('color')
          // div.style.display = 'inline-block'
          // div.style.backgroundColor = colorBar.value

          p.style.color = colorBar.value
          p.style.fontFamily ='Open Sans, sans-serif'
          p.style.fontSize = '10px'
          p.innerText = title.value

          square.append(p)
     }else{
         
     }
})


toDoList.style.filter = 'none'
newEvent.style.display='none'
calendar.style.filter = 'none'
nav.style.filter = 'none'
buttons[0].style.filter = 'none'
buttons[1].style.filter = 'none'
buttons[2].style.filter = 'none'
buttons[3].style.filter = 'none'

     


})






// circles[1].addEventListener('mouseover', () =>{ 
//      circles[1].style.backgroundColor = 'white';
// })
// circles[2].addEventListener('mouseover', () =>{ 
//      circles[2].style.backgroundColor = 'white';
// })
// circles[3].addEventListener('mouseover', () =>{ 
//      circles[3].style.backgroundColor = 'white';
// })
// circles[4].addEventListener('mouseover', () =>{ 
//      circles[5].style.backgroundColor = 'white';
// })
// circles[6].addEventListener('mouseover', () =>{ 
//      circles[6].style.backgroundColor = 'white';
// })
// circles[7].addEventListener('mouseover', () =>{ 
//      circles[7].style.backgroundColor = 'white';
// })
// circles[8].addEventListener('mouseover', () =>{ 
//      circles[8].style.backgroundColor = 'white';
// })
// circles[9].addEventListener('mouseover', () =>{ 
//      circles[9].style.backgroundColor = 'white';
// })
// circles[10].addEventListener('mouseover', () =>{ 
//      circles[10].style.backgroundColor = 'white';
// })
// circles[11].addEventListener('mouseover', () =>{ 
//      circles[11].style.backgroundColor = 'white';
// })
// circles[12].addEventListener('mouseover', () =>{ 
//      circles[12].style.backgroundColor = 'white';
// })

