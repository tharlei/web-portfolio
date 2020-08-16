import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from '../../assets/bg.jpg'

export const Background = styled.div`
	background: url(${bg});
`;

export const Container = styled.div`
	@media(min-width: 1024px) {
		padding: 50px;
	}

	@media(max-width: 1024px) {
		padding: 20px;
	}
`;

/**
 * HEADER
 */

export const Header = styled.header`
	display: flex;
	justify-content: space-between;

	@media(max-width: 1024px) {
		margin-top: 20px;
	}
`;

export const LogoWrapper = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
	font-weight: bold;
	text-decoration: none;
	color: #fff;
	-webkit-tap-highlight-color: transparent;
	user-select: none;

	span {
		text-transform: uppercase;
	}

	svg {
		margin-right: 10px;
	}

	@media(max-width: 1024px) {
		font-size: 20px;
	}
`;

/**
 * MAIN
 */

export const Main = styled.main`
	display: flex;
	@media(min-width: 1024px) {
		min-height: 75vh;
	}
`;

export const SocialWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	justify-content: center;

	span {
		cursor: pointer;
	}

	@media(min-width: 1024px) {
		span {
			font-size: 18px;
		}
	}

	span {
		margin-top: 15px;
		color: #FFF;
	}
`;

export const Content = styled.div`
  width: 100%;
`;

/**
 * FOOTER
 */

export const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	color: #FFF;
	margin-bottom: 20px;
`;

export const Marker = styled.h1`
	font-size: 90px;
	font-weight: bold;
	border-bottom: 5px solid #FFF;
`;

export const NextWrapper = styled(Link)`
	display: flex;
	justify-content: center;
	align-content: center;
	transform: rotate(90deg);
	font-size: 12px;
	color: #FFF;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	
	svg {
		margin-left: 5px;
	}

	span {
		text-transform: uppercase;
	}
`;