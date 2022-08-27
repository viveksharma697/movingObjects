const questions = [{
    'que' : 'On which date Indians celebrate their Independance Day ?',
    'a' : '26th Jan',
    'b' : '15th Aug',
    'c' : '25th Dec',
    'd' : '15th April',
    'correct' : 'b',

},
{
'que' : 'Which country have largest area in the world ?',
'a' : 'China',
'b' : 'Canada',
'c' : 'Russia',
'd' : 'U.S.A.',
'correct' : 'c',

},
{
    'que' : 'Who is the current Prime Minister in India ?',
    'a' : 'Narendra Modi',
    'b' : 'L. K. Adwani',
    'c' : 'Manmohan Singh',
    'd' : 'Sonia Gandhi',
    'correct' : 'a',
    
    }

]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
  if (index === total){
    return endQuiz()
  }
    reset()
    const data = questions[index];
    console.log(data);
     quesBox.innerText = `${index+1}) ${data.que}`;
     optionInputs[0].nextElementSibling.innerText = data.a;
     optionInputs[1].nextElementSibling.innerText = data.b;
     optionInputs[2].nextElementSibling.innerText = data.c;
     optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
    
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
            
        }
    )
    
}

const endQuiz = () => {
    if (right != total){
        document.getElementById("box").innerHTML = `<h1>Sorry...!!! <br><br>You Lost</h1><br><br><br>
        <h2> ${right} / ${total} are correct...</h2>`;
        
    } else {
        document.getElementById("box").innerHTML = `<h1>Congratulations...!!! <br> <br>  You Won...</h2><br> <br><br>
        <h2> ${right} / ${total} are correct...</h2>`;
    }
}

loadQuestion();