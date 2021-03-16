import styled from "styled-components";

export const Slider = styled.div`
	ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 980px) {
      position: relative;
    }
    li {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
`;

export const Pager = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  a {
    width: 15px;
    height: 15px;
    border: solid 2px #fff;
    border-radius: 20px;
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.3);
    cursor: pointer;
    &.current {
    	background-color: #fff;
    	cursor: default;
    }
  }
`;


export const Arrows = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  a {
    background-color: #fff;
    color: #112c55;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    display: block;
    box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    position: relative;
    &.disabled {
      opacity: .5;
      cursor: default;
    }
    &:before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      border-right: solid 1px #112c55;
      border-bottom: solid 1px #112c55;
      float: right;
      transform: rotate(-45deg);
      position: absolute;
      top: 50%;
      margin-top: -8px;
      left: 50%;
      margin-left: -12px;
    }
    &:first-child:before {
        transform:rotate(135deg);
        margin-left: -5px;
    }
    &:not(.disabled):hover {
      background-color: whitesmoke;
    }
  }
  @media (max-width: 980px) {
    display: none;
  } 
`;
