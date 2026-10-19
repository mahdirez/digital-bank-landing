import { SiteHeader } from './components/layout/SiteHeader/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter/SiteFooter'
import { Hero } from './sections/Hero/Hero'
import { Features } from './sections/Features/Features'
import { Articles } from './sections/Articles/Articles'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
