<template>
  <div class="quiz-main">
    <h1 class="quiz-app-header">
        {{headerText}}
    </h1>
    <ul v-if="!isFinished" class="numbers-of-questions">
        <li v-for="(item,i) in questions" :key="'questionNumber'+i" :class="currentQuestionNumber === i ? 'current-question-number': currentQuestionNumber > i ? 'passed-question-number' : '' + 'question-number'">
            {{i+1}}
        </li>
    </ul>
    <div class="question-content-wrapper">
        <div v-if="!isFinished" class="question-content">
            <div class="question">
                {{currentQuestionNumber+1}}) {{getQuestion}}
            </div>
            <div class="question-options-wrapper">
                <div v-for="(item,i) in getQuestionOptions" :key="'questionOption'+i" @click="selectOption(item,i)" :class="['question-option', (currentSelectedOptionIndex === i ? 'selected-question-option': ''), (!isCanSelect ? 'disabled' : '')]">
                    <div class="option">{{options[i]}}</div> - <div class="answer">{{item}}</div>
                </div>
            </div>
            <div @click="goNextQuestion" :class="!currentSelectedOptionIndex && currentSelectedOptionIndex!==0 ? 'disabled-next-question' : '' + ' next-question'">
                {{getButtonText}}
            </div>
            <div class="question-timer">
                {{getQuestionTime}}
            </div>
            <div class="mobile-current-question">
                Question {{currentQuestionNumber+1}}/{{questionNumbers}}
            </div>
        </div>
        <div v-else class="quiz-app-result-wrapper">
            <table  class="quiz-app-result">
                <tr class="quiz-result-questions">
                    <th class="quiz-result-header">
                        Questions
                    </th>
                    <td v-for="(item,i) in result" :key="'resultQuestionNumber'+i" class="quiz-result-item numbers">
                        {{item.questionNumber}}
                    </td>
                </tr>
                <tr class="quiz-result-questions">
                    <th class="quiz-result-header">
                        Answers
                    </th>
                    <td v-for="(item,i) in result" :key="'resultQuestionNumber'+i" class="quiz-result-item">
                        {{item.option || 'X'}}
                    </td>
                </tr>
            </table>
        </div>
        <div v-if="result.length > 0" class="confirm-button-wrapper">
            <div @click="confirmResult" class="confirm-button">
                Confirm
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {getQuestions} from '@/api/axios'
export default {
    data(){
        return{
            headerText : 'Quiz App',
            options:['A','B','C','D'],
            questionNumbers:10,
            questions:[],
            currentQuestionNumber:0,
            currentSelectedOptionIndex:undefined,
            currentQuestionMap:undefined,
            isFinished:false,
            result:[],
            interval:undefined,
            questionTime:0,
            questionTotalTime:30,
            isCanSelect:false,
        }
    },
    computed:{
        getQuestion(){
            if(this.questions.length > 0){
                let str = this.questions[this.currentQuestionNumber]?.title + ' ?' || 'Question Not Found'
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            return ''
        },
        getQuestionOptions(){
            if(this.questions.length > 0)
                return this.questions[this.currentQuestionNumber].body.split('\n').map(e=>{
                    return e.charAt(0).toUpperCase() + e.slice(1);
                }).slice(0,4);
            
            return [];
        },
        getButtonText(){
            if(this.currentQuestionNumber === this.questionNumbers-1){
                return 'Finish'
            }
            return 'Next'
        },
        getQuestionTime(){
            if(this.questionTotalTime - this.questionTime < 10){
                return '00:0' + (this.questionTotalTime - this.questionTime)
            }
            return '00:' + (this.questionTotalTime - this.questionTime)
        }
    },
    methods:{
        questionTimer(){
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                
                if(this.questionTime === this.questionTotalTime){
                    if(this.currentQuestionNumber === this.questionNumbers-1){
                        this.questionTime=0;
                        this.goNextQuestion();
                    }
                    else{
                        this.goNextQuestion();
                    }
                    
                }else{
                    if(!this.isCanSelect && this.questionTime >= 9){
                        this.isCanSelect = true;
                    }
                    this.questionTime++;

                }
                window.localStorage.setItem('currCount',this.questionTime.toString())
            }, 1e3);
        },
        selectOption(item,index){
            this.currentQuestionMap = {
                option:this.options[index],
                answer:item,
                questionNumber:this.currentQuestionNumber+1
            }
            this.currentSelectedOptionIndex = index;
        },
        goNextQuestion(){
            if(((this.currentSelectedOptionIndex || this.currentSelectedOptionIndex === 0) && this.currentQuestionMap && this.currentQuestionNumber < this.questionNumbers-1) || this.questionTime === this.questionTotalTime){
                if(!JSON.parse(window.localStorage.getItem('quizResult')) || JSON.parse(window.localStorage.getItem('quizResult'))?.length < 10){
                    if(!this.currentSelectedOptionIndex && this.currentSelectedOptionIndex !== 0){
                        this.currentQuestionMap = {
                            option:'',
                            answer:'',
                            questionNumber:this.currentQuestionNumber+1
                        }
                    }
                }
                this.isCanSelect = false;
                let quizResults = []
                if(window.localStorage.getItem('quizResult')){
                    quizResults = JSON.parse(window.localStorage.getItem('quizResult'));
                }
                quizResults.push(this.currentQuestionMap)
                window.localStorage.setItem('quizResult',JSON.stringify(quizResults));
                this.currentSelectedOptionIndex = undefined;
                this.currentQuestionMap = undefined;
                this.currentQuestionNumber++;
                this.questionTime = 0;
                clearInterval(this.interval);
                this.questionTimer();
            }
            else{
                if(!JSON.parse(window.localStorage.getItem('quizResult')) || JSON.parse(window.localStorage.getItem('quizResult'))?.length < 10){
                    if(!this.currentSelectedOptionIndex && this.currentSelectedOptionIndex !== 0){
                        this.currentQuestionMap = {
                            option:'',
                            answer:'',
                            questionNumber:this.currentQuestionNumber+1
                        }
                    }
                }
                let quizResults = []
                if(window.localStorage.getItem('quizResult')){
                    quizResults = JSON.parse(window.localStorage.getItem('quizResult'));
                }
                quizResults.push(this.currentQuestionMap);
                window.localStorage.setItem('quizResult',JSON.stringify(quizResults));
                this.isFinished = true;
                let resultArr = JSON.parse(window.localStorage.getItem('quizResult'));
                this.currentSelectedOptionIndex = undefined;
                this.currentQuestionMap = undefined;
                this.currentQuestionNumber++;
                this.questionTime = 0;
                this.headerText = 'Quiz App Results'
                clearInterval(this.interval);

                this.result = resultArr;
            }
        },
        confirmResult(){
            window.localStorage.removeItem('questionNumbers');
            window.localStorage.removeItem('quizResult');
            window.localStorage.removeItem('currCount');
            window.location.reload();
            this.isFinished = false;
            this.currentQuestionNumber = 0;
            this.questions = [];
            this.currentSelectedOptionIndex = undefined;
            this.currentQuestionMap = undefined;
            this.headerText = 'Quiz App'
        }
    },
    mounted(){
        getQuestions().then(res=>{
            if(window.localStorage.getItem('quizResult') && JSON.parse(window.localStorage.getItem('quizResult')).length === this.questionNumbers) return false;

            if(window.localStorage.getItem('questionNumbers')){
                let questionNumbersArr = JSON.parse(window.localStorage.getItem('questionNumbers'));
                questionNumbersArr.forEach((number,i)=>{
                    this.questions.push(res.find(e=>e.id === number));
                })
            } 
            else{
                for(let i=0;i<this.questionNumbers;i++){
                    const setUniqQuestions = () =>{
                        let randomQuestionNumber = Math.floor(Math.random() * (res.length-1)); 
                        if(this.questions.find(e=> e?.id === randomQuestionNumber)){
                            setUniqQuestions()
                        }
                        else{
                            let question = res.find(e=>e?.id === randomQuestionNumber)
                            this.questions.push(question);
                        }
                    }
                    setUniqQuestions()
                }
                let questionNumbersArr = [];
                this.questions.forEach((item,i)=>{
                    questionNumbersArr.push(item.id);
                })
                window.localStorage.setItem('questionNumbers',JSON.stringify(questionNumbersArr));
            }
            this.questionTimer();
        })
        if(window.localStorage.getItem('quizResult')){
            let arr = JSON.parse(window.localStorage.getItem('quizResult'));
            
            if(arr.length === this.questionNumbers){
                this.result = arr;
            }
            this.currentQuestionNumber = arr.length;
            clearInterval(this.interval)
            if(arr.length === 10){
                this.isFinished = true;
            }
        }
        if(window.localStorage.getItem('currCount')){
            this.questionTime = parseInt(window.localStorage.getItem('currCount'))
        }
        if(this.isFinished){
            this.headerText = 'Quiz App Results'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
.quiz-main{
    width: 100%;
    height: 100%;
    @include d-flex(column,center,center);
    gap: 20px;
    .quiz-app-header{
        font-size: 3rem;
        text-transform: uppercase;
        @include d-flex-center;
        margin-bottom: 50px;
        @media (max-width: 768px){
            margin-bottom: 20px;
        }
        @media (max-width: 480px){
            margin-bottom: 0px;
        }
    }
    .numbers-of-questions{
        @include d-flex-center;
        gap: 10px;
        .question-number{
            background-color: #fff;
            color: #1d1d1d;
            font-size: 1.5rem;
            @include d-flex-center;
            width:30px;
            height:30px;
            border-radius: 2px;
            font-weight: 700;
            border: 1px solid #a5a5a5;
            user-select: none;
            pointer-events: none;
        }
        .current-question-number{
            @extend .question-number;
            background-color: #274b99;
            color: #fff;
        }
        .passed-question-number{
            @extend .question-number;
            background-color: #b9b9b9;
        }
        @media (max-width: 480px){
            display: none;
        }
    }
    .question-content-wrapper{
        @include d-flex(column,center,center);
        padding: 20px 0;
        background-color: #fff;
        position: relative;
        width:80%;
        @media (max-width: 768px){
            width:90%;
        }
        .question-content{
            @include d-flex(column,flex-start,stretch);
            gap: 20px;
            border: 1px solid #999999;
            width: 100%;
            border-radius: 8px;
            position: relative;
            @media (min-width: 1024px){
                max-width: 900px;
                min-height: 500px;
            }
            @media (min-width: 481px){
                min-height: 400px;
            }
            @media (max-width: 480px){
                gap: 10px;
            }
            
            .question{
                text-align: left;
                font-size: 1.6rem;
                font-weight: 700;
                padding: 40px 30px;
                @media (max-width: 481px){
                    padding: 40px 20px 20px 20px;
                }
            }
            .question-options-wrapper{
                @include d-flex(column,flex-start,center);
                gap: 10px;
                .question-option{
                    font-size: 1.6rem;
                    border: 1px solid #999999;
                    width: 90%;
                    border-radius: 4px;
                    user-select: none;
                    cursor: pointer;
                    transition: all .2s linear;
                    @include d-flex(row,flex-start,center);
                    @media (hover: hover) {
                        &:hover{
                            background-color: #279927;
                            color: #fff;
                        }
                    }
                    .option{
                        padding: 10px 15px 10px 20px;
                    }
                    .answer{
                        padding: 10px;
                    }
                }
                .selected-question-option{
                    @extend .question-option;
                    background-color: #279927;
                    color: #fff;
                }
                .disabled{
                    pointer-events: none;
                }
            }
            .next-question{
                @include d-flex-center;
                background-color: transparent;
                color: #fff;
                background-color: #274b99;
                font-size: 1.8rem;
                border-radius: 8px;
                padding: 10px 20px;
                border: none;
                position: absolute;
                bottom: 20px;
                right: 20px;
                text-align: center;
                min-width: 150px;
                user-select: none;
                cursor: pointer;
                transition: all .2s linear;
                @media (hover: hover) {
                    &:hover{
                        background-color: #325dbb;
                    }
                }
                
                @media (max-width: 481px){
                    position: relative;
                    min-width:unset;
                    bottom: unset;
                    right: unset;
                    margin: 20px;
                }
            }
            .disabled-next-question{
                @extend .next-question;
                background-color: #999999;
                pointer-events: none;
            }
            .question-timer{
                position: absolute;
                right: 20px;
                top: 20px;
                width: 50px;
                height: 50px;
                font-size: 1.6rem;
                font-weight: 700;
                user-select: none;
                pointer-events: none;
                @media (max-width: 481px){
                    right: -10px;
                    top: 5px;
                }
            }
        }
        .quiz-app-result-wrapper{
            @include d-flex(column,center,center);
            background-color: #fff;
            position: relative;
            width:100%;
            @media (max-width: 768px){
                border: 1px solid #999999;
                border-radius: 8px;
                width: 100%;
            }
            .quiz-app-result{
                @include d-flex(column,flex-start,stretch);
                border: 1px solid #999999;
                padding: 50px 20px;
                border-radius: 8px;
                @media (max-width: 768px){
                    padding:20px 0;
                    width: 90%;
                    overflow: auto;
                    border: none;
                }
                .quiz-result-questions{
                    @include d-flex-center;
                    border: 1px solid #999999;
                    &:last-child{
                        border-top: none;
                    }
                    @media (max-width: 768px){
                        min-width: fit-content;
                    }
                    .quiz-result-header{
                        max-width: 170px;
                        min-width: 170px;
                        font-size: 1.6rem;
                        height: 100%;
                        color: #fff;
                        background-color: #727272;
                        @include d-flex-center;
                        @media (max-width: 768px){
                            max-width: 130px;
                            min-width: 130px;
                        }
                    }
                    .quiz-result-item{
                        @include d-flex-center;
                        width:50px;
                        height: 50px;
                        font-size: 1.4rem;
                        border-left: 1px solid #999999;
                        background-color: #fff;
                    }
                    .numbers{
                        font-weight: 700;
                    }
                }
            }
        }
        
        .confirm-button-wrapper{
            width:100%;
            @include d-flex-center;
            margin-top: 20px;
            .confirm-button{
                @include d-flex-center;
                background-color: transparent;
                color: #fff;
                background-color: #274b99;
                font-size: 1.8rem;
                border-radius: 8px;
                padding: 10px 20px;
                border: none;
                text-align: center;
                min-width: 150px;
                user-select: none;
                cursor: pointer;
                transition: all .2s linear;
                @media (hover: hover) {
                    &:hover{
                        background-color: #325dbb;
                    }
                }
                
            }
        }
        .mobile-current-question{
            position: absolute;
            left: 10px;
            top: 5px;
            font-size: 1.6rem;
            font-weight: 700;
            color: #707070;
            @media (min-width: 481px){
                display: none;
            }
        }
    }
}
</style>