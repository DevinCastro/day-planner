// first we use the jQuery ready funstion to make sure the HTML renders first before the javasript does anything.
$(document).ready(function () {

  // Display the current date on the page first! Use the moment.js libraary to form the current time and date to my chosing
  $('#currentDay').text(`
    Today is ${moment().format('dddd, [the] Do [of] MMMM, YYYY')}
  `)


  // ===========================================

  // Create the currentTime variable and set it equal to the current hour of the day with momentjs library
  let currentTime = moment().format('h')
  // console.log(currentTime)

  // now we create an array of the possible hours in our planner so we can loop over it
  let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

  // find the current hour and turn it into an integer, then find the corresponding index of that number in the hours array and set it equal to a new variable call currentIndex
  let currentIndex = hours.indexOf(parseInt(currentTime))


  // Determines if times are in the past, present. 
  for (let i = 0; i < hours.length; i++) {


    // if the i'th interation is less than the current index then take the textarea element with the corresponding id and add the 'past' class to it.
    // if it is greater than the currentIndex, then add the 'future' class
    // otherwise it must be the current hour so add the 'present' class
    if (i < currentIndex) {
      $(`#text${hours[i]}`).addClass('past')
    } else if (i > currentIndex) {
      $(`#text${hours[i]}`).addClass('future')
    } else {
      $(`#text${hours[i]}`).addClass('present')
    }
  }

  // ===========================================

  // Now lets listen for a click on ANY of the save buttons (since they all have the .saveBtn class) and then execute the following function
  $('.saveBtn').click(function () {

    // create a variable called value.  We are finding one of "this's" siblings.  The siblings function allows us to find another element within this time-block div and locate it by another attribute.  So we find the other element with the class called description.  In this case, that is the textarea elemtemt, and then we grab it's value and set it equal to the varaible 'value'
    let value = $(this).siblings(".description").val()


    // Create a variable called time.  Now we find "this's" parent's ID which will be the hour of timeblock that we clicked the save button in! assign this value to 'time'
    let time = $(this).parents().attr("id")


    // now set this values in the local storage in a key pair!
    localStorage.setItem(time, value)
  })



  // ===========================================



  // grab all the key pairs out of the local storage for each time block and put those items into the text area element
  $("#text9").val(localStorage.getItem("9"))
  $("#text10").val(localStorage.getItem("10"))
  $("#text11").val(localStorage.getItem("11"))
  $("#text12").val(localStorage.getItem("12"))
  $("#text1").val(localStorage.getItem("1"))
  $("#text2").val(localStorage.getItem("2"))
  $("#text3").val(localStorage.getItem("3"))
  $("#text4").val(localStorage.getItem("4"))
  $("#text5").val(localStorage.getItem("5"))

})