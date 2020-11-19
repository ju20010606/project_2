const button = document.querySelector('.button')
const inputTitle = document.querySelector('.title')
const containerLeft = document.querySelector('.containerLeft')
const add = document.querySelector('.addToList')
const containerRight = document.querySelector('.containerRight')
const addTask = document.querySelector('.buttonAddTask')
const toDoList = document.querySelector('.todoList')
const bar = document.querySelector('.bar')
const barPercentage = document.querySelector('.barPercentage')
let task = 0
let done = 0


button.addEventListener('click',()=>{
    event.preventDefault()
    const h1 = document.createElement('h1')
    h1.innerText = inputTitle.value
    inputTitle.style.display = 'none'
    button.style.display = 'none'
   
    containerLeft.insertBefore(h1, containerLeft.children[1]);
})

add.addEventListener('click', ()=>{
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    h3.innerText = inputTitle.value
    h3.classList.add('itemTitle')
    div.classList.add('item')
    containerRight.append(div)
    div.append(h3)
})

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
        paragraph.classList.add('task')
        paragraph.innerText = newInput.value
        newDiv.append(paragraph)
        newDiv.style.display = 'block'
        newSubmit.style.display = 'none'
        newInput.style.display = 'none'
        paragraph.contentEditable = 'true'
        // const tasks = document.querySelectorAll('.task')
        // const doneTasks = document.querySelectorAll('.done ')
        // const percentage = (doneTasks.length/tasks.length)*100
         task++
     
        paragraph.addEventListener('click', ()=>{
            paragraph.style.textDecoration = 'line-through'
            paragraph.style.color = 'gray'
            paragraph.classList.add('done')
            const doneTasks = document.querySelectorAll('.done')
            done++
            let percentage = (done/task)*100
            console.log(percentage)
            bar.style.width = `${percentage.toFixed(1)}%`
            barPercentage.innerText = `${percentage.toFixed(1)}%`

        })
        
    })
})