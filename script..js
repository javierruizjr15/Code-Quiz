let count = 75;
let slidenum = 0;
let points = 0;


let questionarray = [
  // lets see what this div class looks like for button, might have to change this
  // here is Q1
  `<h2>Question 1</h2>
<h6>Here is ? 1</h6>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle corrrect next ">A1</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A2</button>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A3</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A4</button>
  </div>`,

  // here is Q2
  `<h2>Question 2</h2>
<h6>Here is ? 2</h6>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle corrrect next ">A1</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A2</button>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A3</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A4</button>
  </div>`,

  // here is Q3
  `<h2>Question 3</h2>
<h6>Here is ? 3</h6>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle corrrect next ">A1</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A2</button>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A3</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A4</button>
  </div>`,

  // here is Q4
  `<h2>Question 4</h2>
<h6>Here is ? 4</h6>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle corrrect next ">A1</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A2</button>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A3</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A4</button>
  </div>`,

  // here is Q5
  `<h2>Question 5</h2>
<h6>Here is ? 5</h6>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle corrrect next ">A1</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A2</button>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A3</button>
    <button type="button" class="btn btn-deep-purple btnstyle wrong next ">A4</button>
  </div>`,

]

let initialarray = [

  `<h1>Game Over!</h1>
    <div>
      <form>
        <label for="initials">Initials</label>
        <input type="text" id="initials">
        <button type="button" class="btn btn-deep-purple btnstyle" id="submit">Submit</button>
      </form>
    </div>

    <hr></hr>

    <p>Your score is:</p>`,

  `<h1>High Scores</h1>`

]

document.getElementById('start').addEventListener('click', () => {
  setInterval(() => {
    if (count > 0) {
      count--
      document.getElementById('timer').innerHTML = `Time: ${count} secs`
    }
    else {

      finalScore = points + count

      document.getElementById('carddiv').innerHTML =

        `<h1>Time up!</h1>
          <div>
            <form>
              <label for="initials">Initials</label>
              <input type="text" id="initials">
                <button type="button" class="btn btn-deep-purple btnstyle" id="submit">Submit</button>
            </form>
          </div>

          <hr></hr>

          <p>Points: ${points}</p>

          <p>Time left: ${count}</p>

          <p>Final score: ${finalScore}</p>`
    }
  }, 1000);

  // 

  document.getElementById('carddiv').innerHTML = questionarray[slidenum]

  document.addEventListener('click', event => {

    if (event.target.classList.contains('next')) {

      if (slidenum < (questionarray.length)) {
        slidenum++
        console.log(slidenum)

        document.getElementById('carddiv').innerHTML = questionarray[slidenum]

        if (event.target.classList.contains('wrong')) {

          count = count - 15
        }

        if (event.target.classList.contains('correct')) {
          points += 5
        }
      }

      if (slidenum > (questionarray.length - 1 || count <= 0){

        console.log(points, count)

        finalScore = points + count

        console.log(finalScore)

        document.getElementById('carddiv').innerHTML = 

        <h1>Game Over!!</h1>
          <div>
            <form>
              <label for="initials">Initials</label>
              <input type="text" id="initials">
              <button type="button" class="btn btn-deep-purple btnstyle" id="submit">Submit</button>
            </form>
          </div>

          <hr></hr>

          <p>Points: ${points}</p>

          <p>Time left: ${count}</p>

          <p>Final score: ${finalScore}</p>


          
          
          
        }
        
      })



  })
