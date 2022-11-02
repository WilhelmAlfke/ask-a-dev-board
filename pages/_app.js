import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Home from './home'

function MyApp({ Component, pageProps }) {
  const { asPath, isReady } = useRouter()
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (isReady) {
      setLocation(new URL(asPath, window?.location?.href).pathname)
    }
  }, [asPath, isReady])

  return (
    <>
      <Component {...pageProps} />
      <Home />
    </>
  )
}

export default MyApp
