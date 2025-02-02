import React from 'react'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import useQuizService from '../../hooks/useQuizService'
import EditQuestion from './EditQuestion/EditQuestion'
import classes from './EditQuiz.module.scss'

const initialState = []
const reducer = (state, action) => {
  switch(action.type){
    case 'LOAD_QUESTION':
      return action.questions
  }
}

function EditQuiz() {
  const {loadQuestions} = useQuizService()
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    loadQuestions((data) => {
      dispatch({
        type: 'LOAD_QUESTION',
        questions: data
      })
    })
  }, [])

  // console.log(state);

  return (
    <ContentContainer color="#fcf5ed">
      {state.map(question => {
        return <EditQuestion key={question.id} question={question}/>
      })}
        <div className={classes.AddQuestion}><div className={classes.Plus}>+</div></div>
    </ContentContainer>
  )
}

export default EditQuiz