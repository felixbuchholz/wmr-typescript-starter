import { FunctionComponent } from 'preact';
import styles from './style.module.css';

const About: FunctionComponent<{ query: Record<string, unknown> }> = ({ query }) => {
	return (<section class={styles.about}>
		<h1>About</h1>
		<p>A page all about this website.</p>
		<pre>{JSON.stringify(query)}</pre>
	</section>)
}



export default About;
