import styled from "styled-components";

export const Button = styled.button`
 -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  box-shadow: none;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
	display: flex;
	vertical-align: top;
	border: solid 1px #dbdbdb;
	font-size: 16px;
	border-radius: 3px;
	background-color: white;
	color: #363636;
	${props => props.isFullWidth ? 'width: 100%;' : ''}

	:active,
	:focus {
		outline: none;
	}

	:hover {
    border-color: #b5b5b5;
    color: #363636;
  }

  :focus {
    border-color: #3273dc;
    color: #363636;
  }

  :active, &.is-active {
    border-color: #4a4a4a;
    color: #363636;
    z-index: 2;
	}
	${props => {
		if(props.primary) {
			return `
				border-color: #112c55;
				background-color: #112c55;
				color: #fff;
				:hover {
					background-color: #143B77;
					color: #fff;
					border-color: #112c55;
				}
			`
		}
	}}
	${props => {
		if(props.white) {
			return `
				background-color: white;
				border-color: transparent;
				color: #0a0a0a;
				:hover {
					background-color: #f9f9f9;
					border-color: transparent;
					color: #0a0a0a;
				}
			`
		}
	}}
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;

  ${props => {
  	if (props.static) {
  		return `
  			background-color: #f5f5f5;
				border-color: #dbdbdb;
				color: #7a7a7a;
				box-shadow: none;
				pointer-events: none;
  		`;
  	}
  }};

  ${props => {
  	if (props.small) {
  		return `
			  border-radius: 2px;
			  font-size: 1.35rem;
			  svg {
			  	width: 18px !important;
			  	height: 18px !important;
			  }
  		`;
  	}
  }};

	@media (max-width: 768px) {
		${props => props.responsive && 'width: 100%;'}
	}

	svg {
		width: 16px;
		height: 16px;
		&:not(:only-child):first-child {
			margin-right: 5px;
			margin-left: -5px;
		}
		&:not(:only-child):last-child {
			margin-left: 5px;
			margin-right: -5px;
		}
		:only-child {
			margin-right: -5px;
			margin-left: -5px;
		}
	}

	${props => {
  	if (props.loading) {
  		return `
  			@-webkit-keyframes spinAround {
				  from {
				    transform: rotate(0deg);
				  }
				}
				@keyframes spinAround {
				  from {
				    transform: rotate(0deg);
				  }
				  to {
				    transform: rotate(359deg);
				  }
				}
				color: transparent !important;
				pointer-events: none;
				&::after {
				  -webkit-animation: spinAround 500ms infinite linear;
				  animation: spinAround 500ms infinite linear;
				  border: 2px solid #dbdbdb;
				  border-radius: 290486px;
				  border-right-color: transparent;
				  border-top-color: transparent;
				  content: "";
				  display: block;
				  height: 1em;
				  position: relative;
				  width: 1em;
				  position: absolute;
				  left: calc(50% - (1em / 2));
				  top: calc(50% - (1em / 2));
				  position: absolute !important;
				}
  		`;
  	}
  }};
`;


export const Buttons = styled.div`
	display: flex;
	justify-content: ${props => {
		if(props.isCentered) {
			return 'center;';
		} else if (props.isRight) {
			return 'flex-end;'
		} else {
			return 'flex-start;'
		}
	}}
  
 	${Button}:not(:only-child) {
    margin-bottom: 10px;
  }
  
  & ${Button} + ${Button} {
    margin-left: 10px;
  }

  ${(props) =>
        props.hasLink
            ? `
                & ${Button} + a {
                    margin-left: 10px;
                }`
            : ""}
`;

export const Icon = styled.span`
	display: inline-block;
	vertical-align: middle;
	align-items: center;
	display: inline-flex;
	justify-content: center;
	width: 32px;
	height: 32px;
	&:not(:only-child):first-child {
		margin-right: 5px;
	}
	&:not(:only-child):last-child {
		margin-left: 5px;
	}
	+ & {
		margin-left: 10px;
	}
	svg {
		color: #4a4a4a;
		width: 18px;
		height: 18px;
		object-fit: contain;
	}
`;
