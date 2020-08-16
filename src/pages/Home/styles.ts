import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	color: #FFF;
	justify-content: center;

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