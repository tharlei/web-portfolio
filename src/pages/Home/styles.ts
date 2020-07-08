import styled from 'styled-components';

import { FaConnectdevelop } from 'react-icons/fa';
// import bg from '../../assets/bg.jpg'

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

export const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 26px;
	font-weight: bold;
	color: #fff;
`;

export const LogoIcon = styled(FaConnectdevelop)`
	margin-right: 10px;
`;

export const LogoName = styled.h1`
	text-transform: uppercase;
`;

export const Menu = styled.div`
	display: flex;
	@media(max-width: 1024px) {
    display: none;
  }
`;

export const MenuItem = styled.span`
	color: #fff;
	font-size: 16px;
	margin-left: 8rem;
	text-transform: uppercase;
	font-weight: 400;
	text-align: right;
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
	color: #FFF;
	font-weight: bold;
	justify-content: center;

	svg {
		margin-top: 15px;
	}
`;

export const Content = styled.div`
	display: flex;
	color: #FFF;
	justify-content: center;
	width: 100%;

	@media(max-width: 1024px) {
		margin: 50px 0px 50px 0px;
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
			font-size: 42px;
		}

		span {
			font-size: 30px;
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
`;

export const Marker = styled.h1`
	font-size: 90px;
	font-weight: bold;
	border-bottom: 5px solid #FFF;
`;

export const NextWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	transform: rotate(90deg);
	font-size: 12px;
	
	svg {
		margin-left: 5px;
	}
`;

export const Next = styled.span`
	text-transform: uppercase;
`;