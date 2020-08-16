import styled, { css } from 'styled-components';

interface MobileMenu {
	active: boolean;
}

export const DesktopMenu = styled.ul`
	display: flex;
	@media(max-width: 1024px) {
    display: none;
  }
`;

export const DesktopMenuItem = styled.li`
	color: #fff;
	font-size: 16px;
	margin-left: 8rem;
	text-transform: uppercase;
	font-weight: 400;
	text-align: right;
	cursor: pointer;
	
	a {
		color: #fff;
		text-decoration: none;
	}
`;

export const MobileMenu = styled.div<MobileMenu>`
	transition: box-shadow 1.1s cubic-bezier(.19,1,.22,1);
	height: 60px;
	width: 60px;
	display: flex;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	
	@media(min-width: 1024px) {
    display: none;
  }

	${props =>
		props.active && css`
		div {
			position: fixed;
		}

		div span {
			transform: rotate(45deg);

			:after {
				transform: rotate(90deg);
				bottom: 0;
			}

			:before {
				transform: rotate(90deg);
				top: 0;
			}
		}

		ul {
			display: flex;
		}
		`
	}
`;

export const MobileButtonClose = styled.div`
	position: relative;
	background: #000;
	box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
	cursor: pointer;
	height: 60px;
	transition: box-shadow 1.1s cubic-bezier(.19,1,.22,1);
	box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
	width: 60px;
	z-index: 2;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
`;

export const Icon = styled.span`
	position: absolute;
	z-index: 3;
	top: 29px;
	left: 15px;
	width: 25px;
	height: 2px;
	background: #FFF;
	transform-origin: center;
	transition: .5s ease-in-out;

	:after,
	:before {
		background: #FFF;
		content: "";
		transition: .5s ease-in-out;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	:before {
    top: -8px;
	}

	:after {
    bottom: -8px;
	}
`;

export const MobileMenuList = styled.ul`
	display: none;
	position: fixed; 
	top: 0; 
	right: 0; 
	left: 0;
  z-index: 2;
	background: #000;
	height: 120vh;
	flex-direction: column;
	align-items: center;

	animation-duration: 0.50s;
	animation-name: showMenu;

	@keyframes showMenu {
		from {
			margin-right: 100%;
			width: 0%
		}

		to {
			margin-right: 0%;
			width: 100%;
		}
	}
`;

export const MobileMenuItem = styled.li`
	font-size: 28px;
	font-weight: bold;
	margin-top: 60px;
	color: #FFF;
	cursor: pointer;

	a {
		color: #FFF;
		text-decoration: none;
	}
`;