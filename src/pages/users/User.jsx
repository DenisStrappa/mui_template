import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const {user_id}= useParams();
  // const user = useSelector((state) => authSelector.user(state));

  useEffect(() => {
    console.log(user_id)
  }, []);

  return (
    <div>
      <h1>User {user_id}</h1>
    </div>
  )
}

export default User
