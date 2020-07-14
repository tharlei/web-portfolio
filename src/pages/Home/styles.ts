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

	@media(min-width: 1024px) {
		a {
			font-size: 18px;
		}
	}

	a {
		margin-top: 15px;
		color: #FFF;
	}
`;

export const Content = styled.div`
	display: flex;
	color: #FFF;
	justify-content: center;
	width: 100%;

	@media(max-width: 1024px) {
		margin: 50px 0px 80px 0px;
		flex-direction: column-reverse;
		align-items: center;
  }
`;

export const MyselfImg = styled.img`
	width: 100%;
`;

export const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media(min-width: 1024px) {
		width: 600px;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #FFF;
	justify-content: center;
	text-align: center;

	h1 {
		font-weight: bold;
	}

	span {
		font-weight: 200;
	}

	@media(max-width: 1024px) {
		h1 {
			font-size: 38px;
		}

		span {
			font-size: 28px;
			margin-top: 5px;
		}
	}

	@media(min-width: 1024px) {
		h1 {
			font-size: 90px;
			font-weight: bold;
		}
		
		span {
			font-size: 80px;
			margin-top: 20px;
		}
	}
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
	
	svg {
		margin-left: 5px;
	}

	span {
		text-transform: uppercase;
	}
`;