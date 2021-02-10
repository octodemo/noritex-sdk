import styled from "styled-components";

export const Control = styled.div`
    box-sizing: border-box;
    clear: both;
    font-size: 1.6rem;
    position: relative;
    text-align: inherit;
    margin-bottom: 0;
    ${(props) =>
        props.isExpanded
            ? "display:block;width:100%;"
            : "display:inline-block;"};

    input {
        -moz-appearance: none;
        -webkit-appearance: none;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: none;
        display: inline-flex;
        font-size: 1.6rem;
        height: 2.5em;
        justify-content: flex-start;
        line-height: 1.5;
        padding-bottom: calc(0.5em - 1px);
        padding-left: calc(0.75em - 1px);
        padding-right: calc(0.75em - 1px);
        padding-top: calc(0.5em - 1px);
        position: relative;
        vertical-align: top;
    }

    .is-invalid {
        border-color: red;
    }

    input:focus,
    input:active {
        outline: none;
    }

    input[disabled] {
        cursor: not-allowed;
    }

    input {
        background-color: white;
        border-color: #dbdbdb;
        border-radius: 4px;
        color: #363636;
    }

    input::-moz-placeholder {
        color: #6f7279;
    }

    input::-webkit-input-placeholder {
        color: #6f7279;
    }

    input:-moz-placeholder {
        color: #6f7279;
    }

    input:-ms-input-placeholder {
        color: #6f7279;
    }

    input:hover {
        border-color: #b5b5b5;
    }

    input:focus,
    input:active {
        border-color: #112c55;
        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
    }

    input[disabled] {
        background-color: whitesmoke;
        border-color: whitesmoke;
        box-shadow: none;
        color: #7a7a7a;
    }

    input {
        box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
        max-width: 100%;
        width: 100%;
    }
    textarea {
        display: block;
        max-width: 100%;
        min-width: 100%;
        padding: 2px 5px;
        resize: vertical;
        background-color: #fff;
        border: 1px solid transparent;
        border-color: #dbdbdb;
        border-radius: 4px;
        color: #363636;
        box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
        width: 100%;
        moz-appearance: none;
        -webkit-appearance: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: sans-serif;
        &:not([rows]) {
            min-height: 130px;
            max-height: 640px;
        }
    }
`;

export const Field = styled.div`
    ${(props) =>
        props.isFlexEnd ? "display: flex;align-items: flex-end;" : ""};
    ${(props) => (props.isNarrow ? "flex: none !important;" : "")};

    ${(props) => {
        if (props.hasAddons) {
            return `    
            display: flex;
            justify-content: flex-start;
                ${Control} {
                    a,
                    button, 
                    input, 
                    select {
                        border-radius: 0;
                    }
                    &:not(:last-child) {
                     margin-right: -1px;
                    }
                    &:first-child {
                        a,
                        button, 
                        input, 
                        select {
                            border-bottom-left-radius: 3px;
                            border-top-left-radius: 3px;
                        }
                    }
                    &:last-child {
                        a,
                        button, 
                        input, 
                        select {
                            border-bottom-right-radius: 3px;
                            border-top-right-radius: 3px;
                        }
                    }
                }
            `;
        }
    }};

    &:not(:last-child) {
        margin-bottom: 15px;
    }
    @media screen and (min-width: 769px), print {
        display: ${(props) => (props.isHorizontal ? "flex" : "")};
    }

    label {
        color: #363636;
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
    }
    label:not(:last-child) {
        margin-bottom: 0.5em;
    }
`;

export const FieldBody = styled.div`
   @media (min-width: 769px) {
        ${(props) =>
            props.isFlexEnd ? "display: flex;align-items: flex-end;" : ""};
    }
    
    ${Field} ${Field} {
        margin-bottom: 0;
    }

    @media screen and (min-width: 769px), print {
        display: flex;
        flex-basis: 0;
        flex-grow: 5;
        flex-shrink: 1;

        ${Field} {
            margin-bottom: 0;
        }
        > ${Field} {
            flex-shrink: 1;
        }
        > ${Field} {
            ${(props) =>
                props.isNarrow ? "flex-grow: initial;" : "flex-grow: 1;"};
        }
        > ${Field}:not(:last-child) {
            margin-right: 1.2rem;
        }
    }
`;

export const SelectBox = styled.div`
    display: inline-block;
    max-width: 100%;
    position: relative;
    vertical-align: top;
    ${(props) => (props.isFullWidth ? "&, select {width: 100%;}" : "")}

    :not(.is-multiple):not(.is-loading)::after {
        border: 2px solid transparent;
        border-radius: 2px;
        border-right: 0;
        border-top: 0;
        content: " ";
        display: block;
        width: 0.425em;
        height: 0.425em;
        margin-top: -0.3375em;
        pointer-events: none;
        position: absolute;
        top: 50%;
        transform: rotate(-45deg);
        transform-origin: center;
    }

    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: none;
        display: inline-flex;
        font-size: 1.6rem;
        height: 2.5em;
        justify-content: flex-start;
        line-height: 1.5;
        padding-bottom: calc(0.5em - 1px);
        padding-left: calc(0.75em - 1px);
        padding-right: calc(0.75em - 1px);
        padding-top: calc(0.5em - 1px);
        position: relative;
        vertical-align: top;
        background-color: white;
        border-color: #dbdbdb;
        border-radius: 4px;
        color: #363636;
        cursor: pointer;
        display: block;
        font-size: 1em;
        max-width: 100%;
        outline: none;
    }

    select:focus,
    select:active {
        outline: none;
    }

    select::-moz-placeholder {
        color: #6f7279;
    }

    select::-webkit-input-placeholder {
        color: #6f7279;
    }

    select:-moz-placeholder {
        color: #6f7279;
    }

    select:-ms-input-placeholder {
        color: #6f7279;
    }

    select:hover {
        border-color: #b5b5b5;
    }

    select:focus,
    select:active {
        border-color: #112c55;
        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
    }

    :not(.is-multiple) {
        height: 2.5em;
    }

    :not(.is-multiple):not(.is-loading)::after {
        border-color: #112c55;
        right: 1.125em;
        z-index: 4;
    }

    @media (max-width: 768px) {
        &.is-fullwidth-mobile,
        &.is-fullwidth-mobile select {
            width: 100% !important;
        }
    }

    select::-ms-expand {
        display: none;
    }

    select:not([multiple]) {
        padding-right: 2.5em;
    }

    :not(.is-multiple):not(.is-loading):hover::after {
        border-color: #363636;
    }
`;

export const Checkbox = styled.div`
    position: relative;
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        &:not(:last-child) {
            margin-bottom: 5px;
        }
    }
    input {
        display: none;
        &:checked + span {
            background-color: ${(props) =>
                props.isLoading ? "#fff" : "#112c55"} !important;
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
        border: solid 2px #c3c2c9;
    }
    &:hover p {
        color: #47494a;
    }
    p {
        margin: 0;
        padding: 0;
        padding-left: 5px;
        font-size: 15px;
        color: #5d5f60;
        line-height: initial;
    }
`;

export const Radio = styled.div`
    position: relative;
    display: inline-block;
    &:not(:last-child) {
        margin-right: 10px;
    }
    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: 10px 15px;
        height: 40px;
        border: solid 1px #dbdbdb;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
    }
    input {
        display: none;
        &:checked + span {
            background-color: ${(props) =>
                props.isLoading ? "#fff" : "#112c55"} !important;
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
        border-radius: 10px;
        display: inline-block;
        border: solid 2px #c3c2c9;
    }
    &:hover p {
        color: #47494a;
    }
    p {
        margin: 0;
        padding: 0;
        padding-left: 5px;
        font-size: 15px;
        color: #5d5f60;
        line-height: initial;
        font-weight: normal;
    }
`;
