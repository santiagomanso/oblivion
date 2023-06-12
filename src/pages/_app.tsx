import Layout from '@/components/containers/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//imports for fontawesome icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { PlayerProvider } from '@/context/playerContext'

library.add(fas)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlayerProvider>
  )
}
