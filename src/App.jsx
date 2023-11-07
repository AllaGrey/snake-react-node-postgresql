

import './App.css'

import { SharedLayout } from './components/SharedLayout/SharedLayout'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'

function App() {

  const dispatch = useDispatch()

    useEffect(() => {
    dispatch(refreshUser())

  }, [dispatch])

  return (
    <>
        <SharedLayout/>
    </>
  )
}

export default App
