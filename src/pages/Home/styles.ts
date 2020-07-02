import styled from 'styled-components';

import { FaConnectdevelop } from 'react-icons/fa';

export const Container = styled.div`
	padding: 50px;
`;

/**
 * HEADER
 */

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
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
	@media(max-width: 1000px) {
    display: none;
  }
`;

export const MenuItem = styled.span`
	color: #fff;
	font-size: 18px;
	margin-right: 80px;
	text-transform: uppercase;
	font-weight: 300;
`;

/**
 * MAIN
 */

export const Main = styled.main`
	display: flex;
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
	width: 800px;
	height: 60vh;
`;