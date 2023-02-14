'use strict';

{
    const ALL_QUIZ = [
        {
        id:1,
        question:'日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        answers:['約28万人','約79万人','約183万人'],
        correctNumber:1,
        note:'経済産業省 2019年3月 － IT 人材需給に関する調査',
        },
        {
        id: 2,
        question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
        correctNumber: 2,
        },
        {
        id: 3,
        question: 'IoTとは何の略でしょう？',
        answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
        correctNumber: 0,
        },
        {
        id: 4,
        question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        answers: ['Society 5.0', 'CyPhy', 'SDGs'],
        correctNumber: 0,
        note: 'Society5.0 - 科学技術政策 - 内閣府'
        },
        {
        id: 5,
        question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        answers: ['Web3.0', 'NFT', 'メタバース'],
        correctNumber: 0,
        },
        {
        id: 6,
        question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        answers: ['約2倍', '約5倍', '約11倍'],
        correctNumber: 1,
        note: 'Accenture Technology Vision 2021'
        }
    ];

    //↓IDタグ、未だhtmlに付与していない。
    const quizContainer = document.getElementById('js-quizContainer');
    const createQuizHtml = (quizItem,questionNumber) =>{
    
        const answerHtml = quizItem.answers.map((answer,answerIndex)=>
        `<div class="quiz__answer__text">
        <button type="button" class="js-answer" data-answer="${answerIndex}">
            <div>${answer}</div>
            <div><img src="../img/icon/icon-arrow.svg" alt=""></div>
        </button></div>`).join('');


        





         //引用テキストの作成,三項演算子の復習したい
    const noteHtml = quizItem.note ?   `<div class="quiz__quote js-answerBox">
    <div>
        <img src="../img/icon/icon-note.svg" alt="帽子アイコン" class="cap__p">
    </div>
    <div>
        ${quizItem.note}
    </div>
    </div> `:'';
    return `<section class="quiz__section js-quiz" data-quiz="${questionNumber}">
    <div>
        <div class="quiz__Qx">
            <p>Q${questionNumber + 1}</p>
        </div>
        <div class="quiz__text">
            <p>${quizItem.question}</p>
        </div>
        <div class="quiz__img__frame">
            <img src="../img/quiz/img-quiz0${quizItem.id}.png" alt="ヒトの割合の画像" class="quiz__images">
        </div>
    </div>
    <div >
        <div class="quiz__answer_A">
            <p>A</p>
        </div>
        <div class="quiz__answer__text">
            ${answerHtml}
        </div>
        <div class="p__Q js-answerBox">
            <p class="js-answerTitle"></p>
            <p class="answerText__change">
                <span class="Text_A">A</span>
                <span class="js-answerText"></span>
            </p>
        </div>
    </div>
    ${noteHtml}
</section>`
}
//以下自分のコード




//ランダム配列
const shuffle = arrays =>{
    const array = arrays.slice();
    for(let i = array.length -1;i >=0;i--){
        const randomIndex = Math.floor(Math.random()*(i+1));
        [array[i],array[randomIndex]] = [array[randomIndex],array[i]];
    }
    return array
}


const quizArray = shuffle(ALL_QUIZ)

quizContainer.innerHTML = quizArray.map((quizItem,index)=>{
    return createQuizHtml(quizItem,index)
}).join('')

    
}
