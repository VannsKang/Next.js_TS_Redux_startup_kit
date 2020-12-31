import React, { FC } from 'react'
import { AppProps } from 'next/app'

// LINK
import { storeWrapper } from '@store/store'

// LINK redux persist
import { useStore } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default storeWrapper.withRedux(CustomApp)
