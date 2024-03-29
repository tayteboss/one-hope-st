import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-dark-brown: ${theme.colours.darkBrown};
		--colour-light-brown: ${theme.colours.lightBrown};
		--font-default: ${theme.fonts.default};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: var(--colour-light-brown);
		color: var(--colour-dark-brown);
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.white};
		font-size: 16px;
		cursor: crosshair;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}

		&.no-cursor {
			cursor: none !important;
		}

		* {
			text-transform: uppercase;
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-default);
		color: var(--colour-light-brown);
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: none;
		color: var(--colour-light-brown);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: 2.813rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
			line-height: 2.125rem;
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		line-height: 2.25rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
			line-height: 1.75rem;
		}
	}

	h3,
	.type-h3 {
		font-size: ${pxToRem(52)};
		line-height: ${pxToRem(48)};

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: 1.563rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
			line-height: 1.375rem;
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};
		line-height: 1.938rem;

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
			line-height: 1.75rem;
		}
	}

	.type-large {
		font-size: 8vw !important;
		line-height: 0.75 !important;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: 12vw !important;
		}
	}

	.type-small {
		font-size: 3vw !important;
		line-height: 0.85 !important;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: 6vw !important;
		}

		@media ${theme.mediaBreakpoints.mobile} {
			font-size: 7vw !important;
		}
	}

	.sentence-case {
		* {
			text-transform: none;
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity 300ms ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1), transform 300ms cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	.hide-elements {
		.hidden-element {
			opacity: 0;
		}
	}

	.tab-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		height: 100dvh;
		width: 100%;
		z-index: 15;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
