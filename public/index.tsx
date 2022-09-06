import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso';
import Home from './pages/home/index';
import NotFound from './pages/_404';
import Header from './components/header';
import { FunctionComponent } from 'preact';

const About = lazy(() => import('./pages/about/index'));

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
	);
};

hydrate(<App />);

export const prerender = async data => {
	return ssr(<App {...data} />);
};
