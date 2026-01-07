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

// task stats
const stats = document.createElement('p')
stats.id = 'stats'
stats.textContent = 'Completed: 0/0'

// Put input & button into the form
form.appendChild(input)
form.appendChild(button)

//put everything into the app container
app.appendChild(form)
app.appendChild(error)
app.appendChild(ul)
app.appendChild(stats)

// form submit
form.addEventListener('submit', function (evt) {
  evt.preventDefault()

  const taskText = input.value.trim()

  // check for empty input
  if (taskText === '') {
    error.textContent = 'Please enter a task.'
    return
  }

  error.textContent = ''

  // create list item
  const li = document.createElement('li')

  // text for task
  const span = document.createElement('span')
  span.textContent = taskText

  // delete button
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.type = 'button'
  deleteButton.setAttribute('data-action', 'delete')

  li.appendChild(span)
  li.appendChild(deleteButton)

  //toggle complete state when clicked
  li.addEventListener('click', function (evt) {
    if (evt.target.dataset.action === 'delete') return

    li.classList.toggle('completed')
    updateStats()
  })

  // delete task when delete button is clicked
  deleteButton.addEventListener('click', function (evt) {
    evt.stopPropagation()

    const ok = window.confirm('Delete this task?')
    if (!ok) return

    li.remove()
    updateStats()
  })

  function updateStats() {
    const items = ul.querySelectorAll('li')
    let completed = 0

    items.forEach(function (item) {
      if (item.classList.contains('completed')) {
        completed++
      }
    })

    stats.textContent = `Completed: ${completed} / ${items.length}`
  }

  ul.appendChild(li)
  updateStats()

  // clear input
  input.value = ''
})

function updateStats() {
  const items = ul.querySelectorAll('li')
  let completed = 0

  items.forEach(function (item) {
    if (item.classList.contains('completed')) {
      completed++
    }
  })

  stats.textContent = `Completed: ${items.length}`
}
