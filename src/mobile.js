import './polyfills/Array.from';

import detectSupport from './modules/detectSupport';
import LazyLoad from './modules/LazyLoad';

import main from './styles/mobile.styl';


document.addEventListener('DOMContentLoaded', () => {
	
	if (!detectSupport('grid')) {
		const root = document.getElementsByTagName('html')[0];
		root.className = 'no-grid';
	};

	const lazyLoad = new LazyLoad('gallery__item');

	// hide preloader
	document.body.classList.add('loaded');
});