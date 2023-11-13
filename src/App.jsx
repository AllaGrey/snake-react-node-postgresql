import { SharedLayout } from './components/SharedLayout/SharedLayout'
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshUser } from './redux/auth/operations'
import { useFont } from './hooks/useFont'
import { fonts } from './constants/fonts'

function App() {

  const dispatch = useDispatch()
  const fontsLoaded = useFont(fonts)

    useEffect(() => {
    dispatch(refreshUser())

  }, [dispatch])

  return fontsLoaded ? (
    <>
      <GlobalStyle/>
      <SharedLayout />
    </>
  ) : <p>Loading...</p>
}

export default App
