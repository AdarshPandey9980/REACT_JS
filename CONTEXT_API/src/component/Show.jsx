import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Show = () => {
    const {user} = useContext(UserContext)

    if (user) return(<>hello, {user.username}</>)
}

export default Show