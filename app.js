// $(document).ready(fucntion () {

// save function
$('.saveBtn').click(function () {
  let value = $(this).siblings(".description").val()
  console.log(value)

  let time = $(this).parents().attr("id")
  console.log(time)

  localStorage.setItem(time, value)

})




$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#1 .description").val(localStorage.getItem("1"))
$("#2 .description").val(localStorage.getItem("2"))
$("#3 .description").val(localStorage.getItem("3"))
$("#4 .description").val(localStorage.getItem("4"))
$("#5 .description").val(localStorage.getItem("5"))










// Display the current date on the page
$('#currentDay').text(`
  Today is ${moment().format('dddd, [the] Do [of] MMMM, YYYY')}
  `)


let plan = []



let currentTime = moment().format('h')
// console.log(currentTime)

let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]
let currentIndex = hours.indexOf(parseInt(currentTime))
// console.log(currentIndex)

// Determines if times are in the past, present, or future
for (let i = 0; i < hours.length; i++) {
  if (i < currentIndex) {
    $(`#hour-${hours[i]}`).addClass('past')
  } else if (i > currentIndex) {
    $(`#hour-${hours[i]}`).addClass('future')
  } else {
    $(`#hour-${hours[i]}`).addClass('present')
  }
}

  // $('.saveBtn').click(() => {
  //   console.log('save')
  //   plan.push($('#4'.value))
  //   console.log
  //   localStorage.setItem('plan', JSON.stringify(plan))
  //   console.log(plan)
  // })




// })