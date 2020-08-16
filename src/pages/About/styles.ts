import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 90%;
	min-height: 50vh;
`;

export const TechnologiesWrapper = styled.div`
	h1 {
		color: #fff;
		font-weight: 200;
	}

	@media(min-width: 1024px) {
		width: 35%;
		margin: 50px 0 20px;
		margin-left: 5%;

		h1 {
			font-size: 30px;
		}
	}

	@media(max-width: 1024px) {
		width: 100%;
		margin: 30px;

		h1 {
			font-size: 26px;
		}
	}
`;

export const Technologies = styled.div`
	display: flex;
	width: 90%;

	@media(min-width: 1024px) {
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@media(max-width: 1024px) {
		height: 150px;
		overflow-y: scroll;
	}
`;

export const Technology = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px 35px 0 0;

	span {
		margin-top: 10px;
		text-align: center;
		color: #fff;
	}

	img {
		filter: grayscale(1);
		cursor: pointer;
		max-width: 100px;
	}

	@media(max-width: 1024px) {
		img {
			max-width: 75px;
		}
	}

	img:hover {
		filter: grayscale(0);
	}
`;