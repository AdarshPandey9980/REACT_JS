import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../auth/auth'
import { logout } from '../../Store/auth.slice'
import {Button} from "../index"

const Logout = () => {

    const dispatch = useDispatch()
    const logoutHandler = () => {
      authservice.logout()
      .then(() => {
        dispatch(logout())
      })

    }

  return (
    <Button children="Logout" type='button' onClick={logoutHandler} />
  )
}

export default Logout