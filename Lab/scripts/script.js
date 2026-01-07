const app = document.getElementById('app')

// Create form
const form = document.createElement('form')
form.id = 'task-form'

// Create input
const input = document.createElement('input')
input.id = 'task-input'
input.type = 'text'
input.placeholder = 'Type a task'
input.required = true
input.minLength = 2

//Create button
const button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Add'

//Error message
const error = document.createElement('p')
error.id = 'error'

//Tast list
const ul = document.createElement('ul')
ul.id = 'task-list'

// Put input & button into the form
form.appendChild(input)
form.appendChild(button)

//put everything into the app container
app.appendChild(form)
app.appendChild(error)
app.appendChild(ul)

form.addEventListener('submit', function (evt) {
  evt.preventDefault()

  const taskText = input.value.trim()

  if (taskText === '') {
    error.textContent = 'Please enter a task.'
    return
  }

  error.textContent = ''

  const li = document.createElement('li')
  li.textContent = taskText

  li.addEventListener('click', function () {
    li.classList.toggle('completed')
  })

  ul.appendChild(li)

  input.value = ''
})
