import styled from 'styled-components';

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
`;

export const MobileMenu = styled.div`
	transition: box-shadow 1.1s cubic-bezier(.19,1,.22,1);
	height: 60px;
	width: 60px;
	display: flex;
	
	@media(min-width: 1024px) {
    display: none;
  }
	
	.icon-animate {
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

	.sidebar-animate {
		height: 150vh;
		width: 100%;

		li {
			display: block;
		}
	}
`;

export const Button = styled.div`
	position: relative;
	background: #000;
	box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
	cursor: pointer;
	height: 60px;
	transition: box-shadow 1.1s cubic-bezier(.19,1,.22,1);
	box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
	width: 60px;
	z-index: 2;
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

export const Sidebar = styled.ul`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  padding-top: 150px;
	background: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-wrap: none;

	li {
		display: none;
  	color: #FFF;
		font-size: 36px;
		font-weight: bold;
		margin-top: 100px;
	}
`;