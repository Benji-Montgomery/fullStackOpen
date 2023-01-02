import { connect, useSelector } from 'react-redux'
//import { notifications } from '../reducers/anecdoteReducer'

const Notification = (props) => {
  //const notification = useSelector(filter, notification)  
  const notification = useSelector(state => state.notification)
  //console.log(notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}    </div>
  )
}

export default connect(null, { })(Notification)