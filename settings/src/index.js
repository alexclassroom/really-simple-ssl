import {
    render,
} from '@wordpress/element';
import App from "./App";

/**
 * Initialize the whole thing
 */

document.addEventListener( 'DOMContentLoaded', () => {
	const container = document.getElementById( 'really-simple-ssl' );
	if ( container ) {
		render(
			<App/>,
			container
		);
	}
});




