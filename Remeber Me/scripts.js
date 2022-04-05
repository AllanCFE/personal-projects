document.querySelector('footer').innerHTML = new Date().getHours() + ":"  + new Date().getMinutes()

/*
const interval = setInterval(function() {
    
}, 60000);
*/

function create () {
    let text = document.getElementById('ttask')
    let hour = document.getElementById('ttime')

    if(text.value == "" || hour.value == "") alert('Please, insert the task and the due time')
    else{
        let item = document.createElement('div')
        item.setAttribute('class', 'element')
        item.innerHTML = `<input type='checkbox'> ${text.value} | ${hour.value}`
        
        text.value = ""
        hour.value = ""
        text.focus()

        let tasklist = document.querySelector('.tasklist')
        tasklist.appendChild(item)

        if (hour.value <= new Date().getHours) console.log('oi')
        else console.log('by')
    }
}