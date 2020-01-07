import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {quiz_position : 1}
  }
  render(){
    var isQuizEnd = false;

    if(quizData.quiz_questions.length == (this.state.quiz_position - 1)){
      isQuizEnd = true;
    }
    else{
      isQuizEnd = false;
    }
    return(
      <div>
      { isQuizEnd && <QuizEnd/> }
      { !isQuizEnd && <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>  }
      </div>
    );
  }
}
export default Quiz
