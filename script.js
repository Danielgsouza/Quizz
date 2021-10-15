//Initial Data
let currentQuestion = 0
let correctAnswer = 0
let incorrectAnswer = 0
let progressBar = 0
showQuestion()

//Functions
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion]
        let pct = Math.floor((currentQuestion / questions.length) * 100)
        document.querySelector('.progress--bar').style.width = `${pct}%`
        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'
        document.querySelector('.question').innerHTML = q.question
        document.querySelector('.options').innerHTML = ''
        let optionsHtml = ''
        for(let i in q.options){
            optionsHtml += `<div class="option" data-option=${i}> <span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        })
      
    } else {
        //Acabou as questões
        score()
    }
}

function optionClickEvent(e) {
    let ans = parseInt(e.target.getAttribute('data-option'))
    let q = questions[currentQuestion]

    if (ans === q.answer) {
        console.log('Resposta correta')
        correctAnswer++
       
        console.log(correctAnswer)
    } else {
        console.log('resposta Incorreta')
        incorrectAnswer++
       
        console.log(incorrectAnswer)
    }
    currentQuestion++
    showQuestion()
    
}

function score() {
    let scorePct = ((correctAnswer / currentQuestion) * 100)
     
            document.querySelector('.questionArea').style.display = 'none'
            document.querySelector('.scoreArea').style.display = 'block'
            document.querySelector('.scorePct').innerHTML = `Acertou ${scorePct}%`
            document.querySelector('.scoreText2').innerHTML = `Você respondeu ${currentQuestion} questões e acertou ${correctAnswer}.`

            if (correctAnswer < 5) {
                document.querySelector('.scoreText1').innerHTML = 'Tá Ruim'
                document.querySelector('.scorePct').style.color = '#FF0000'
            }else if (correctAnswer >= 5 && correctAnswer < 7) {
                document.querySelector('.scoreText1').innerHTML = 'Muito Bom'
                document.querySelector('.scorePct').style.color = '#FFFF00'
            }else{
                document.querySelector('.scoreText1').innerHTML = 'Parabéns!'
                document.querySelector('.scorePct').style.color = '#0D630D'
               
            }

            document.querySelector('.progress--bar').style.width = `100%`

            document.querySelector('button').addEventListener('click', restart)
     
}

function restart() {
    currentQuestion = 0
    correctAnswer = 0
    incorrectAnswer = 0
    progressBar = 0
    showQuestion()
}
