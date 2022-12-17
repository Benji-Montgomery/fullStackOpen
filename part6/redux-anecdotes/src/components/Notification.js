import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { anotherReducer } from '../reducers/notificationReducer'
//import { notifications } from '../reducers/anecdoteReducer'

const Notification = () => {
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

export default Notification