document.querySelector('footer').innerHTML = new Date().getHours() + ":"  + new Date().getMinutes()

//Class to standardize the tasks
class Task {
    constructor(text, datetime) {
        this.text = text
        this.datetime = datetime
    }
}

//Class var to hold all tasks
Task.list = []

//Check if there is a need to play the buzzer
const interval = setInterval(function() {
    for (let index in Task.list){
        let nowT = new Date()
        let thisTask = Task.list[index]
        if(thisTask.datetime < nowT){
            var audio = new Audio('beep.mp3')
            audio.play()
        }   
    }
}, 60000);


function create () {
    let text = document.getElementById('ttask')
    let hour = document.getElementById('ttime')

    //Check if the description and the due date are filled
    if(text.value == "" || hour.value == "") alert('Please, insert the task and the due time')
    else{
        //Creating the task in the user interface
        let item = document.createElement('div')
        item.setAttribute('class', 'element')

        let dateandtime = new Date(hour.value)
        let tasktext = text.value
        item.innerHTML = `<input type='checkbox'> ${tasktext} | ${dateandtime.getHours()}:${dateandtime.getMinutes()} | ${dateandtime.getDate()}/${dateandtime.getMonth() + 1}/${dateandtime.getFullYear()}`
        
        //Cleaning for the next task
        text.value = ""
        hour.value = ""
        text.focus()

        //Setting the task in the user interface
        let tasklist = document.querySelector('.tasklist')
        tasklist.appendChild(item)

        //Setting the task at the control list
        let newtask = new Task(tasktext, dateandtime)
        Task.list.push(newtask)
        console.log(Task.list)
    }
}