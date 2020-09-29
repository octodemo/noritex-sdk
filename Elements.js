import styled from "styled-components";

export const Pagination = styled.div`
  font-size: 1rem;
  margin: -0.25rem;
  padding-top: 20px;
  &,
  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  a, span {
  	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.5em - 1px);
    padding-left: calc(0.75em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
    position: relative;
    vertical-align: top;
    font-size: 1em;
    justify-content: center;
    margin: 0.25rem;
    padding-left: 0.5em;
    padding-right: 0.5em;
    text-align: center;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 0.6em;
      border-radius: 2px;
    }
  }


  a {
    border-color: #dbdbdb;
    color: #363636;
    min-width: 2.5em;
    display: block;
    :not(:last-child) {
	    margin-bottom: 1.5rem;
	  }
	  :hover {
	    border-color: #b5b5b5;
	    color: #363636;
	  }
	  :focus {
	    border-color: #3273dc;
	    outline: none;
	  }
	  :active {
	    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
	  }
	  &[disabled] {
	    background-color: #dbdbdb;
	    border-color: #dbdbdb;
	    box-shadow: none;
	    color: #7a7a7a;
	    opacity: 0.5;
	    cursor: not-allowed;
	  }
	  &.is-current {
	    background-color: #112c55;
	    border-color: #112c55;
	    color: #fff;
  	}
  }

 span {
    color: #b5b5b5;
    pointer-events: none;
    &[disabled] {
    	cursor: not-allowed;
    }
    :focus {
    	outline: none;
    }
  }

  ul {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    ul li {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }

  @media screen and (min-width: 769px), print {
    justify-content: space-between;
    ul {
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: flex-start;
      order: 1;
    }
    &.is-centered ul {
      justify-content: center;
      order: 2;
    }
  }
`;

export const Filters = styled.div`
	flex: none;
	min-width: 200px;
	margin-top: -10px;

	> div + div {
		border-top: solid 1px #e3e3e3;
	}
	
	h3 {
		text-transform: uppercase;
		font-size: 12px;
		font-weight: bold;
		color: #112c55;
		display: block;
		margin-bottom: 0;
		cursor: pointer;
		user-select: none;
		padding: 12px 10px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		align-items: center;
		justify-content: space-between;
		svg {
			width: 14px;
			height: 14px;
			opacity: .5;
		}
		&:hover svg {
			opacity: 1;
		}
	}
	ul {
		background: whitesmoke;
		padding: 20px;
		box-shadow: inset 0 5px 10px -11px;
		&:not(.is-visible) {
			display: none;
		}
		li + li {
			margin-top: 10px;
		}
		li {
			position: relative;
			label {
				display: block;
				cursor: pointer;
				user-select: none;
			}
			input {
				display: none;
				&:checked + span {
					background-color: #112c55 !important;
					border-color: #112c55;
					box-shadow: inset 0 0 0px 2px white;
					& + p {
						color: #333 !important;
					}
				}
			}
			span {
				width: 16px;
				height: 16px;
				border-radius: 2px;
				display: inline-block;
				position: absolute;
				left: 0;
				top: 0;
				border: solid 2px #C3C2C9;
			}
			&:hover p {
				color: #47494A;
			}
			p {
				padding-left: 20px;
				font-size: 15px;
				color: #5D5F60;
				line-height: initial;
			}
			
			a {
				cursor: pointer;
				text-transform: uppercase;
				font-size: 10px;
				font-weight: bold;
				color: royalblue;
				&:hover {
					color: royalblue;
					text-decoration: underline;
				}
				svg {
					width: 10px;
					height: 10px;
					display: inline-block;
					vertical-align: middle;
					margin-top: -2px;
				}
			}
		}
	}
`;

export const Tag = styled.span`
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 1.2rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`;

export const Tag = styled.span`
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 1.2rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`;

export const Tabs = styled.div`
	-webkit-overflow-scrolling:touch;
	align-items:stretch;
	display:flex;
	font-size:1rem;
	justify-content:space-between;
	overflow:hidden;
	overflow-x:auto;
	white-space:nowrap;
	font-size: 16px;

	a {
		cursor: pointer;
		align-items:center;
		border-bottom-color:#dbdbdb;
		border-bottom-style:solid;
		border-bottom-width:1px;
		color:#4a4a4a;
		display:flex;
		justify-content:center;
		margin-bottom:-1px;
		padding:.5em 1em;
		vertical-align:top;
		transition: all 200ms linear;
		:hover {
			border-bottom-color:#858789;
			color:#363636
		}
	}
	li {
		display:block;
	}
	li.is-active a {
		border-bottom-color:#112c55;
		color:#112c55;
	}
	ul {
		align-items:center;
		border-bottom-color:#dbdbdb;
		border-bottom-style:solid;
		border-bottom-width:1px;
		display:flex;
		flex-grow:1;
		flex-shrink:0;
		justify-content:flex-start;
	}
	ul.is-left {
		padding-right:.75em;
	}
	ul.is-center {
		flex:none;
		justify-content:center;
		padding-left:.75em;
		padding-right:.75em;
	}
	ul.is-right {
		justify-content:flex-end;
		padding-left:.75em;
	}
`;

export const Modal = styled.div`
	align-items: center;
	display: none;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 40;
	background-color: rgba(10,10,10,.86);
	&.is-active {
		display: flex;
	}
	text-align: ${props => {
		if (props.textCenter) {
			return 'center'
		} 
		else if (props.textRight) {
			return 'right'
		} 
		else {
			return 'left'
		}
	}};
	> div {
		margin: 0 auto;
		max-height: calc(100vh - 40px);
		width: 98%;
		max-width: 640px;
	}
	> button {
		height: 32px;
		max-height: 32px;
		max-width: 32px;
		min-height: 32px;
		min-width: 32px;
		width: 32px;
		background: none;
		position: fixed;
		right: 20px;
		top: 20px;
		-webkit-appearance: none;
		border: none;
		border-radius: 290486px;
		cursor: pointer;
		pointer-events: auto;
		display: inline-block;
		font-size: 0;
		outline: 0;
		user-select: none;
		margin: 0;
		:after, :before {
			background-color: #fff;
			content: "";
			display: block;
			left: 50%;
			position: absolute;
			top: 50%;
			transform: translateX(-50%) translateY(-50%) rotate(45deg);
			transform-origin: center center;
		}
		:before {
			height: 2px;
			width: 50%;
		}
		:after {
			height: 50%;
			width: 2px;
		}
	}
`;


export const Preloader = styled.div`
  min-width: 100px;
  min-height: 20px;
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  animation: pulse 1.5s ease-in-out 0.5s infinite;
  & + & {
  	margin-top: 10px;
  }
  ${props => {
  	if (props.square) {
  		return `
  			border-radius: 6px;
  			padding-top: 80%;
  		`
  	}
  }}
  ${props => {
  	if (props.half) {
  		return `
  			max-width: 50%;
  		`
  	}
  }}

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }