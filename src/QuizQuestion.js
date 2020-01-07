import React, { Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component
{
  render()
  {
    return(
      <main>
      <section>
      <p>{this.props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">
      <ul>
      <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
      <QuizQuestionButton button_text={this.props.quiz_question.answer_options[1]}/>
      <QuizQuestionButton button_text={this.props.quiz_question.answer_options[2]}/>
      <QuizQuestionButton button_text={this.props.quiz_question.answer_options[3]}/>
      </ul>
      </section>
      </main>
    );
  }
}
export default QuizQuestion
