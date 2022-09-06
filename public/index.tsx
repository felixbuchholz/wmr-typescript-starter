import { Attributes, ComponentChildren, FunctionComponent, Ref } from 'preact'
import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import { PrerenderResult } from 'preact-iso/prerender'
import { JSXInternal } from 'preact/src/jsx'

import Header from './components/header'
import NotFound from './pages/_404'
import Home from './pages/home/index'

const About = lazy(() => import('./pages/about/index'))

export const App: FunctionComponent = () => {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  )
}

hydrate(<App />)

export const prerender = async (
  data: JSXInternal.IntrinsicAttributes &
    Readonly<
      Attributes & {
        children?: ComponentChildren
        ref: Ref<unknown> | undefined
      }
    >
): Promise<PrerenderResult> => {
  return ssr(<App {...data} />)
}
