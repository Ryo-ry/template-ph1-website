'use strict';

{
const CORRECT_ANSWERS = [
    {
        index:1,
        value:'約79万人'
    },
    {
        index:2,
        value:'X-TECH'
    },{
        index:0,
        value:'Internet of Things'
    },{
        index:0,
        value:'Society 5.0'
    },{
        index:0,
        value:'Web3.0'
    },{
        index:1,
        value:'約5倍'
    },
] 
const allQuiz =document.querySelectorAll('.js-quiz');

const setDisabled = (answers) =>{
    //後ほどanswersの定義をする。
    answers.forEach(answer => {
        answer.disabled = true;
    });
}

const setTitle = (target,isCorrect) => {
    //targetは変数扱い？
    target.innerText = isCorrect ? '正解!': '不正解...';
}
const setClassname = (target,isCorrect)=>{
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
}


allQuiz.forEach(quiz =>{
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    //js-answerBoxは未対応の箇所あり（№１のみ対応）
    const answerTitle = quiz.querySelector('.js-answerTitle');
    //↓読み取られていない↓
    
    
    //ここら辺は未対応の箇所多し



    answers.forEach(answer =>{
        answer.addEventListener('click',()=>{
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        answerBox.classList.add('visible');
        setDisabled(answers);

        
        const answer_InnerText = answer.innerText
        
        //↓機能テスト↓
        console.log(answer_InnerText)
        if(selectedAnswer !== CORRECT_ANSWERS[selectedQuiz].index){
            console.log('no')
        }else{
            console.log('yes');
            answerBox.classList.add('visible__Correct')
            answerTitle.classList.add('changeColor')
        }
        //↑機能テスト↑

        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;
        console.log(selectedAnswer)

        //本当はconstで宣言したい...
        quiz.querySelector('.js-answerText').innerText = CORRECT_ANSWERS[selectedQuiz].value;

        setTitle(answerTitle,isCorrect);
        setClassname(answerBox,isCorrect);

        console.log(selectedAnswer)
        console.log(CORRECT_ANSWERS[selectedQuiz].index)
    })
    })
})








}




//行けるかもと思っているやり方。
//クイズをまずすべて取得、やり方のだいたいは一緒で
//クラス名にvisibleをつけるだけ、