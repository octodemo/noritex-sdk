import React from "react";
export default function Icons({ icon, className }) {
    if (icon === "facebook") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="svg-inline--fa fa-facebook-f fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
            </svg>
        );
    }

    if (icon === "file") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file"
                className="svg-inline--fa fa-file fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
            >
                <path
                    fill="currentColor"
                    d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
                />
            </svg>
        );
    }

    if (icon === "instagram") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
            </svg>
        );
    }

    if (icon === "linkedin") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
            </svg>
        );
    }

    if (icon === "lock") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="lock"
                className="svg-inline--fa fa-lock fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                />
            </svg>
        );
    }

    if (icon === "send") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="paper-plane"
                className="svg-inline--fa fa-paper-plane fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"
                />
            </svg>
        );
    }

    if (icon === "store") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="store"
                className="svg-inline--fa fa-store fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 616 512"
            >
                <path
                    fill="currentColor"
                    d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"
                />
            </svg>
        );
    }

    if (icon === "twitter") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="svg-inline--fa fa-twitter fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
            </svg>
        );
    }

    if (icon === "user") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-alt"
                className="svg-inline--fa fa-user-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
                />
            </svg>
        );
    }

    if (icon === "sort") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sort-amount-down"
                className="svg-inline--fa fa-sort-amount-down fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                />
            </svg>
        );
    }

    if (icon === "eye") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="eye"
                className="svg-inline--fa fa-eye fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
            >
                <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                />
            </svg>
        );
    }

    if (icon === "th") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="th"
                className="svg-inline--fa fa-th fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
                />
            </svg>
        );
    }

    if (icon === "thlarge") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="th-large"
                className="svg-inline--fa fa-th-large fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
                />
            </svg>
        );
    }

    if (icon === "cart-plus") {
        return (
            <svg
                with="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="cart-plus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-cart-plus fa-w-18"
            >
                <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64s64-28.654 64-64c0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM464 424c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm-256 0c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm279.438-152H184.98l-31.31-160h368.548l-34.78 160zM272 200v-16c0-6.627 5.373-12 12-12h32v-32c0-6.627 5.373-12 12-12h16c6.627 0 12 5.373 12 12v32h32c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12h-32v32c0 6.627-5.373 12-12 12h-16c-6.627 0-12-5.373-12-12v-32h-32c-6.627 0-12-5.373-12-12z"
                />
            </svg>
        );
    }

    if (icon === "grip") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="grip-horizontal"
                className="svg-inline--fa fa-grip-horizontal fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
                />
            </svg>
        );
    }

    if (icon === "print") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                className="svg-inline--fa fa-print fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                />
            </svg>
        );
    }

    if (icon === "share") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="share-alt"
                className="svg-inline--fa fa-share-alt fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
                />
            </svg>
        );
    }

    if (icon === "minu") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="minus"
                className="svg-inline--fa fa-minus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
            </svg>
        );
    }

    if (icon === "chevron-left") {
        return (
            <svg
                width="10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-left"
                className="svg-inline--fa fa-chevron-left fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                />
            </svg>
        );
    }

    if (icon === "chevron-right") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-right"
                className="svg-inline--fa fa-chevron-right fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                />
            </svg>
        );
    }

    if (icon === "close") {
        return (
            <svg
                width="10px"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="svg-inline--fa fa-times fa-w-10"
            >
                <path
                    fill="currentColor"
                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                />
            </svg>
        );
    }

    if (icon === "chevron-down") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                className={`svg-inline--fa fa-chevron-down fa-w-14 ${className}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                />
            </svg>
        );
    }

    if (icon === "angle-down") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-double-down"
                class="svg-inline--fa fa-angle-double-down fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
                ></path>
            </svg>
        );
    }

    if (icon === "chevron-up") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-up"
                className={`svg-inline--fa fa-chevron-up fa-w-14 ${className}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                />
            </svg>
        );
    }

    if (icon === "angle-up") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-double-up"
                className="svg-inline--fa fa-angle-double-up fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
                />
            </svg>
        );
    }

    if (icon === "plus") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                className="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                />
            </svg>
        );
    }

    if (icon === "filter") {
        return (
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="filter"
                className={`svg-inline--fa fa-filter fa-w-16 ${className}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path
                    fill="currentColor"
                    d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
                />
            </svg>
        );
    }

    if (icon === "chevron-right") {
        return (
            <svg 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="chevron-right" 
                class="svg-inline--fa fa-chevron-right fa-w-10" 
                role="img" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 512">
                <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
        );
    }

    if (icon === "chevron-left") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
        );
    }

    if (icon === "chevron-double-left") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-double-left fa-w-14"><path fill="currentColor" d="M390.3 473.9L180.9 264.5c-4.7-4.7-4.7-12.3 0-17L390.3 38.1c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L246.4 256l180.7 181.1c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0zm-143 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17L86.4 256 267.1 74.9c4.7-4.7 4.7-12.3 0-17l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L20.9 247.5c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0z" class=""></path></svg>
        );
    }
    if (icon === "chevron-double-right") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-double-right fa-w-14"><path fill="currentColor" d="M57.7 38.1l209.4 209.4c4.7 4.7 4.7 12.3 0 17L57.7 473.9c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L201.6 256 20.9 74.9c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0zm143 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L361.6 256 180.9 437.1c-4.7 4.7-4.7 12.3 0 17l19.8 19.8c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17L217.7 38.1c-4.7-4.7-12.3-4.7-17 0z" class=""></path></svg>
        );
    }
    if (icon === "file-export") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-export" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-file-export fa-w-18"><path fill="currentColor" d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" class=""></path></svg>
        );
    }
    if (icon === "upload-solid") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
        );
    }
    if (icon === "images-solid") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="images" class="svg-inline--fa fa-images fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"></path></svg>
        );
    }
    if (icon === "ellipsis-v") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis-v" role="img" viewBox="0 0 128 512" class="svg-inline--fa fa-ellipsis-v fa-w-4"><path fill="currentColor" d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z" class=""></path></svg>
        );
    }
    if (icon === "ellipsis-h") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-ellipsis-h fa-w-16"><path fill="currentColor" d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" class=""></path></svg>
        );
    }
    if (icon === "long-arrow-left") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-left" role="img" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-left fa-w-14"><path fill="currentColor" d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
        );
    }
    if (icon === "long-arrow-right") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-right fa-w-14"><path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>
        );
    }
    if (icon === "empty") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="transporter-empty" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-transporter-empty fa-w-16"><path fill="currentColor" d="M509.791,268.419l-29.78607-12.42-12.4203-29.78527a3.99315,3.99315,0,0,0-7.15451,0L448.00977,255.999l-29.78607,12.42a3.99924,3.99924,0,0,0,0,7.15433l29.78607,12.42,12.4203,29.78527a3.99471,3.99471,0,0,0,7.15451,0l12.4203-29.78527,29.78607-12.42a4.00082,4.00082,0,0,0,0-7.15433ZM63.99023,32.00208,51.56993,2.21876a3.99314,3.99314,0,0,0-7.15451,0L31.99512,32.00208,2.20905,44.422a4.0024,4.0024,0,0,0,0,7.15628l29.78607,12.42,12.4203,29.78332a3.99314,3.99314,0,0,0,7.15451,0l12.4203-29.78332,29.78607-12.42a4.00082,4.00082,0,0,0,0-7.15628ZM384.00977,463.99982H128.002a31.99963,31.99963,0,0,0-32.001,32.00012V512H416.01074V495.99994A31.99963,31.99963,0,0,0,384.00977,463.99982Z" class=""></path></svg>
        );
    }
    if (icon === "receipt") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="receipt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-receipt fa-w-14"><path fill="currentColor" d="M344 240H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM418.1 0c-5.8 0-11.8 1.8-17.3 5.7L357.3 37 318.7 9.2c-8.4-6-18.2-9.1-28.1-9.1-9.8 0-19.6 3-28 9.1L224 37 185.4 9.2C177 3.2 167.1.1 157.3.1s-19.6 3-28 9.1L90.7 37 47.2 5.7C41.8 1.8 35.8 0 29.9 0 14.4.1 0 12.3 0 29.9v452.3C0 499.5 14.3 512 29.9 512c5.8 0 11.8-1.8 17.3-5.7L90.7 475l38.6 27.8c8.4 6 18.2 9.1 28.1 9.1 9.8 0 19.6-3 28-9.1L224 475l38.6 27.8c8.4 6 18.3 9.1 28.1 9.1s19.6-3 28-9.1l38.6-27.8 43.5 31.3c5.4 3.9 11.4 5.7 17.3 5.7 15.5 0 29.8-12.2 29.8-29.8V29.9C448 12.5 433.7 0 418.1 0zM416 477.8L376 449l-18.7-13.5-18.7 13.5-38.6 27.8c-2.8 2-6 3-9.3 3-3.4 0-6.6-1.1-9.4-3.1L242.7 449 224 435.5 205.3 449l-38.6 27.8c-2.8 2-6 3-9.4 3-3.4 0-6.6-1.1-9.4-3.1L109.3 449l-18.7-13.5L72 449l-40 29.4V34.2L72 63l18.7 13.5L109.4 63 148 35.2c2.8-2 6-3 9.3-3 3.4 0 6.6 1.1 9.4 3.1L205.3 63 224 76.5 242.7 63l38.6-27.8c2.8-2 6-3 9.4-3 3.4 0 6.6 1.1 9.4 3.1L338.7 63l18.7 13.5L376 63l40-28.8v443.6zM344 144H104c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" class=""></path></svg>
        );
    }
    if (icon === "stream") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="stream" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-stream fa-w-16"><path fill="currentColor" d="M8 128h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm496 112H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-64 144H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z" class=""></path></svg>
        );
    }
    if (icon === "image") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-image fa-w-16"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" class=""></path></svg>
        );
    }
    if (icon === "plus-square") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus-square fa-w-14"><path fill="currentColor" d="M400 64c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352m0-32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-60 206h-98v-98c0-6.6-5.4-12-12-12h-12c-6.6 0-12 5.4-12 12v98h-98c-6.6 0-12 5.4-12 12v12c0 6.6 5.4 12 12 12h98v98c0 6.6 5.4 12 12 12h12c6.6 0 12-5.4 12-12v-98h98c6.6 0 12-5.4 12-12v-12c0-6.6-5.4-12-12-12z" class=""></path></svg>
        );
    }
    if (icon === "search") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
        );
    }
    if (icon === "logotipo") {
        return (
            <svg class="logo-svg" version="1.0" xmlns="http://www.w3.org/2000/svg" width="209" height="45" viewBox="0 0 3028.000000 658.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g class="fill-logo" transform="translate(0.000000,658.000000) scale(0.100000,-0.100000)" stroke="none"><path class="an" d="M11730 5129 c-405 -42 -751 -200 -1015 -464 -172 -172 -290 -357
                -380 -600 -94 -250 -129 -469 -130 -795 0 -402 60 -692 204 -985 164 -332 391
                -561 716 -720 419 -206 997 -241 1464 -89 617 201 1005 695 1118 1424 25 161
                25 558 0 720 -136 884 -683 1426 -1526 1510 -120 12 -329 11 -451 -1z m420
                -564 c282 -42 508 -182 662 -408 57 -84 132 -247 163 -352 87 -303 93 -728 15
                -1035 -72 -279 -226 -518 -420 -650 -248 -168 -588 -221 -904 -140 -385 98
                -652 416 -748 893 -21 101 -23 140 -23 392 0 268 2 286 28 409 88 408 301 696
                612 825 176 74 405 98 615 66z"></path><path d="M1454 5051 c-58 -35 -59 -45 -59 -501 0 -378 2 -418 18 -447 36 -67
                -47 -63 1267 -63 1297 0 1238 3 1277 -56 17 -27 18 -88 23 -1239 5 -1167 6
                -1211 24 -1238 39 -57 38 -57 493 -57 468 0 471 0 505 70 17 33 18 137 18
                1738 0 1874 4 1751 -62 1792 -33 20 -45 20 -1753 20 -1665 0 -1721 -1 -1751
                -19z"></path><path class="an" d="M6330 3260 l0 -1810 330 0 330 0 0 968 c0 873 -6 1229 -26 1586 -4
                80 -3 117 4 115 6 -2 63 -92 128 -199 138 -229 267 -431 372 -585 75 -109
                1263 -1790 1309 -1852 l24 -33 350 0 349 0 0 1810 0 1810 -336 0 -336 0 5
                -1052 c3 -585 10 -1153 17 -1278 6 -124 10 -252 8 -284 l-3 -60 -120 200
                c-212 353 -328 522 -1150 1684 -115 162 -287 406 -384 543 l-174 247 -349 0
                -348 0 0 -1810z"></path><path class="an" d="M14430 3261 l0 -1811 335 0 335 0 0 700 0 700 228 0 227 0 212 -303
                c117 -166 307 -437 423 -602 116 -165 242 -344 278 -397 l67 -97 398 -1 c316
                0 397 3 391 13 -9 14 -97 137 -239 332 -539 741 -818 1131 -819 1143 -1 9 30
                24 84 43 47 15 139 55 205 88 217 109 362 251 456 446 58 121 87 228 97 362
                44 600 -265 999 -880 1132 -235 51 -287 54 -1065 58 l-733 4 0 -1810z m1500
                1235 c350 -57 500 -208 500 -501 0 -259 -124 -428 -377 -516 -137 -47 -258
                -60 -615 -66 l-338 -5 0 557 0 558 368 -6 c261 -4 394 -10 462 -21z"></path><path class="an" d="M17920 3260 l0 -1810 330 0 330 0 0 1810 0 1810 -330 0 -330 0 0
                -1810z"></path><path class="an" d="M19090 4795 l0 -275 585 0 585 0 0 -1535 0 -1535 335 0 335 0 0 1535
                0 1535 580 0 580 0 0 275 0 275 -1500 0 -1500 0 0 -275z"></path><path class="an" d="M22610 3260 l0 -1810 1220 0 1220 0 0 275 0 275 -890 0 -890 0 0 515
                0 515 725 0 725 0 0 275 0 275 -725 0 -725 0 0 470 0 470 845 0 845 0 0 275 0
                275 -1175 0 -1175 0 0 -1810z"></path><path class="an" d="M25440 5066 c0 -4 224 -322 830 -1176 91 -129 224 -316 293 -414 70
                -99 126 -185 123 -191 -3 -9 -1078 -1517 -1273 -1788 l-35 -47 378 2 378 3 47
                66 c108 152 655 938 773 1112 70 103 130 187 134 187 4 -1 45 -58 92 -128 80
                -120 303 -442 689 -994 l173 -248 375 0 375 0 -18 27 c-10 16 -305 430 -656
                921 l-638 893 118 167 c65 92 146 205 179 252 33 47 253 357 488 690 236 333
                439 620 453 638 l24 32 -383 0 -384 0 -195 -282 c-107 -155 -256 -371 -330
                -479 -75 -108 -185 -271 -245 -362 -61 -92 -113 -166 -117 -164 -4 1 -74 101
                -155 222 -82 121 -280 410 -442 643 l-293 422 -379 0 c-208 0 -379 -2 -379 -4z"></path><path d="M1471 3763 c-19 -10 -44 -31 -55 -46 -20 -28 -21 -39 -21 -456 0
                -391 1 -429 18 -454 42 -64 15 -62 632 -67 522 -5 563 -6 589 -23 56 -37 56
                -38 56 -629 0 -521 1 -544 20 -575 39 -64 34 -64 511 -61 l431 3 34 37 34 38
                0 1077 c0 836 -3 1083 -13 1102 -6 13 -25 34 -40 45 -28 21 -30 21 -1095 24
                -1001 2 -1069 1 -1101 -15z"></path><path d="M1435 2446 c-18 -19 -35 -49 -39 -66 -10 -53 -7 -791 4 -831 5 -19
                24 -48 41 -65 l30 -29 432 -3 c419 -2 433 -2 465 18 62 38 63 45 60 516 l-3
                426 -37 34 -38 34 -441 0 -442 0 -32 -34z"></path></g>
            </svg>
        );
    }
    if (icon === "ntx-media") {
        return (
            <svg width="10px" viewBox="0 0 131 190" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M79,85.6 L16.6,39.8 C9.8,34.8 0.1,39.7 0.1,48.1 C0.1,51.4 1.7,54.5 4.3,56.4 L46,87 C50.1,91.1 50.1,97.7 46,101.7 L4.3,132.3 C1.6,134.2 0.1,137.3 0.1,140.6 C0.1,149.1 9.7,154 16.6,148.9 L79,103.1 C83.9,98.5 83.9,90.5 79,85.6 Z" id="Shape"></path>
                <path d="M124.9,82.3 L16.7,2.4 C9.9,-2.6 0.2,2.2 0.2,10.7 C0.2,14 1.8,17.1 4.5,19.1 L93.3,83.8 C99.2,89.7 99.2,99.3 93.3,105.2 L4.5,170.4 C1.8,172.3 0.3,175.4 0.3,178.7 L0.3,179.4 C0.3,187.9 10,192.8 16.9,187.7 L125.1,106.7 C131.7,100 131.7,89 124.9,82.3 Z" id="Shape"></path>
                <path d="M30,89 L16.7,79.2 C9.9,74.2 0.2,79.1 0.2,87.5 L0.2,101.4 C0.2,109.9 9.8,114.8 16.7,109.7 L30,99.9 C33,96.9 33,92 30,89 Z" id="Shape"></path>
            </svg>
        );
    }
    if (icon === "megaphone") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="megaphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-megaphone fa-w-18"><path fill="currentColor" d="M32 176c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32 11.38 0 20.9-6.28 26.57-15.22l106.99 32.3c-3.35 9.76-5.56 20.04-5.56 30.92 0 52.94 43.06 96 96 96 44.49 0 81.66-30.57 92.5-71.7L480 448V64L58.57 191.22C52.9 182.28 43.38 176 32 176zm179.29 190.88l91.47 27.61C297.95 415.92 278.85 432 256 432c-26.47 0-48-21.53-48-48 0-6.05 1.24-11.79 3.29-17.12zM560 32h-32c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16z" class=""></path></svg>
        );
    }
    if (icon === "question-circle") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-question-circle fa-w-16"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z" class=""></path></svg>
        );
    }
    if (icon === "graduation-cap") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-graduation-cap fa-w-20"><path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" class=""></path></svg>
        );
    }
    if (icon === "comments") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-comments fa-w-18"><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z" class=""></path></svg>
        );
    }
    if (icon === "images") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="images" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-images fa-w-18"><path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" class=""></path></svg>
        );
    }
    if (icon === "user-cog") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-user-cog fa-w-20"><path fill="currentColor" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z" class=""></path></svg>
        );
    }
    if (icon === "lightbulb") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-lightbulb fa-w-11"><path fill="currentColor" d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" class=""></path></svg>
        );
    }
    if (icon === "hotjar") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="hotjar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-hotjar fa-w-14"><path fill="currentColor" d="M414.9 161.5C340.2 29 121.1 0 121.1 0S222.2 110.4 93 197.7C11.3 252.8-21 324.4 14 402.6c26.8 59.9 83.5 84.3 144.6 93.4-29.2-55.1-6.6-122.4-4.1-129.6 57.1 86.4 165 0 110.8-93.9 71 15.4 81.6 138.6 27.1 215.5 80.5-25.3 134.1-88.9 148.8-145.6 15.5-59.3 3.7-127.9-26.3-180.9z" class=""></path></svg>
        );
    }
    if (icon === "conceptslife") {
        return (
            <svg width="10px" viewBox="0 0 160 160" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M0,0 L159.89,0 L159.89,159.89 L0,159.89 L0,0 Z M80,37 L80,65.52 L108.52,65.52 L108.52,37 L80,37 Z M51.48,65.74 L51.48,94.26 L80,94.26 L80,65.74 L51.48,65.74 Z M80,94.26 L80,122.78 L108.52,122.78 L108.52,94.26 L80,94.26 Z" id="Combined-Shape" fill="#CBCBCB" fill-rule="nonzero"></path>
                </g>
            </svg>
        );
    }
    if (icon === "history") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="history" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-history fa-w-16"><path fill="currentColor" d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z" class=""></path></svg>
        );
    }
    if (icon === "newspaper") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-newspaper fa-w-18"><path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" class=""></path></svg>
        );
    }
    if (icon === "file-excel") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-excel" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-file-excel fa-w-12"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" class=""></path></svg>
        );
    }
    if (icon === "sync-alt") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync-alt fa-w-16"><path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" class=""></path></svg>
        );
    }
    if (icon === "eraser") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eraser" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-eraser fa-w-16"><path fill="currentColor" d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z" class=""></path></svg>
        );
    }
    if (icon === "list") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-list fa-w-16"><path fill="currentColor" d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z" class=""></path></svg>
        );
    }
    if (icon === "th-list") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="th-list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-th-list fa-w-16"><path fill="currentColor" d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H197.333v-96H472v96zm0 40v84c0 6.627-5.373 12-12 12H197.333v-96H472zM40 208h117.333v96H40v-96zm157.333-40V72H460c6.627 0 12 5.373 12 12v84H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84z" class=""></path></svg>
        );
    }
    if (icon === "trash-alt") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-trash-alt fa-w-14"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" class=""></path></svg>
        );
    }
    if (icon === "pen") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-pen fa-w-16"><path fill="currentColor" d="M493.26 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.25 18.74l-74.49 74.49L256 127.98 12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.79-.05 2.69-.15l114.14-12.61L384.02 256l34.74-34.74 74.49-74.49c25-25 25-65.52.01-90.51zM118.75 453.39l-67.58 7.46 7.53-67.69 231.24-231.24 31.02-31.02 60.14 60.14-31.02 31.02-231.33 231.33zm340.56-340.57l-44.28 44.28-60.13-60.14 44.28-44.28c4.08-4.08 8.84-4.69 11.31-4.69s7.24.61 11.31 4.69l37.51 37.51c6.24 6.25 6.24 16.4 0 22.63z" class=""></path></svg>
        );
    }
    if (icon === "table") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-table fa-w-16"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z" class=""></path></svg>
        );
    }
    if (icon === "shopping-cart") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z" class=""></path></svg>
        );
    }
    if (icon === "globe") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-globe fa-w-16"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z" class=""></path></svg>
        );
    }
    if (icon === "appstore") {
        return (
            <svg width="99px" viewBox="0 0 99 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M4,0 L95,0 C97.209139,-4.05812251e-16 99,1.790861 99,4 L99,33 C99,35.209139 97.209139,37 95,37 L4,37 C1.790861,37 2.705415e-16,35.209139 0,33 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z M19.8628314,10.4872705 C20.6745401,9.54485956 21.0816327,8.52680806 21.0816327,7.43621165 C21.0816327,7.29166018 21.0748913,7.14576279 21.0582444,7 C20.4929375,7.02866803 19.8917227,7.19623468 19.255976,7.49933515 C18.618991,7.80701174 18.0938567,8.19261691 17.6808483,8.65641986 C16.8534558,9.57245086 16.3877551,10.692792 16.3877551,11.7396462 C16.3877551,11.8843322 16.397248,12.0220195 16.4136197,12.152708 C17.6984583,12.2549977 18.8832778,11.6076117 19.8628314,10.4872705 Z M24.6622639,22.8890653 C23.6230168,21.9296614 23.0941559,20.7210653 23.0786426,19.2691767 C23.0617191,17.4050114 23.9119865,15.9518586 25.6312782,14.9143538 C24.6708667,13.554613 23.2267237,12.7998725 21.3044904,12.6453565 C20.5951115,12.5853762 19.7291898,12.7376447 18.7031996,13.1053928 C17.6183999,13.5019371 16.9782666,13.7008413 16.789569,13.7008413 C16.536844,13.7008413 15.9608792,13.5307332 15.0636489,13.195293 C14.1638801,12.8609766 13.4398342,12.6908685 12.8877034,12.6908685 C11.8786366,12.7075843 10.941636,12.9688569 10.0744451,13.4815691 C9.20725413,13.9942813 8.51437575,14.6926936 7.99355347,15.5780703 C7.33085542,16.6803313 7,17.9956839 7,19.5207569 C7,20.8522634 7.24539149,22.2273154 7.7349052,23.6473175 C8.1919821,24.9622487 8.77542152,26.1153595 9.48508242,27.1098807 C10.1465112,28.0413312 10.698642,28.6987266 11.1400647,29.0822072 C11.8316738,29.7226059 12.5245522,30.0274238 13.219687,29.9980657 C13.6767639,29.9827546 14.2745884,29.826553 15.0166861,29.5274943 C15.7576555,29.2295593 16.4503929,29.0822072 17.0961674,29.0822072 C17.7120436,29.0822072 18.385742,29.2295593 19.1186727,29.5274943 C19.849206,29.826553 20.4767877,29.974186 20.9970459,29.974186 C21.722079,29.9571892 22.39888,29.6609399 23.0306926,29.0822072 C23.4384091,28.7294893 23.9672701,28.094569 24.6131856,27.1773058 C25.086904,26.5044589 25.4960308,25.7726149 25.8415533,24.9775598 C25.9839932,24.640434 26.1179713,24.2892612 26.244898,23.9226369 C25.6593431,23.6783612 25.1333027,23.3343523 24.6622639,22.8890653 Z" id="Combined-Shape" fill="#454545"></path>
                    <path d="M30.735,9.3341339 L33.3826963,9.3341339 C34.0468675,9.3341339 34.6362358,9.46576946 35.1508189,9.72904454 C35.665402,9.99231961 36.0647963,10.3617967 36.3490137,10.8374869 C36.6332311,11.3131771 36.7753377,11.8591655 36.7753377,12.4754685 C36.7753377,13.0917715 36.6332311,13.6377599 36.3490137,14.1134501 C36.0647963,14.5891403 35.665402,14.9586174 35.1508189,15.2218925 C34.6362358,15.4851675 34.0468675,15.6168031 33.3826963,15.6168031 L30.735,15.6168031 L30.735,9.3341339 Z M33.3288449,14.8359571 C33.8374444,14.8359571 34.2847062,14.7372304 34.6706435,14.5397741 C35.0565808,14.3423178 35.3542567,14.0655839 35.56368,13.7095642 C35.7731034,13.3535445 35.8778135,12.9421834 35.8778135,12.4754685 C35.8778135,12.0087536 35.7731034,11.5973925 35.56368,11.2413728 C35.3542567,10.8853531 35.0565808,10.6086192 34.6706435,10.4111629 C34.2847062,10.2137066 33.8374444,10.1149799 33.3288449,10.1149799 L31.6325242,10.1149799 L31.6325242,14.8359571 L33.3288449,14.8359571 Z M38.0228963,10.859925 L38.8845195,10.859925 L38.8845195,15.6168031 L38.0228963,15.6168031 L38.0228963,10.859925 Z M38.0363591,9.78289599 C37.9256639,9.67519255 37.8703172,9.54355698 37.8703172,9.38798535 C37.8703172,9.23241372 37.9256639,9.09928229 38.0363591,8.98858709 C38.1470543,8.87789189 38.2861692,8.82254512 38.4537079,8.82254512 C38.6212466,8.82254512 38.7603614,8.87490017 38.8710566,8.97961185 C38.9817518,9.08432353 39.0370986,9.21446323 39.0370986,9.37003487 C39.0370986,9.53159003 38.9817518,9.66771316 38.8710566,9.77840837 C38.7603614,9.88910357 38.6212466,9.94445034 38.4537079,9.94445034 C38.2861692,9.94445034 38.1470543,9.89059943 38.0363591,9.78289599 Z M40.7693202,15.5135878 C40.4103088,15.4088761 40.1290874,15.2757447 39.9256475,15.1141896 L40.2846572,14.4320712 C40.4940805,14.5816593 40.7483765,14.701328 41.0475527,14.7910809 C41.346729,14.8808337 41.6488924,14.9257095 41.9540522,14.9257095 C42.7079762,14.9257095 43.0849326,14.7103058 43.0849326,14.2794921 C43.0849326,14.1358875 43.0340734,14.0222022 42.9323535,13.9384329 C42.8306336,13.8546636 42.7034856,13.7933334 42.5509057,13.7544404 C42.3983259,13.7155475 42.1814263,13.6721676 41.9002007,13.6242994 C41.5172551,13.5644642 41.2046207,13.4956547 40.9622879,13.4178689 C40.7199552,13.3400831 40.5120309,13.2084475 40.3385086,13.0229582 C40.1649864,12.837469 40.0782266,12.5771896 40.0782266,12.2421122 C40.0782266,11.8112985 40.2577297,11.4657551 40.6167411,11.2054718 C40.9757526,10.9451885 41.4574191,10.8150488 42.0617551,10.8150488 C42.3788818,10.8150488 42.6960039,10.8539411 43.0131307,10.9317269 C43.3302575,11.0095127 43.5905369,11.1142228 43.7939767,11.2458604 L43.4259918,11.9279788 C43.0370627,11.6766707 42.57933,11.5510186 42.0527798,11.5510186 C41.6877848,11.5510186 41.4095551,11.610853 41.2180823,11.7305234 C41.0266096,11.8501939 40.9308746,12.0087549 40.9308746,12.2062113 C40.9308746,12.3617829 40.9847255,12.4844433 41.0924289,12.5741962 C41.2001324,12.663949 41.3332638,12.7297668 41.4918272,12.7716515 C41.6503906,12.8135362 41.8732735,12.8614036 42.1604827,12.9152553 C42.5434283,12.9810741 42.853071,13.0513795 43.0894202,13.1261735 C43.3257694,13.2009676 43.5277104,13.3281156 43.695249,13.5076213 C43.8627877,13.687127 43.9465558,13.9384313 43.9465558,14.2615416 C43.9465558,14.6923554 43.7625652,15.034907 43.3945785,15.2892068 C43.0265917,15.5435066 42.525479,15.6706546 41.8912255,15.6706546 C41.5022964,15.6706546 41.1283317,15.6182995 40.7693202,15.5135878 Z M48.7842111,11.120207 C49.1492061,11.3236468 49.4349151,11.60786 49.6413467,11.972855 C49.8477783,12.33785 49.9509925,12.7596821 49.9509925,13.238364 C49.9509925,13.717046 49.8477783,14.140374 49.6413467,14.5083608 C49.4349151,14.8763475 49.1492061,15.1620565 48.7842111,15.3654963 C48.4192161,15.5689362 48.0063591,15.6706546 47.5456277,15.6706546 C47.2045669,15.6706546 46.8919324,15.6048368 46.607715,15.4731992 C46.3234976,15.3415617 46.0826643,15.1500918 45.885208,14.8987838 L45.885208,17.358 L45.0235848,17.358 L45.0235848,10.859925 L45.8493071,10.859925 L45.8493071,11.6138453 C46.0407798,11.3505702 46.2831089,11.151621 46.5763016,11.0169917 C46.8694943,10.8823624 47.1925998,10.8150488 47.5456277,10.8150488 C48.0063591,10.8150488 48.4192161,10.9167672 48.7842111,11.120207 Z M48.2950604,14.7058161 C48.5373932,14.5652032 48.7288631,14.3677499 48.8694759,14.1134501 C49.0100887,13.8591503 49.0803941,13.5674579 49.0803941,13.238364 C49.0803941,12.9092702 49.0100887,12.6175778 48.8694759,12.363278 C48.7288631,12.1089782 48.5373932,11.9130207 48.2950604,11.7753996 C48.0527277,11.6377786 47.7789856,11.5689691 47.4738258,11.5689691 C47.1746496,11.5689691 46.9038992,11.6392744 46.6615664,11.7798873 C46.4192337,11.9205001 46.2277638,12.1164576 46.087151,12.3677656 C45.9465381,12.6190736 45.8762328,12.9092702 45.8762328,13.238364 C45.8762328,13.5674579 45.9450423,13.8591503 46.0826633,14.1134501 C46.2202844,14.3677499 46.4117543,14.5652032 46.6570788,14.7058161 C46.9024033,14.8464289 47.1746496,14.9167343 47.4738258,14.9167343 C47.7789856,14.9167343 48.0527277,14.8464289 48.2950604,14.7058161 Z M51.9075952,15.3565211 C51.5306332,15.1470977 51.235949,14.858397 51.0235339,14.4904103 C50.8111188,14.1224235 50.7049128,13.705079 50.7049128,13.238364 C50.7049128,12.7716491 50.8111188,12.3543046 51.0235339,11.9863178 C51.235949,11.6183311 51.5306332,11.3311262 51.9075952,11.1246946 C52.2845573,10.918263 52.7093811,10.8150488 53.1820795,10.8150488 C53.654778,10.8150488 54.078106,10.918263 54.4520763,11.1246946 C54.8260465,11.3311262 55.1192348,11.6183311 55.3316499,11.9863178 C55.5440651,12.3543046 55.650271,12.7716491 55.650271,13.238364 C55.650271,13.705079 55.5440651,14.1224235 55.3316499,14.4904103 C55.1192348,14.858397 54.8260465,15.1470977 54.4520763,15.3565211 C54.078106,15.5659444 53.654778,15.6706546 53.1820795,15.6706546 C52.7093811,15.6706546 52.2845573,15.5659444 51.9075952,15.3565211 Z M54.0033142,14.7058161 C54.2456469,14.5652032 54.435621,14.3677499 54.573242,14.1134501 C54.7108631,13.8591503 54.7796726,13.5674579 54.7796726,13.238364 C54.7796726,12.9092702 54.7108631,12.6175778 54.573242,12.363278 C54.435621,12.1089782 54.2456469,11.9130207 54.0033142,11.7753996 C53.7609814,11.6377786 53.4872393,11.5689691 53.1820795,11.5689691 C52.8769198,11.5689691 52.6031777,11.6377786 52.3608449,11.7753996 C52.1185122,11.9130207 51.9270423,12.1089782 51.7864295,12.363278 C51.6458166,12.6175778 51.5755113,12.9092702 51.5755113,13.238364 C51.5755113,13.5674579 51.6458166,13.8591503 51.7864295,14.1134501 C51.9270423,14.3677499 52.1185122,14.5652032 52.3608449,14.7058161 C52.6031777,14.8464289 52.8769198,14.9167343 53.1820795,14.9167343 C53.4872393,14.9167343 53.7609814,14.8464289 54.0033142,14.7058161 Z M60.8244979,11.3401004 C61.1805176,11.6901366 61.3585248,12.2032161 61.3585248,12.8793544 L61.3585248,15.6168031 L60.4969016,15.6168031 L60.4969016,12.978082 C60.4969016,12.5173507 60.386208,12.1703115 60.1648176,11.936954 C59.9434272,11.7035965 59.6263052,11.5869196 59.213442,11.5869196 C58.7467271,11.5869196 58.3787459,11.7230427 58.1094873,11.9952931 C57.8402287,12.2675434 57.7056014,12.6579625 57.7056014,13.1665621 L57.7056014,15.6168031 L56.8439782,15.6168031 L56.8439782,10.859925 L57.6697004,10.859925 L57.6697004,11.5779443 C57.8432226,11.3326198 58.0780724,11.1441416 58.3742569,11.0125041 C58.6704413,10.8808666 59.0070095,10.8150488 59.3839716,10.8150488 C59.9883075,10.8150488 60.4684782,10.9900642 60.8244979,11.3401004 Z M62.9561178,10.859925 L63.817741,10.859925 L63.817741,15.6168031 L62.9561178,15.6168031 L62.9561178,10.859925 Z M62.9695806,9.78289599 C62.8588854,9.67519255 62.8035387,9.54355698 62.8035387,9.38798535 C62.8035387,9.23241372 62.8588854,9.09928229 62.9695806,8.98858709 C63.0802758,8.87789189 63.2193907,8.82254512 63.3869294,8.82254512 C63.5544681,8.82254512 63.6935829,8.87490017 63.8042781,8.97961185 C63.9149733,9.08432353 63.9703201,9.21446323 63.9703201,9.37003487 C63.9703201,9.53159003 63.9149733,9.66771316 63.8042781,9.77840837 C63.6935829,9.88910357 63.5544681,9.94445034 63.3869294,9.94445034 C63.2193907,9.94445034 63.0802758,9.89059943 62.9695806,9.78289599 Z M69.2208365,11.120207 C69.5858315,11.3236468 69.8715405,11.60786 70.0779721,11.972855 C70.2844037,12.33785 70.3876179,12.7596821 70.3876179,13.238364 C70.3876179,13.717046 70.2844037,14.140374 70.0779721,14.5083608 C69.8715405,14.8763475 69.5858315,15.1620565 69.2208365,15.3654963 C68.8558415,15.5689362 68.4429845,15.6706546 67.9822531,15.6706546 C67.6292252,15.6706546 67.3061197,15.6018451 67.012927,15.464224 C66.7197343,15.3266029 66.4774052,15.1261579 66.2859325,14.8628828 L66.2859325,15.6168031 L65.4602102,15.6168031 L65.4602102,8.95717375 L66.3218334,8.95717375 L66.3218334,11.5779443 C66.5133062,11.3266363 66.7526436,11.1366623 67.0398528,11.0080165 C67.3270619,10.8793707 67.6411923,10.8150488 67.9822531,10.8150488 C68.4429845,10.8150488 68.8558415,10.9167672 69.2208365,11.120207 Z M68.7316858,14.7058161 C68.9740186,14.5652032 69.1654885,14.3677499 69.3061013,14.1134501 C69.4467141,13.8591503 69.5170195,13.5674579 69.5170195,13.238364 C69.5170195,12.9092702 69.4467141,12.6175778 69.3061013,12.363278 C69.1654885,12.1089782 68.9740186,11.9130207 68.7316858,11.7753996 C68.4893531,11.6377786 68.215611,11.5689691 67.9104512,11.5689691 C67.611275,11.5689691 67.3390287,11.6377786 67.0937042,11.7753996 C66.8483797,11.9130207 66.6569098,12.1089782 66.5192887,12.363278 C66.3816677,12.6175778 66.3128582,12.9092702 66.3128582,13.238364 C66.3128582,13.5674579 66.3816677,13.8591503 66.5192887,14.1134501 C66.6569098,14.3677499 66.8483797,14.5652032 67.0937042,14.7058161 C67.3390287,14.8464289 67.611275,14.9167343 67.9104512,14.9167343 C68.215611,14.9167343 68.4893531,14.8464289 68.7316858,14.7058161 Z M71.5813251,8.95717375 L72.4429483,8.95717375 L72.4429483,15.6168031 L71.5813251,15.6168031 L71.5813251,8.95717375 Z M78.3666078,13.5255718 L74.5072539,13.5255718 C74.5611056,13.9444185 74.7450962,14.2809867 75.0592312,14.5352865 C75.3733663,14.7895863 75.7637854,14.9167343 76.2305003,14.9167343 C76.7989351,14.9167343 77.2566679,14.7252643 77.6037123,14.3423188 L78.0794001,14.8987838 C77.8639932,15.1500918 77.5962345,15.3415617 77.276116,15.4731992 C76.9559974,15.6048368 76.5984872,15.6706546 76.2035746,15.6706546 C75.7009585,15.6706546 75.2551926,15.5674403 74.8662636,15.3610087 C74.4773345,15.1545771 74.1766669,14.8658764 73.9642518,14.4948979 C73.7518366,14.1239194 73.6456307,13.705079 73.6456307,13.238364 C73.6456307,12.7776327 73.7488449,12.361784 73.9552765,11.9908054 C74.1617081,11.6198269 74.4459213,11.3311262 74.8079245,11.1246946 C75.1699277,10.918263 75.5782971,10.8150488 76.033045,10.8150488 C76.4877928,10.8150488 76.8931705,10.918263 77.2491902,11.1246946 C77.6052099,11.3311262 77.8834396,11.6198269 78.0838877,11.9908054 C78.2843358,12.361784 78.3845583,12.7866078 78.3845583,13.2652898 C78.3845583,13.3311085 78.3785749,13.4178683 78.3666078,13.5255718 Z M74.9964046,11.9190035 C74.7181707,12.1703115 74.5551221,12.4994004 74.5072539,12.9062801 L77.5588361,12.9062801 C77.5109679,12.505384 77.3479193,12.1777909 77.0696854,11.9234911 C76.7914515,11.6691913 76.4459082,11.5420434 76.033045,11.5420434 C75.6201818,11.5420434 75.2746384,11.6676955 74.9964046,11.9190035 Z M86.2737958,13.5255718 L82.4144418,13.5255718 C82.4682936,13.9444185 82.6522842,14.2809867 82.9664192,14.5352865 C83.2805542,14.7895863 83.6709733,14.9167343 84.1376883,14.9167343 C84.7061231,14.9167343 85.1638558,14.7252643 85.5109002,14.3423188 L85.986588,14.8987838 C85.7711812,15.1500918 85.5034225,15.3415617 85.1833039,15.4731992 C84.8631854,15.6048368 84.5056751,15.6706546 84.1107625,15.6706546 C83.6081465,15.6706546 83.1623806,15.5674403 82.7734515,15.3610087 C82.3845224,15.1545771 82.0838548,14.8658764 81.8714397,14.4948979 C81.6590246,14.1239194 81.5528186,13.705079 81.5528186,13.238364 C81.5528186,12.7776327 81.6560329,12.361784 81.8624645,11.9908054 C82.0688961,11.6198269 82.3531092,11.3311262 82.7151124,11.1246946 C83.0771157,10.918263 83.4854851,10.8150488 83.9402329,10.8150488 C84.3949808,10.8150488 84.8003585,10.918263 85.1563782,11.1246946 C85.5123979,11.3311262 85.7906276,11.6198269 85.9910757,11.9908054 C86.1915237,12.361784 86.2917463,12.7866078 86.2917463,13.2652898 C86.2917463,13.3311085 86.2857628,13.4178683 86.2737958,13.5255718 Z M82.9035925,11.9190035 C82.6253586,12.1703115 82.46231,12.4994004 82.4144418,12.9062801 L85.466024,12.9062801 C85.4181558,12.505384 85.2551072,12.1777909 84.9768734,11.9234911 C84.6986395,11.6691913 84.3530961,11.5420434 83.9402329,11.5420434 C83.5273697,11.5420434 83.1818264,11.6676955 82.9035925,11.9190035 Z M91.4659731,11.3401004 C91.8219928,11.6901366 92,12.2032161 92,12.8793544 L92,15.6168031 L91.1383768,15.6168031 L91.1383768,12.978082 C91.1383768,12.5173507 91.0276833,12.1703115 90.8062929,11.936954 C90.5849024,11.7035965 90.2677804,11.5869196 89.8549172,11.5869196 C89.3882023,11.5869196 89.0202211,11.7230427 88.7509625,11.9952931 C88.4817039,12.2675434 88.3470766,12.6579625 88.3470766,13.1665621 L88.3470766,15.6168031 L87.4854534,15.6168031 L87.4854534,10.859925 L88.3111757,10.859925 L88.3111757,11.5779443 C88.4846979,11.3326198 88.7195477,11.1441416 89.0157321,11.0125041 C89.3119166,10.8808666 89.6484848,10.8150488 90.0254468,10.8150488 C90.6297828,10.8150488 91.1099534,10.9900642 91.4659731,11.3401004 Z" id="Disponible-en" fill="#FFFFFF"></path>
                    <path d="M36.528,25.2 L32.628,25.2 L31.884,27 L29.892,27 L33.636,18.6 L35.556,18.6 L39.312,27 L37.272,27 L36.528,25.2 Z M35.916,23.724 L34.584,20.508 L33.252,23.724 L35.916,23.724 Z M45.51,20.862 C46.0020025,21.1380014 46.3879986,21.5259975 46.668,22.026 C46.9480014,22.5260025 47.088,23.1079967 47.088,23.772 C47.088,24.4360033 46.9480014,25.0179975 46.668,25.518 C46.3879986,26.0180025 46.0020025,26.4059986 45.51,26.682 C45.0179975,26.9580014 44.472003,27.096 43.872,27.096 C43.0479959,27.096 42.4000024,26.8360026 41.928,26.316 L41.928,29.328 L40.056,29.328 L40.056,20.544 L41.844,20.544 L41.844,21.288 C42.3080023,20.7279972 42.9839956,20.448 43.872,20.448 C44.472003,20.448 45.0179975,20.5859986 45.51,20.862 Z M44.73,25.074 C45.0380015,24.7499984 45.192,24.3160027 45.192,23.772 C45.192,23.2279973 45.0380015,22.7940016 44.73,22.47 C44.4219985,22.1459984 44.0280024,21.984 43.548,21.984 C43.0679976,21.984 42.6740015,22.1459984 42.366,22.47 C42.0579985,22.7940016 41.904,23.2279973 41.904,23.772 C41.904,24.3160027 42.0579985,24.7499984 42.366,25.074 C42.6740015,25.3980016 43.0679976,25.56 43.548,25.56 C44.0280024,25.56 44.4219985,25.3980016 44.73,25.074 Z M53.79,20.862 C54.2820025,21.1380014 54.6679986,21.5259975 54.948,22.026 C55.2280014,22.5260025 55.368,23.1079967 55.368,23.772 C55.368,24.4360033 55.2280014,25.0179975 54.948,25.518 C54.6679986,26.0180025 54.2820025,26.4059986 53.79,26.682 C53.2979975,26.9580014 52.752003,27.096 52.152,27.096 C51.3279959,27.096 50.6800024,26.8360026 50.208,26.316 L50.208,29.328 L48.336,29.328 L48.336,20.544 L50.124,20.544 L50.124,21.288 C50.5880023,20.7279972 51.2639956,20.448 52.152,20.448 C52.752003,20.448 53.2979975,20.5859986 53.79,20.862 Z M53.01,25.074 C53.3180015,24.7499984 53.472,24.3160027 53.472,23.772 C53.472,23.2279973 53.3180015,22.7940016 53.01,22.47 C52.7019985,22.1459984 52.3080024,21.984 51.828,21.984 C51.3479976,21.984 50.9540015,22.1459984 50.646,22.47 C50.3379985,22.7940016 50.184,23.2279973 50.184,23.772 C50.184,24.3160027 50.3379985,24.7499984 50.646,25.074 C50.9540015,25.3980016 51.3479976,25.56 51.828,25.56 C52.3080024,25.56 52.7019985,25.3980016 53.01,25.074 Z M60.978,26.874 C60.3579969,26.6939991 59.8600019,26.4600014 59.484,26.172 L60.144,24.708 C60.5040018,24.9720013 60.9319975,25.1839992 61.428,25.344 C61.9240025,25.5040008 62.4199975,25.584 62.916,25.584 C63.4680028,25.584 63.8759987,25.5020008 64.14,25.338 C64.4040013,25.1739992 64.536,24.9560014 64.536,24.684 C64.536,24.483999 64.4580008,24.3180007 64.302,24.186 C64.1459992,24.0539993 63.9460012,23.9480004 63.702,23.868 C63.4579988,23.7879996 63.1280021,23.7000005 62.712,23.604 C62.0719968,23.4519992 61.548002,23.3000008 61.14,23.148 C60.731998,22.9959992 60.3820015,22.7520017 60.09,22.416 C59.7979985,22.0799983 59.652,21.6320028 59.652,21.072 C59.652,20.5839976 59.7839987,20.142002 60.048,19.746 C60.3120013,19.349998 60.7099973,19.0360012 61.242,18.804 C61.7740027,18.5719988 62.4239962,18.456 63.192,18.456 C63.7280027,18.456 64.2519974,18.5199994 64.764,18.648 C65.2760026,18.7760006 65.7239981,18.9599988 66.108,19.2 L65.508,20.676 C64.7319961,20.2359978 63.9560039,20.016 63.18,20.016 C62.6359973,20.016 62.2340013,20.1039991 61.974,20.28 C61.7139987,20.4560009 61.584,20.6879986 61.584,20.976 C61.584,21.2640014 61.7339985,21.4779993 62.034,21.618 C62.3340015,21.7580007 62.7919969,21.8959993 63.408,22.032 C64.0480032,22.1840008 64.571998,22.3359992 64.98,22.488 C65.388002,22.6400008 65.7379985,22.8799984 66.03,23.208 C66.3220015,23.5360016 66.468,23.9799972 66.468,24.54 C66.468,25.0200024 66.3340013,25.457998 66.066,25.854 C65.7979987,26.250002 65.3960027,26.5639988 64.86,26.796 C64.3239973,27.0280012 63.6720038,27.144 62.904,27.144 C62.2399967,27.144 61.5980031,27.0540009 60.978,26.874 Z M71.832,26.688 C71.6479991,26.8240007 71.4220013,26.9259997 71.154,26.994 C70.8859987,27.0620003 70.6040015,27.096 70.308,27.096 C69.5399962,27.096 68.9460021,26.900002 68.526,26.508 C68.1059979,26.115998 67.896,25.5400038 67.896,24.78 L67.896,22.128 L66.9,22.128 L66.9,20.688 L67.896,20.688 L67.896,19.116 L69.768,19.116 L69.768,20.688 L71.376,20.688 L71.376,22.128 L69.768,22.128 L69.768,24.756 C69.768,25.0280014 69.8379993,25.2379993 69.978,25.386 C70.1180007,25.5340007 70.3159987,25.608 70.572,25.608 C70.8680015,25.608 71.119999,25.5280008 71.328,25.368 L71.832,26.688 Z M74.13,26.67 C73.5899973,26.3859986 73.1680015,25.9920025 72.864,25.488 C72.5599985,24.9839975 72.408,24.4120032 72.408,23.772 C72.408,23.1319968 72.5599985,22.5600025 72.864,22.056 C73.1680015,21.5519975 73.5899973,21.1580014 74.13,20.874 C74.6700027,20.5899986 75.2799966,20.448 75.96,20.448 C76.6400034,20.448 77.2479973,20.5899986 77.784,20.874 C78.3200027,21.1580014 78.7399985,21.5519975 79.044,22.056 C79.3480015,22.5600025 79.5,23.1319968 79.5,23.772 C79.5,24.4120032 79.3480015,24.9839975 79.044,25.488 C78.7399985,25.9920025 78.3200027,26.3859986 77.784,26.67 C77.2479973,26.9540014 76.6400034,27.096 75.96,27.096 C75.2799966,27.096 74.6700027,26.9540014 74.13,26.67 Z M77.142,25.074 C77.4500015,24.7499984 77.604,24.3160027 77.604,23.772 C77.604,23.2279973 77.4500015,22.7940016 77.142,22.47 C76.8339985,22.1459984 76.4400024,21.984 75.96,21.984 C75.4799976,21.984 75.0840016,22.1459984 74.772,22.47 C74.4599984,22.7940016 74.304,23.2279973 74.304,23.772 C74.304,24.3160027 74.4599984,24.7499984 74.772,25.074 C75.0840016,25.3980016 75.4799976,25.56 75.96,25.56 C76.4400024,25.56 76.8339985,25.3980016 77.142,25.074 Z M83.442,20.688 C83.8220019,20.5279992 84.2599975,20.448 84.756,20.448 L84.756,22.176 C84.547999,22.1599999 84.4080004,22.152 84.336,22.152 C83.7999973,22.152 83.3800015,22.3019985 83.076,22.602 C82.7719985,22.9020015 82.62,23.351997 82.62,23.952 L82.62,27 L80.748,27 L80.748,20.544 L82.536,20.544 L82.536,21.396 C82.7600011,21.0839984 83.0619981,20.8480008 83.442,20.688 Z M92.208,24.3 L87.324,24.3 C87.4120004,24.700002 87.6199984,25.0159988 87.948,25.248 C88.2760016,25.4800012 88.6839976,25.596 89.172,25.596 C89.5080017,25.596 89.8059987,25.5460005 90.066,25.446 C90.3260013,25.3459995 90.5679989,25.1880011 90.792,24.972 L91.788,26.052 C91.179997,26.7480035 90.2920058,27.096 89.124,27.096 C88.3959964,27.096 87.7520028,26.9540014 87.192,26.67 C86.6319972,26.3859986 86.2000015,25.9920025 85.896,25.488 C85.5919985,24.9839975 85.44,24.4120032 85.44,23.772 C85.44,23.1399968 85.5899985,22.5700025 85.89,22.062 C86.1900015,21.5539975 86.6019974,21.1580014 87.126,20.874 C87.6500026,20.5899986 88.2359968,20.448 88.884,20.448 C89.5160032,20.448 90.0879974,20.5839986 90.6,20.856 C91.1120026,21.1280014 91.5139985,21.5179975 91.806,22.026 C92.0980015,22.5340025 92.244,23.1239966 92.244,23.796 C92.244,23.8200001 92.2320001,23.9879984 92.208,24.3 Z M87.828,22.224 C87.5399986,22.4640012 87.3640003,22.7919979 87.3,23.208 L90.48,23.208 C90.4159997,22.799998 90.2400014,22.4740012 89.952,22.23 C89.6639986,21.9859988 89.3120021,21.864 88.896,21.864 C88.4719979,21.864 88.1160014,21.9839988 87.828,22.224 Z" id="App-Store" fill="#FFFFFF"></path>
                </g>
            </svg>
        );
    }
    if (icon === "playstore") {
        return (
            <svg width="99px" viewBox="0 0 99 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Artboard-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M4,0 L95,0 C97.209139,-4.05812251e-16 99,1.790861 99,4 L99,33 C99,35.209139 97.209139,37 95,37 L4,37 C1.790861,37 2.705415e-16,35.209139 0,33 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 Z M18.7304687,18.1523438 L21.078125,15.8046875 L10.109375,9.5078125 L18.7304687,18.1523438 Z M7.859375,9 C7.3515625,9.265625 7.01171875,9.75 7.01171875,10.3789062 L7.01171875,27.6171875 C7.01171875,28.2460938 7.3515625,28.7304688 7.859375,28.9960938 L17.8828125,18.9960938 L7.859375,9 Z M24.46875,17.8125 L22.1679688,16.4804688 L19.6015625,19 L22.1679688,21.5195312 L24.515625,20.1875 C25.21875,19.6289062 25.21875,18.3710938 24.46875,17.8125 Z M10.109375,28.4921875 L21.078125,22.1953125 L18.7304687,19.8476562 L10.109375,28.4921875 Z" id="Combined-Shape" fill="#454545"></path>
                    <path d="M30.735,9.3341339 L33.3826963,9.3341339 C34.0468675,9.3341339 34.6362358,9.46576946 35.1508189,9.72904454 C35.665402,9.99231961 36.0647963,10.3617967 36.3490137,10.8374869 C36.6332311,11.3131771 36.7753377,11.8591655 36.7753377,12.4754685 C36.7753377,13.0917715 36.6332311,13.6377599 36.3490137,14.1134501 C36.0647963,14.5891403 35.665402,14.9586174 35.1508189,15.2218925 C34.6362358,15.4851675 34.0468675,15.6168031 33.3826963,15.6168031 L30.735,15.6168031 L30.735,9.3341339 Z M33.3288449,14.8359571 C33.8374444,14.8359571 34.2847062,14.7372304 34.6706435,14.5397741 C35.0565808,14.3423178 35.3542567,14.0655839 35.56368,13.7095642 C35.7731034,13.3535445 35.8778135,12.9421834 35.8778135,12.4754685 C35.8778135,12.0087536 35.7731034,11.5973925 35.56368,11.2413728 C35.3542567,10.8853531 35.0565808,10.6086192 34.6706435,10.4111629 C34.2847062,10.2137066 33.8374444,10.1149799 33.3288449,10.1149799 L31.6325242,10.1149799 L31.6325242,14.8359571 L33.3288449,14.8359571 Z M38.0228963,10.859925 L38.8845195,10.859925 L38.8845195,15.6168031 L38.0228963,15.6168031 L38.0228963,10.859925 Z M38.0363591,9.78289599 C37.9256639,9.67519255 37.8703172,9.54355698 37.8703172,9.38798535 C37.8703172,9.23241372 37.9256639,9.09928229 38.0363591,8.98858709 C38.1470543,8.87789189 38.2861692,8.82254512 38.4537079,8.82254512 C38.6212466,8.82254512 38.7603614,8.87490017 38.8710566,8.97961185 C38.9817518,9.08432353 39.0370986,9.21446323 39.0370986,9.37003487 C39.0370986,9.53159003 38.9817518,9.66771316 38.8710566,9.77840837 C38.7603614,9.88910357 38.6212466,9.94445034 38.4537079,9.94445034 C38.2861692,9.94445034 38.1470543,9.89059943 38.0363591,9.78289599 Z M40.7693202,15.5135878 C40.4103088,15.4088761 40.1290874,15.2757447 39.9256475,15.1141896 L40.2846572,14.4320712 C40.4940805,14.5816593 40.7483765,14.701328 41.0475527,14.7910809 C41.346729,14.8808337 41.6488924,14.9257095 41.9540522,14.9257095 C42.7079762,14.9257095 43.0849326,14.7103058 43.0849326,14.2794921 C43.0849326,14.1358875 43.0340734,14.0222022 42.9323535,13.9384329 C42.8306336,13.8546636 42.7034856,13.7933334 42.5509057,13.7544404 C42.3983259,13.7155475 42.1814263,13.6721676 41.9002007,13.6242994 C41.5172551,13.5644642 41.2046207,13.4956547 40.9622879,13.4178689 C40.7199552,13.3400831 40.5120309,13.2084475 40.3385086,13.0229582 C40.1649864,12.837469 40.0782266,12.5771896 40.0782266,12.2421122 C40.0782266,11.8112985 40.2577297,11.4657551 40.6167411,11.2054718 C40.9757526,10.9451885 41.4574191,10.8150488 42.0617551,10.8150488 C42.3788818,10.8150488 42.6960039,10.8539411 43.0131307,10.9317269 C43.3302575,11.0095127 43.5905369,11.1142228 43.7939767,11.2458604 L43.4259918,11.9279788 C43.0370627,11.6766707 42.57933,11.5510186 42.0527798,11.5510186 C41.6877848,11.5510186 41.4095551,11.610853 41.2180823,11.7305234 C41.0266096,11.8501939 40.9308746,12.0087549 40.9308746,12.2062113 C40.9308746,12.3617829 40.9847255,12.4844433 41.0924289,12.5741962 C41.2001324,12.663949 41.3332638,12.7297668 41.4918272,12.7716515 C41.6503906,12.8135362 41.8732735,12.8614036 42.1604827,12.9152553 C42.5434283,12.9810741 42.853071,13.0513795 43.0894202,13.1261735 C43.3257694,13.2009676 43.5277104,13.3281156 43.695249,13.5076213 C43.8627877,13.687127 43.9465558,13.9384313 43.9465558,14.2615416 C43.9465558,14.6923554 43.7625652,15.034907 43.3945785,15.2892068 C43.0265917,15.5435066 42.525479,15.6706546 41.8912255,15.6706546 C41.5022964,15.6706546 41.1283317,15.6182995 40.7693202,15.5135878 Z M48.7842111,11.120207 C49.1492061,11.3236468 49.4349151,11.60786 49.6413467,11.972855 C49.8477783,12.33785 49.9509925,12.7596821 49.9509925,13.238364 C49.9509925,13.717046 49.8477783,14.140374 49.6413467,14.5083608 C49.4349151,14.8763475 49.1492061,15.1620565 48.7842111,15.3654963 C48.4192161,15.5689362 48.0063591,15.6706546 47.5456277,15.6706546 C47.2045669,15.6706546 46.8919324,15.6048368 46.607715,15.4731992 C46.3234976,15.3415617 46.0826643,15.1500918 45.885208,14.8987838 L45.885208,17.358 L45.0235848,17.358 L45.0235848,10.859925 L45.8493071,10.859925 L45.8493071,11.6138453 C46.0407798,11.3505702 46.2831089,11.151621 46.5763016,11.0169917 C46.8694943,10.8823624 47.1925998,10.8150488 47.5456277,10.8150488 C48.0063591,10.8150488 48.4192161,10.9167672 48.7842111,11.120207 Z M48.2950604,14.7058161 C48.5373932,14.5652032 48.7288631,14.3677499 48.8694759,14.1134501 C49.0100887,13.8591503 49.0803941,13.5674579 49.0803941,13.238364 C49.0803941,12.9092702 49.0100887,12.6175778 48.8694759,12.363278 C48.7288631,12.1089782 48.5373932,11.9130207 48.2950604,11.7753996 C48.0527277,11.6377786 47.7789856,11.5689691 47.4738258,11.5689691 C47.1746496,11.5689691 46.9038992,11.6392744 46.6615664,11.7798873 C46.4192337,11.9205001 46.2277638,12.1164576 46.087151,12.3677656 C45.9465381,12.6190736 45.8762328,12.9092702 45.8762328,13.238364 C45.8762328,13.5674579 45.9450423,13.8591503 46.0826633,14.1134501 C46.2202844,14.3677499 46.4117543,14.5652032 46.6570788,14.7058161 C46.9024033,14.8464289 47.1746496,14.9167343 47.4738258,14.9167343 C47.7789856,14.9167343 48.0527277,14.8464289 48.2950604,14.7058161 Z M51.9075952,15.3565211 C51.5306332,15.1470977 51.235949,14.858397 51.0235339,14.4904103 C50.8111188,14.1224235 50.7049128,13.705079 50.7049128,13.238364 C50.7049128,12.7716491 50.8111188,12.3543046 51.0235339,11.9863178 C51.235949,11.6183311 51.5306332,11.3311262 51.9075952,11.1246946 C52.2845573,10.918263 52.7093811,10.8150488 53.1820795,10.8150488 C53.654778,10.8150488 54.078106,10.918263 54.4520763,11.1246946 C54.8260465,11.3311262 55.1192348,11.6183311 55.3316499,11.9863178 C55.5440651,12.3543046 55.650271,12.7716491 55.650271,13.238364 C55.650271,13.705079 55.5440651,14.1224235 55.3316499,14.4904103 C55.1192348,14.858397 54.8260465,15.1470977 54.4520763,15.3565211 C54.078106,15.5659444 53.654778,15.6706546 53.1820795,15.6706546 C52.7093811,15.6706546 52.2845573,15.5659444 51.9075952,15.3565211 Z M54.0033142,14.7058161 C54.2456469,14.5652032 54.435621,14.3677499 54.573242,14.1134501 C54.7108631,13.8591503 54.7796726,13.5674579 54.7796726,13.238364 C54.7796726,12.9092702 54.7108631,12.6175778 54.573242,12.363278 C54.435621,12.1089782 54.2456469,11.9130207 54.0033142,11.7753996 C53.7609814,11.6377786 53.4872393,11.5689691 53.1820795,11.5689691 C52.8769198,11.5689691 52.6031777,11.6377786 52.3608449,11.7753996 C52.1185122,11.9130207 51.9270423,12.1089782 51.7864295,12.363278 C51.6458166,12.6175778 51.5755113,12.9092702 51.5755113,13.238364 C51.5755113,13.5674579 51.6458166,13.8591503 51.7864295,14.1134501 C51.9270423,14.3677499 52.1185122,14.5652032 52.3608449,14.7058161 C52.6031777,14.8464289 52.8769198,14.9167343 53.1820795,14.9167343 C53.4872393,14.9167343 53.7609814,14.8464289 54.0033142,14.7058161 Z M60.8244979,11.3401004 C61.1805176,11.6901366 61.3585248,12.2032161 61.3585248,12.8793544 L61.3585248,15.6168031 L60.4969016,15.6168031 L60.4969016,12.978082 C60.4969016,12.5173507 60.386208,12.1703115 60.1648176,11.936954 C59.9434272,11.7035965 59.6263052,11.5869196 59.213442,11.5869196 C58.7467271,11.5869196 58.3787459,11.7230427 58.1094873,11.9952931 C57.8402287,12.2675434 57.7056014,12.6579625 57.7056014,13.1665621 L57.7056014,15.6168031 L56.8439782,15.6168031 L56.8439782,10.859925 L57.6697004,10.859925 L57.6697004,11.5779443 C57.8432226,11.3326198 58.0780724,11.1441416 58.3742569,11.0125041 C58.6704413,10.8808666 59.0070095,10.8150488 59.3839716,10.8150488 C59.9883075,10.8150488 60.4684782,10.9900642 60.8244979,11.3401004 Z M62.9561178,10.859925 L63.817741,10.859925 L63.817741,15.6168031 L62.9561178,15.6168031 L62.9561178,10.859925 Z M62.9695806,9.78289599 C62.8588854,9.67519255 62.8035387,9.54355698 62.8035387,9.38798535 C62.8035387,9.23241372 62.8588854,9.09928229 62.9695806,8.98858709 C63.0802758,8.87789189 63.2193907,8.82254512 63.3869294,8.82254512 C63.5544681,8.82254512 63.6935829,8.87490017 63.8042781,8.97961185 C63.9149733,9.08432353 63.9703201,9.21446323 63.9703201,9.37003487 C63.9703201,9.53159003 63.9149733,9.66771316 63.8042781,9.77840837 C63.6935829,9.88910357 63.5544681,9.94445034 63.3869294,9.94445034 C63.2193907,9.94445034 63.0802758,9.89059943 62.9695806,9.78289599 Z M69.2208365,11.120207 C69.5858315,11.3236468 69.8715405,11.60786 70.0779721,11.972855 C70.2844037,12.33785 70.3876179,12.7596821 70.3876179,13.238364 C70.3876179,13.717046 70.2844037,14.140374 70.0779721,14.5083608 C69.8715405,14.8763475 69.5858315,15.1620565 69.2208365,15.3654963 C68.8558415,15.5689362 68.4429845,15.6706546 67.9822531,15.6706546 C67.6292252,15.6706546 67.3061197,15.6018451 67.012927,15.464224 C66.7197343,15.3266029 66.4774052,15.1261579 66.2859325,14.8628828 L66.2859325,15.6168031 L65.4602102,15.6168031 L65.4602102,8.95717375 L66.3218334,8.95717375 L66.3218334,11.5779443 C66.5133062,11.3266363 66.7526436,11.1366623 67.0398528,11.0080165 C67.3270619,10.8793707 67.6411923,10.8150488 67.9822531,10.8150488 C68.4429845,10.8150488 68.8558415,10.9167672 69.2208365,11.120207 Z M68.7316858,14.7058161 C68.9740186,14.5652032 69.1654885,14.3677499 69.3061013,14.1134501 C69.4467141,13.8591503 69.5170195,13.5674579 69.5170195,13.238364 C69.5170195,12.9092702 69.4467141,12.6175778 69.3061013,12.363278 C69.1654885,12.1089782 68.9740186,11.9130207 68.7316858,11.7753996 C68.4893531,11.6377786 68.215611,11.5689691 67.9104512,11.5689691 C67.611275,11.5689691 67.3390287,11.6377786 67.0937042,11.7753996 C66.8483797,11.9130207 66.6569098,12.1089782 66.5192887,12.363278 C66.3816677,12.6175778 66.3128582,12.9092702 66.3128582,13.238364 C66.3128582,13.5674579 66.3816677,13.8591503 66.5192887,14.1134501 C66.6569098,14.3677499 66.8483797,14.5652032 67.0937042,14.7058161 C67.3390287,14.8464289 67.611275,14.9167343 67.9104512,14.9167343 C68.215611,14.9167343 68.4893531,14.8464289 68.7316858,14.7058161 Z M71.5813251,8.95717375 L72.4429483,8.95717375 L72.4429483,15.6168031 L71.5813251,15.6168031 L71.5813251,8.95717375 Z M78.3666078,13.5255718 L74.5072539,13.5255718 C74.5611056,13.9444185 74.7450962,14.2809867 75.0592312,14.5352865 C75.3733663,14.7895863 75.7637854,14.9167343 76.2305003,14.9167343 C76.7989351,14.9167343 77.2566679,14.7252643 77.6037123,14.3423188 L78.0794001,14.8987838 C77.8639932,15.1500918 77.5962345,15.3415617 77.276116,15.4731992 C76.9559974,15.6048368 76.5984872,15.6706546 76.2035746,15.6706546 C75.7009585,15.6706546 75.2551926,15.5674403 74.8662636,15.3610087 C74.4773345,15.1545771 74.1766669,14.8658764 73.9642518,14.4948979 C73.7518366,14.1239194 73.6456307,13.705079 73.6456307,13.238364 C73.6456307,12.7776327 73.7488449,12.361784 73.9552765,11.9908054 C74.1617081,11.6198269 74.4459213,11.3311262 74.8079245,11.1246946 C75.1699277,10.918263 75.5782971,10.8150488 76.033045,10.8150488 C76.4877928,10.8150488 76.8931705,10.918263 77.2491902,11.1246946 C77.6052099,11.3311262 77.8834396,11.6198269 78.0838877,11.9908054 C78.2843358,12.361784 78.3845583,12.7866078 78.3845583,13.2652898 C78.3845583,13.3311085 78.3785749,13.4178683 78.3666078,13.5255718 Z M74.9964046,11.9190035 C74.7181707,12.1703115 74.5551221,12.4994004 74.5072539,12.9062801 L77.5588361,12.9062801 C77.5109679,12.505384 77.3479193,12.1777909 77.0696854,11.9234911 C76.7914515,11.6691913 76.4459082,11.5420434 76.033045,11.5420434 C75.6201818,11.5420434 75.2746384,11.6676955 74.9964046,11.9190035 Z M86.2737958,13.5255718 L82.4144418,13.5255718 C82.4682936,13.9444185 82.6522842,14.2809867 82.9664192,14.5352865 C83.2805542,14.7895863 83.6709733,14.9167343 84.1376883,14.9167343 C84.7061231,14.9167343 85.1638558,14.7252643 85.5109002,14.3423188 L85.986588,14.8987838 C85.7711812,15.1500918 85.5034225,15.3415617 85.1833039,15.4731992 C84.8631854,15.6048368 84.5056751,15.6706546 84.1107625,15.6706546 C83.6081465,15.6706546 83.1623806,15.5674403 82.7734515,15.3610087 C82.3845224,15.1545771 82.0838548,14.8658764 81.8714397,14.4948979 C81.6590246,14.1239194 81.5528186,13.705079 81.5528186,13.238364 C81.5528186,12.7776327 81.6560329,12.361784 81.8624645,11.9908054 C82.0688961,11.6198269 82.3531092,11.3311262 82.7151124,11.1246946 C83.0771157,10.918263 83.4854851,10.8150488 83.9402329,10.8150488 C84.3949808,10.8150488 84.8003585,10.918263 85.1563782,11.1246946 C85.5123979,11.3311262 85.7906276,11.6198269 85.9910757,11.9908054 C86.1915237,12.361784 86.2917463,12.7866078 86.2917463,13.2652898 C86.2917463,13.3311085 86.2857628,13.4178683 86.2737958,13.5255718 Z M82.9035925,11.9190035 C82.6253586,12.1703115 82.46231,12.4994004 82.4144418,12.9062801 L85.466024,12.9062801 C85.4181558,12.505384 85.2551072,12.1777909 84.9768734,11.9234911 C84.6986395,11.6691913 84.3530961,11.5420434 83.9402329,11.5420434 C83.5273697,11.5420434 83.1818264,11.6676955 82.9035925,11.9190035 Z M91.4659731,11.3401004 C91.8219928,11.6901366 92,12.2032161 92,12.8793544 L92,15.6168031 L91.1383768,15.6168031 L91.1383768,12.978082 C91.1383768,12.5173507 91.0276833,12.1703115 90.8062929,11.936954 C90.5849024,11.7035965 90.2677804,11.5869196 89.8549172,11.5869196 C89.3882023,11.5869196 89.0202211,11.7230427 88.7509625,11.9952931 C88.4817039,12.2675434 88.3470766,12.6579625 88.3470766,13.1665621 L88.3470766,15.6168031 L87.4854534,15.6168031 L87.4854534,10.859925 L88.3111757,10.859925 L88.3111757,11.5779443 C88.4846979,11.3326198 88.7195477,11.1441416 89.0157321,11.0125041 C89.3119166,10.8808666 89.6484848,10.8150488 90.0254468,10.8150488 C90.6297828,10.8150488 91.1099534,10.9900642 91.4659731,11.3401004 Z" id="Disponible-en" fill="#FFFFFF"></path>
                    <path d="M36.57,19.972 C37.1180027,20.2200012 37.5399985,20.5719977 37.836,21.028 C38.1320015,21.4840023 38.28,22.0239969 38.28,22.648 C38.28,23.2640031 38.1320015,23.8019977 37.836,24.262 C37.5399985,24.7220023 37.1180027,25.0739988 36.57,25.318 C36.0219973,25.5620012 35.3760037,25.684 34.632,25.684 L32.94,25.684 L32.94,28 L30.996,28 L30.996,19.6 L34.632,19.6 C35.3760037,19.6 36.0219973,19.7239988 36.57,19.972 Z M35.856,23.722 C36.1600015,23.4699987 36.312,23.1120023 36.312,22.648 C36.312,22.1759976 36.1600015,21.8140013 35.856,21.562 C35.5519985,21.3099987 35.1080029,21.184 34.524,21.184 L32.94,21.184 L32.94,24.1 L34.524,24.1 C35.1080029,24.1 35.5519985,23.9740013 35.856,23.722 Z M39.648,19.096 L41.52,19.096 L41.52,28 L39.648,28 L39.648,19.096 Z M48.168,22.162 C48.7040027,22.6380024 48.972,23.3559952 48.972,24.316 L48.972,28 L47.22,28 L47.22,27.196 C46.8679982,27.796003 46.2120048,28.096 45.252,28.096 C44.7559975,28.096 44.3260018,28.0120008 43.962,27.844 C43.5979982,27.6759992 43.320001,27.4440015 43.128,27.148 C42.935999,26.8519985 42.84,26.5160019 42.84,26.14 C42.84,25.539997 43.0659977,25.0680017 43.518,24.724 C43.9700023,24.3799983 44.6679953,24.208 45.612,24.208 L47.1,24.208 C47.1,23.799998 46.9760012,23.4860011 46.728,23.266 C46.4799988,23.0459989 46.1080025,22.936 45.612,22.936 C45.2679983,22.936 44.9300017,22.9899995 44.598,23.098 C44.2659983,23.2060005 43.9840012,23.3519991 43.752,23.536 L43.08,22.228 C43.4320018,21.9799988 43.8539975,21.7880007 44.346,21.652 C44.8380025,21.5159993 45.3439974,21.448 45.864,21.448 C46.864005,21.448 47.6319973,21.6859976 48.168,22.162 Z M46.572,26.614 C46.8200012,26.4659993 46.9959995,26.2480014 47.1,25.96 L47.1,25.3 L45.816,25.3 C45.0479962,25.3 44.664,25.5519975 44.664,26.056 C44.664,26.2960012 44.7579991,26.4859993 44.946,26.626 C45.1340009,26.7660007 45.3919984,26.836 45.72,26.836 C46.0400016,26.836 46.3239988,26.7620007 46.572,26.614 Z M57.072,21.544 L54.156,28.396 C53.8599985,29.1400037 53.4940022,29.6639985 53.058,29.968 C52.6219978,30.2720015 52.0960031,30.424 51.48,30.424 C51.1439983,30.424 50.8120016,30.3720005 50.484,30.268 C50.1559984,30.1639995 49.888001,30.0200009 49.68,29.836 L50.364,28.504 C50.5080007,28.6320006 50.6739991,28.7319996 50.862,28.804 C51.0500009,28.8760004 51.2359991,28.912 51.42,28.912 C51.6760013,28.912 51.8839992,28.8500006 52.044,28.726 C52.2040008,28.6019994 52.3479994,28.3960014 52.476,28.108 L52.5,28.048 L49.704,21.544 L51.636,21.544 L53.448,25.924 L55.272,21.544 L57.072,21.544 Z M62.202,27.874 C61.5819969,27.6939991 61.0840019,27.4600014 60.708,27.172 L61.368,25.708 C61.7280018,25.9720013 62.1559975,26.1839992 62.652,26.344 C63.1480025,26.5040008 63.6439975,26.584 64.14,26.584 C64.6920028,26.584 65.0999987,26.5020008 65.364,26.338 C65.6280013,26.1739992 65.76,25.9560014 65.76,25.684 C65.76,25.483999 65.6820008,25.3180007 65.526,25.186 C65.3699992,25.0539993 65.1700012,24.9480004 64.926,24.868 C64.6819988,24.7879996 64.3520021,24.7000005 63.936,24.604 C63.2959968,24.4519992 62.772002,24.3000008 62.364,24.148 C61.955998,23.9959992 61.6060015,23.7520017 61.314,23.416 C61.0219985,23.0799983 60.876,22.6320028 60.876,22.072 C60.876,21.5839976 61.0079987,21.142002 61.272,20.746 C61.5360013,20.349998 61.9339973,20.0360012 62.466,19.804 C62.9980027,19.5719988 63.6479962,19.456 64.416,19.456 C64.9520027,19.456 65.4759974,19.5199994 65.988,19.648 C66.5000026,19.7760006 66.9479981,19.9599988 67.332,20.2 L66.732,21.676 C65.9559961,21.2359978 65.1800039,21.016 64.404,21.016 C63.8599973,21.016 63.4580013,21.1039991 63.198,21.28 C62.9379987,21.4560009 62.808,21.6879986 62.808,21.976 C62.808,22.2640014 62.9579985,22.4779993 63.258,22.618 C63.5580015,22.7580007 64.0159969,22.8959993 64.632,23.032 C65.2720032,23.1840008 65.795998,23.3359992 66.204,23.488 C66.612002,23.6400008 66.9619985,23.8799984 67.254,24.208 C67.5460015,24.5360016 67.692,24.9799972 67.692,25.54 C67.692,26.0200024 67.5580013,26.457998 67.29,26.854 C67.0219987,27.250002 66.6200027,27.5639988 66.084,27.796 C65.5479973,28.0280012 64.8960038,28.144 64.128,28.144 C63.4639967,28.144 62.8220031,28.0540009 62.202,27.874 Z M73.056,27.688 C72.8719991,27.8240007 72.6460013,27.9259997 72.378,27.994 C72.1099987,28.0620003 71.8280015,28.096 71.532,28.096 C70.7639962,28.096 70.1700021,27.900002 69.75,27.508 C69.3299979,27.115998 69.12,26.5400038 69.12,25.78 L69.12,23.128 L68.124,23.128 L68.124,21.688 L69.12,21.688 L69.12,20.116 L70.992,20.116 L70.992,21.688 L72.6,21.688 L72.6,23.128 L70.992,23.128 L70.992,25.756 C70.992,26.0280014 71.0619993,26.2379993 71.202,26.386 C71.3420007,26.5340007 71.5399987,26.608 71.796,26.608 C72.0920015,26.608 72.343999,26.5280008 72.552,26.368 L73.056,27.688 Z M75.354,27.67 C74.8139973,27.3859986 74.3920015,26.9920025 74.088,26.488 C73.7839985,25.9839975 73.632,25.4120032 73.632,24.772 C73.632,24.1319968 73.7839985,23.5600025 74.088,23.056 C74.3920015,22.5519975 74.8139973,22.1580014 75.354,21.874 C75.8940027,21.5899986 76.5039966,21.448 77.184,21.448 C77.8640034,21.448 78.4719973,21.5899986 79.008,21.874 C79.5440027,22.1580014 79.9639985,22.5519975 80.268,23.056 C80.5720015,23.5600025 80.724,24.1319968 80.724,24.772 C80.724,25.4120032 80.5720015,25.9839975 80.268,26.488 C79.9639985,26.9920025 79.5440027,27.3859986 79.008,27.67 C78.4719973,27.9540014 77.8640034,28.096 77.184,28.096 C76.5039966,28.096 75.8940027,27.9540014 75.354,27.67 Z M78.366,26.074 C78.6740015,25.7499984 78.828,25.3160027 78.828,24.772 C78.828,24.2279973 78.6740015,23.7940016 78.366,23.47 C78.0579985,23.1459984 77.6640024,22.984 77.184,22.984 C76.7039976,22.984 76.3080016,23.1459984 75.996,23.47 C75.6839984,23.7940016 75.528,24.2279973 75.528,24.772 C75.528,25.3160027 75.6839984,25.7499984 75.996,26.074 C76.3080016,26.3980016 76.7039976,26.56 77.184,26.56 C77.6640024,26.56 78.0579985,26.3980016 78.366,26.074 Z M84.666,21.688 C85.0460019,21.5279992 85.4839975,21.448 85.98,21.448 L85.98,23.176 C85.771999,23.1599999 85.6320004,23.152 85.56,23.152 C85.0239973,23.152 84.6040015,23.3019985 84.3,23.602 C83.9959985,23.9020015 83.844,24.351997 83.844,24.952 L83.844,28 L81.972,28 L81.972,21.544 L83.76,21.544 L83.76,22.396 C83.9840011,22.0839984 84.2859981,21.8480008 84.666,21.688 Z M93.432,25.3 L88.548,25.3 C88.6360004,25.700002 88.8439984,26.0159988 89.172,26.248 C89.5000016,26.4800012 89.9079976,26.596 90.396,26.596 C90.7320017,26.596 91.0299987,26.5460005 91.29,26.446 C91.5500013,26.3459995 91.7919989,26.1880011 92.016,25.972 L93.012,27.052 C92.403997,27.7480035 91.5160058,28.096 90.348,28.096 C89.6199964,28.096 88.9760028,27.9540014 88.416,27.67 C87.8559972,27.3859986 87.4240015,26.9920025 87.12,26.488 C86.8159985,25.9839975 86.664,25.4120032 86.664,24.772 C86.664,24.1399968 86.8139985,23.5700025 87.114,23.062 C87.4140015,22.5539975 87.8259974,22.1580014 88.35,21.874 C88.8740026,21.5899986 89.4599968,21.448 90.108,21.448 C90.7400032,21.448 91.3119974,21.5839986 91.824,21.856 C92.3360026,22.1280014 92.7379985,22.5179975 93.03,23.026 C93.3220015,23.5340025 93.468,24.1239966 93.468,24.796 C93.468,24.8200001 93.4560001,24.9879984 93.432,25.3 Z M89.052,23.224 C88.7639986,23.4640012 88.5880003,23.7919979 88.524,24.208 L91.704,24.208 C91.6399997,23.799998 91.4640014,23.4740012 91.176,23.23 C90.8879986,22.9859988 90.5360021,22.864 90.12,22.864 C89.6959979,22.864 89.3400014,22.9839988 89.052,23.224 Z" id="Play-Store" fill="#FFFFFF"></path>
                </g>
            </svg>
        );
    }
    if (icon === "external-link") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-external-link-alt fa-w-16"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" class=""></path></svg>
        );
    }
    if (icon === "quote-left") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-left fa-w-16"><path fill="currentColor" d="M448 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16c-92.6 0-168 75.4-168 168v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128zM176 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16C75.4 32 0 107.4 0 200v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128z" class=""></path></svg>
        );
    }
    if (icon === "quote-right") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="quote-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-quote-right fa-w-16"><path fill="currentColor" d="M176 32H64C28.7 32 0 60.7 0 96v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56H56c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136H56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216zM448 32H336c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56h-16c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136h-16c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56h-96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216z" class=""></path></svg>
        );
    }
    if (icon === "chevron-left-thin") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
        );
    }
    if (icon === "chevron-right-thin") {
        return (
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>
        );
    }
    if (icon === "play") {
        return (
            <svg width="10px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" class=""></path></svg>
        );
    }
    if (icon === "ntx-isologo") {
        return (
            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Web-Copy-2" transform="translate(-445.000000, -4809.000000)" fill="#363636" fill-rule="nonzero">
                        <g id="Stacked-Group-2" transform="translate(308.000000, 4806.000000)">
                            <g id="Group-16" transform="translate(0.000000, 3.000000)">
                                <path d="M137.388415,0.115469613 C137.570226,0.00607734807 137.909608,1.77635684e-14 148.000134,1.77635684e-14 C158.351256,1.42108547e-14 158.423981,1.42108547e-14 158.623973,0.121546961 C159.023958,0.370718232 158.999717,-0.37679558 158.999717,11.0121547 C158.999717,20.741989 158.993656,21.3740331 158.89063,21.5745856 C158.684577,22 158.666396,22 155.83014,22 C153.072669,22 153.078729,22 152.842374,21.6535912 C152.733288,21.4895028 152.727227,21.2220994 152.696925,14.1298343 C152.666624,7.13480663 152.660563,6.7640884 152.557537,6.6 C152.321182,6.24143646 152.678744,6.25966851 144.818436,6.25966851 C136.855102,6.25966851 137.358113,6.2839779 137.13994,5.87679558 C137.042974,5.70055249 137.030853,5.45745856 137.030853,3.16022099 C137.030853,0.388950276 137.036913,0.328176796 137.388415,0.115469613 Z M137.491442,7.94309392 C137.685374,7.84585635 138.097479,7.83977901 144.163916,7.8519337 C150.618216,7.87016575 150.630337,7.87016575 150.800028,7.99779006 C150.890933,8.06464088 151.00608,8.19226519 151.042443,8.27127072 C151.103047,8.38674033 151.121228,9.8878453 151.121228,14.9685083 L151.121228,21.5138122 L150.915175,21.7447514 L150.709122,21.9696133 L148.0971,21.9878453 C145.2063,22.0060773 145.236602,22.0060773 145.000248,21.6171271 C144.885101,21.4287293 144.87904,21.2889503 144.87904,18.1226519 C144.87904,14.5309392 144.87904,14.5248619 144.539659,14.3 C144.382089,14.1966851 144.133614,14.1906077 140.970098,14.160221 C137.230845,14.1298343 137.394476,14.141989 137.13994,13.7530387 C137.036913,13.601105 137.030853,13.3701657 137.030853,10.9939227 C137.030853,8.45966851 137.036913,8.39281768 137.158121,8.22265193 C137.224785,8.13149171 137.376294,8.0038674 137.491442,7.94309392 Z M137.273268,15.9469613 L137.4672,15.7403315 L140.145886,15.7403315 L142.818512,15.7403315 L143.048807,15.9469613 L143.27304,16.1535912 L143.291222,18.7425414 C143.309403,21.6049724 143.303342,21.6475138 142.927599,21.878453 C142.733667,22 142.648822,22 140.109524,21.9878453 L137.491442,21.9696133 L137.30963,21.7933702 C137.206604,21.6900552 137.091457,21.5138122 137.061155,21.3983425 C136.994491,21.1552486 136.97631,16.6701657 137.036913,16.3480663 C137.061155,16.2447514 137.164181,16.0624309 137.273268,15.9469613 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "user-headset") {
        return (  
            <svg width="22px" height="26px" viewBox="0 0 22 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Web-Copy-2" transform="translate(-824.000000, -4806.000000)" fill="#000000" fill-rule="nonzero">
                        <g id="Stacked-Group-2" transform="translate(308.000000, 4806.000000)">
                            <g id="Group-15" transform="translate(380.000000, 0.000000)">
                                <path d="M151.714286,17.2857143 L150.579911,17.2857143 C148.308262,18.3333023 145.691738,18.3333023 143.420089,17.2857143 L142.285714,17.2857143 C138.81421,17.2857143 136,20.0999244 136,23.5714286 C136,24.4393046 136.703553,25.1428571 137.571429,25.1428571 L156.428571,25.1428571 C157.296447,25.1428571 158,24.4393046 158,23.5714286 C158,20.0999244 155.18579,17.2857143 151.714286,17.2857143 Z M138.357143,11 C138.791081,11 139.142857,10.6482237 139.142857,10.2142857 L139.142857,9.42857143 C139.142857,5.09633929 142.667768,1.57142857 147,1.57142857 C151.332232,1.57142857 154.857143,5.09633929 154.857143,9.42857143 L154.857143,10.2142857 C154.854707,12.3829661 153.097252,14.1404215 150.928571,14.1428571 L149.357143,14.1428571 C149.357143,13.2749811 148.65359,12.5714286 147.785714,12.5714286 L146.214286,12.5714286 C145.34641,12.5714286 144.642857,13.2749811 144.642857,14.1428571 C144.642857,15.0107332 145.34641,15.7142857 146.214286,15.7142857 L150.928571,15.7142857 C153.964567,15.7104978 156.424784,13.2502815 156.428571,10.2142857 L156.428571,9.42857143 C156.428571,4.22959821 152.198973,0 147,0 C141.801027,0 137.571429,4.22959821 137.571429,9.42857143 L137.571429,10.2142857 C137.571429,10.6482237 137.923205,11 138.357143,11 Z M146.214286,11 L147.785714,11 C148.908275,11.0002741 149.945461,11.5992626 150.506741,12.5714286 L150.928571,12.5714286 C152.229824,12.5700752 153.284361,11.5155388 153.285714,10.2142857 L153.285714,9.42857143 C153.285714,5.95706729 150.471504,3.14285714 147,3.14285714 C143.528496,3.14285714 140.714286,5.95706729 140.714286,9.42857143 C140.714286,11.4134821 141.652232,13.1607143 143.088616,14.3132589 C143.08567,14.2558036 143.071429,14.2012946 143.071429,14.1428571 C143.073323,12.4078904 144.479319,11.0018945 146.214286,11 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "user-plus-solid") {
        return (            
            <svg width="28px" height="22px" viewBox="0 0 28 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Web-Copy-2" transform="translate(-1202.000000, -4809.000000)" fill="#000000" fill-rule="nonzero">
                        <g id="Stacked-Group-2" transform="translate(308.000000, 4806.000000)">
                            <g id="Group-14" transform="translate(760.000000, 3.000000)">
                                <path d="M160.8125,8.9375 L158.0625,8.9375 L158.0625,6.1875 C158.0625,5.809375 157.753125,5.5 157.375,5.5 L156,5.5 C155.621875,5.5 155.3125,5.809375 155.3125,6.1875 L155.3125,8.9375 L152.5625,8.9375 C152.184375,8.9375 151.875,9.246875 151.875,9.625 L151.875,11 C151.875,11.378125 152.184375,11.6875 152.5625,11.6875 L155.3125,11.6875 L155.3125,14.4375 C155.3125,14.815625 155.621875,15.125 156,15.125 L157.375,15.125 C157.753125,15.125 158.0625,14.815625 158.0625,14.4375 L158.0625,11.6875 L160.8125,11.6875 C161.190625,11.6875 161.5,11.378125 161.5,11 L161.5,9.625 C161.5,9.246875 161.190625,8.9375 160.8125,8.9375 Z M143.625,11 C146.662891,11 149.125,8.53789062 149.125,5.5 C149.125,2.46210938 146.662891,0 143.625,0 C140.587109,0 138.125,2.46210937 138.125,5.5 C138.125,8.53789062 140.587109,11 143.625,11 Z M147.475,12.375 L146.757422,12.375 C145.803516,12.8132812 144.742188,13.0625 143.625,13.0625 C142.507812,13.0625 141.450781,12.8132812 140.492578,12.375 L139.775,12.375 C136.586719,12.375 134,14.9617187 134,18.15 L134,19.9375 C134,21.0761719 134.923828,22 136.0625,22 L151.1875,22 C152.326172,22 153.25,21.0761719 153.25,19.9375 L153.25,18.15 C153.25,14.9617187 150.663281,12.375 147.475,12.375 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "phone-alt") {
        return (            
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-phone-alt fa-w-16"><path fill="currentColor" d="M484.25 330l-101.59-43.55a45.86 45.86 0 0 0-53.39 13.1l-32.7 40a311.08 311.08 0 0 1-124.19-124.12l40-32.7a45.91 45.91 0 0 0 13.1-53.42L182 27.79a45.63 45.63 0 0 0-52.31-26.61L35.5 22.89A45.59 45.59 0 0 0 0 67.5C0 313.76 199.68 512.1 444.56 512a45.58 45.58 0 0 0 44.59-35.51l21.7-94.22a45.75 45.75 0 0 0-26.6-52.27zm-41.59 134.09C225.08 463.09 49 287 48 69.3l90.69-20.9 42.09 98.22-68.09 55.71c46.39 99 98.19 150.63 197 197l55.69-68.11 98.19 42.11z" class=""></path></svg>
        );
    }
    if (icon === "map-marker-alt") {
        return (            
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-map-marker-alt fa-w-12"><path fill="currentColor" d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z" class=""></path></svg>
        );
    }
    if (icon === "envelope") {
        return (            
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" class=""></path></svg>
        );
    }
    if (icon === "hand-wash") {
        return (            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Hand_Wash" data-name="Hand Wash"><path class="cls-1" d="M63,59H57.73a1,1,0,0,0-.61.21A13.67,13.67,0,0,1,48.88,62H28.64A1.59,1.59,0,0,1,27,60.66a1.48,1.48,0,0,1,.38-1.17A1.51,1.51,0,0,1,28.5,59a1,1,0,0,0,.25,0A1,1,0,0,0,29,59H39a1,1,0,0,0,0-2H29a1,1,0,0,0-.25,0,1,1,0,0,0-.25,0H25.64A1.59,1.59,0,0,1,24,55.66a1.48,1.48,0,0,1,.38-1.17A1.51,1.51,0,0,1,25.5,54H38a1,1,0,0,0,0-2H22.64A1.59,1.59,0,0,1,21,50.66a1.48,1.48,0,0,1,.38-1.17A1.51,1.51,0,0,1,22.5,49H37a1,1,0,0,0,0-2H25.5a1.51,1.51,0,0,1-1.11-.49A1.48,1.48,0,0,1,24,45.34,1.59,1.59,0,0,1,25.64,44H46.26a1,1,0,0,0,.92-.62A1,1,0,0,0,47,42.29L42.08,37.4a3,3,0,0,1,0-4.24,1,1,0,0,1,1.43,0l6.8,6.55a1,1,0,0,0,.37.23l.92.31a8.17,8.17,0,0,1,5.36,6,1,1,0,0,0,1,.78H63a1,1,0,0,0,0-2H58.7a10.17,10.17,0,0,0-6.46-6.64l-.71-.24-6.62-6.38a3.07,3.07,0,0,0-4.25,0,5,5,0,0,0,0,7.07L43.85,42H25.64A3.61,3.61,0,0,0,22,45.14,3.47,3.47,0,0,0,22.34,47,3.49,3.49,0,0,0,19,50.86,3.61,3.61,0,0,0,22.34,54,3.51,3.51,0,0,0,22,55.86,3.61,3.61,0,0,0,25.34,59,3.51,3.51,0,0,0,25,60.86,3.61,3.61,0,0,0,28.64,64H48.88a15.67,15.67,0,0,0,9.18-3H63a1,1,0,0,0,0-2Z"/><path class="cls-1" d="M24.24,21A3,3,0,0,1,27,24v1a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V23.26A12.27,12.27,0,0,0,24.25,11,8.13,8.13,0,0,0,22,9.08V5a1,1,0,0,0-1-1H19V2h6a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2h6V4H15a1,1,0,0,0-1,1V9.08a7.68,7.68,0,0,0-1.28.92H8A1,1,0,0,0,7,9H1a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1h4.72A7.9,7.9,0,0,0,18,24,8,8,0,0,0,24.24,21ZM16,6h4V8.26A8.37,8.37,0,0,0,18,8a7.89,7.89,0,0,0-2,.26ZM2,21V11H6V21Zm20.92-1.57a6,6,0,0,1-9.11.86,1,1,0,0,0-.7-.29H8V12h5.11a1,1,0,0,0,.7-.29,6,6,0,0,1,9.11.86,1,1,0,0,0,.82.43A10.27,10.27,0,0,1,34,23.26V24H29a5,5,0,0,0-5-5h-.26A1,1,0,0,0,22.92,19.43Z"/><path class="cls-1" d="M30.24,27.35c-.4.47-3.91,4.65-3.91,8a4.67,4.67,0,0,0,9.34,0c0-3.33-3.51-7.51-3.91-8A1,1,0,0,0,30.24,27.35ZM31,38a2.68,2.68,0,0,1-2.67-2.67c0-1.73,1.55-4.21,2.67-5.72,1.12,1.51,2.67,4,2.67,5.72A2.68,2.68,0,0,1,31,38Z"/></g></svg>
        );
    }
    if (icon === "social-distance") {
        return (            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Social_Distance_6ft" data-name="Social Distance 6ft"><path class="cls-1" d="M32,29a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V30A1,1,0,0,0,32,29Z"/><path class="cls-1" d="M32,23a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V24A1,1,0,0,0,32,23Z"/><path class="cls-1" d="M32,35a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V36A1,1,0,0,0,32,35Z"/><path class="cls-1" d="M32,41a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V42A1,1,0,0,0,32,41Z"/><path class="cls-1" d="M32,47a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V48A1,1,0,0,0,32,47Z"/><path class="cls-1" d="M32,53a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V54A1,1,0,0,0,32,53Z"/><path class="cls-1" d="M32,59a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V60A1,1,0,0,0,32,59Z"/><path class="cls-1" d="M43,17V14a3,3,0,0,0-3-3,3,3,0,0,0-2,.78A3,3,0,0,0,36,11a3,3,0,0,0-3,3v3a1,1,0,0,0,2,0V14a1,1,0,0,1,2,0v3a1,1,0,0,0,2,0V14a1,1,0,0,1,2,0v3a1,1,0,0,0,2,0Z"/><path class="cls-1" d="M30,16H26.27a2,2,0,0,1,1-.81l1.64-.66A3.39,3.39,0,0,0,27.61,8H27a3,3,0,0,0-3,3,1,1,0,0,0,2,0,1,1,0,0,1,1-1h.61a1.38,1.38,0,0,1,.52,2.67l-1.64.66A3.93,3.93,0,0,0,24,17a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2Z"/><path class="cls-1" d="M10.08,4.38a1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,5H50.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L50.59,3H13.41l1.3-1.29A1,1,0,1,0,13.29.29l-3,3a1,1,0,0,0-.21.33A1,1,0,0,0,10.08,4.38Z"/><path class="cls-1" d="M15.44,25A5.93,5.93,0,0,0,17,21V18A6,6,0,0,0,5,18v3a5.93,5.93,0,0,0,1.56,4A7,7,0,0,0,0,32V44a3,3,0,0,0,3,3,2.81,2.81,0,0,0,1-.18V59.4A4.21,4.21,0,0,0,2,63a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v0a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,4.17,4.17,0,0,0-2-3.6V46.82A2.81,2.81,0,0,0,19,47a3,3,0,0,0,3-3V32A7,7,0,0,0,15.44,25ZM7,18a4,4,0,0,1,8,0v3a4,4,0,0,1-8,0ZM20,44a1,1,0,0,1-1,1,1,1,0,0,1-.38-.08l-.08,0A1,1,0,0,1,18,44V31a1,1,0,0,0-2,0V60a1,1,0,0,0,.54.89l.23.12a2.23,2.23,0,0,1,1,1H13L12,44a1,1,0,0,0-2,0L9.05,62H4.23a2.25,2.25,0,0,1,1-1l.21-.11A1,1,0,0,0,6,60V31a1,1,0,0,0-2,0V44a1,1,0,0,1-.54.88l-.08,0A1,1,0,0,1,3,45a1,1,0,0,1-1-1V32a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5Z"/><path class="cls-1" d="M57.44,25A5.93,5.93,0,0,0,59,21V18a6,6,0,0,0-12,0v3a5.93,5.93,0,0,0,1.56,4A7,7,0,0,0,42,32V44a3,3,0,0,0,3,3,2.81,2.81,0,0,0,1-.18V59.4A4.21,4.21,0,0,0,44,63a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v0a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1,4.17,4.17,0,0,0-2-3.6V46.82A2.81,2.81,0,0,0,61,47a3,3,0,0,0,3-3V32A7,7,0,0,0,57.44,25ZM49,18a4,4,0,0,1,8,0v3a4,4,0,0,1-8,0ZM62,44a1,1,0,0,1-1,1,1,1,0,0,1-.38-.08l-.08,0A1,1,0,0,1,60,44V31a1,1,0,0,0-2,0V60a1,1,0,0,0,.54.89l.23.12a2.23,2.23,0,0,1,1,1H55L54,44a1,1,0,0,0-2,0l-1,18H46.23a2.25,2.25,0,0,1,1-1l.21-.11A1,1,0,0,0,48,60V31a1,1,0,0,0-2,0V44a1,1,0,0,1-.54.88l-.08,0A1,1,0,0,1,45,45a1,1,0,0,1-1-1V32a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5Z"/></g></svg>
        );
    }
    if (icon === "no-crowd") {
        return (            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="No_Crowd" data-name="No Crowd"><path class="cls-1" d="M32,26A13,13,0,1,0,19,13,13,13,0,0,0,32,26ZM32,2A11,11,0,1,1,21,13,11,11,0,0,1,32,2Z"/><path class="cls-1" d="M25,18.05h.13a1,1,0,0,0,.71-.29l11-10.95a1,1,0,0,0-.2-1.57A9,9,0,0,0,24.25,17.57,1,1,0,0,0,25,18.05ZM32,6a7,7,0,0,1,2.35.41l-8.94,8.94A7,7,0,0,1,32,6Z"/><path class="cls-1" d="M27,20a1,1,0,0,0,.48.73A9,9,0,0,0,39.75,8.43a1,1,0,0,0-1.57-.2l-10.95,11A1,1,0,0,0,27,20Zm11.64-9.37a7,7,0,0,1-8.94,8.94Z"/><path class="cls-1" d="M63,62h-.19A2.87,2.87,0,0,0,63,61V49a7,7,0,0,0-6.56-7A6,6,0,0,0,58,38V35a6,6,0,0,0-12,0v3a6,6,0,0,0,1.56,4A7,7,0,0,0,42,45.4,7,7,0,0,0,36.44,42,6,6,0,0,0,38,38V35a6,6,0,1,0-12,0v3a6,6,0,0,0,1.56,4A7,7,0,0,0,22,45.4,7,7,0,0,0,16.44,42,6,6,0,0,0,18,38V35A6,6,0,0,0,6,35v3a6,6,0,0,0,1.56,4A7,7,0,0,0,1,49V61a2.87,2.87,0,0,0,.19,1H1a1,1,0,0,0,0,2H63a1,1,0,0,0,0-2ZM48,35a4,4,0,1,1,8,0v3a4,4,0,1,1-8,0Zm0,9h8a5,5,0,0,1,5,5V61a1,1,0,0,1-1,1,1,1,0,0,1-.38-.08l-.08,0A1,1,0,0,1,59,61V48a1,1,0,0,0-2,0V62H47V48a1,1,0,0,0-2,0V61a1,1,0,0,1-.54.88l-.08,0A1,1,0,0,1,44,62a1,1,0,0,1-1-1V49A5,5,0,0,1,48,44ZM28,35a4,4,0,1,1,8,0v3a4,4,0,1,1-8,0Zm0,9h8a5,5,0,0,1,5,5V61a1,1,0,0,1-1,1,1,1,0,0,1-.38-.08l-.08,0A1,1,0,0,1,39,61V48a1,1,0,0,0-2,0V62H27V48a1,1,0,0,0-2,0V61a1,1,0,0,1-.54.88l-.08,0A1,1,0,0,1,24,62a1,1,0,0,1-1-1V49A5,5,0,0,1,28,44ZM8,35a4,4,0,1,1,8,0v3a4,4,0,0,1-8,0ZM7,61V48a1,1,0,0,0-2,0V61a1,1,0,0,1-.54.88l-.08,0A1,1,0,0,1,4,62a1,1,0,0,1-1-1V49a5,5,0,0,1,5-5h8a5,5,0,0,1,5,5V61a1,1,0,0,1-1,1,1,1,0,0,1-.38-.08l-.08,0A1,1,0,0,1,19,61V48a1,1,0,0,0-2,0V62H7Z"/></g></svg>
        );
    }
    if (icon === "do-not-touch") {
        return (            
            <svg id="Capa_1" enable-background="new 0 0 512.001 512.001" height="512" viewBox="0 0 512.001 512.001" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m236.021 169.006c3.098 2.75 7.837 2.468 10.588-.629 2.75-3.098 2.469-7.838-.629-10.588-17.464-15.506-27.479-37.776-27.479-61.102 0-45.043 36.645-81.688 81.688-81.688s81.688 36.645 81.688 81.688c0 23.325-10.016 45.597-27.479 61.102-3.098 2.75-3.379 7.49-.629 10.588 1.482 1.669 3.542 2.521 5.611 2.521 1.771 0 3.548-.623 4.977-1.892 20.667-18.35 32.521-44.709 32.521-72.318-.002-53.314-43.376-96.688-96.69-96.688s-96.688 43.374-96.688 96.688c.001 27.608 11.854 53.968 32.521 72.318z"/><path d="m246.304 219.914-31.82-31.82c-2.929-2.929-7.677-2.929-10.607 0l-79.627 79.627-79.627-79.627c-2.929-2.929-7.677-2.929-10.607 0l-31.82 31.821c-2.929 2.929-2.929 7.677 0 10.607l79.627 79.627-79.626 79.626c-2.929 2.929-2.929 7.677 0 10.607l31.82 31.82c2.929 2.929 7.677 2.929 10.607 0l79.627-79.627 79.627 79.627c2.929 2.929 7.677 2.929 10.607 0l31.821-31.821c2.929-2.929 2.929-7.677 0-10.607l-79.627-79.627 79.627-79.627c2.927-2.928 2.927-7.676-.002-10.606zm-95.537 84.931c-2.929 2.929-2.929 7.677 0 10.607l79.627 79.627-21.214 21.214-79.627-79.627c-2.929-2.929-7.677-2.929-10.607 0l-79.626 79.626-21.213-21.213 79.627-79.627c2.929-2.929 2.929-7.677 0-10.607l-79.627-79.627 21.214-21.214 79.627 79.627c2.929 2.929 7.677 2.929 10.607 0l79.627-79.627 21.213 21.213z"/><path d="m475.313 218.5c-9.158 0-17.536 3.381-23.971 8.95-5.189-13.969-18.651-23.95-34.404-23.95-9.158 0-17.536 3.381-23.971 8.95-5.189-13.969-18.651-23.95-34.404-23.95-8.109 0-15.608 2.649-21.688 7.121v-98.933c0-20.229-16.458-36.688-36.688-36.688s-36.688 16.458-36.688 36.688v36.372c-9.463-9.564-15-22.602-15-36.372 0-28.501 23.187-51.688 51.688-51.688s51.688 23.187 51.688 51.688c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5c.001-36.772-29.915-66.688-66.687-66.688s-66.688 29.916-66.688 66.688c0 22.446 11.389 43.389 30 55.676v205.386c0 29.798 10.632 58.431 30 80.959v65.791c0 4.143 3.357 7.5 7.5 7.5h173.5c4.143 0 7.5-3.357 7.5-7.5v-65.791c19.368-22.527 30-51.16 30-80.959v-102.562c.001-20.23-16.457-36.688-36.687-36.688zm21.688 139.25c0 27.058-9.97 53.021-28.071 73.108-1.241 1.377-1.929 3.166-1.929 5.021v61.121h-158.5v-61.121c0-1.854-.688-3.644-1.929-5.021-18.102-20.088-28.071-46.052-28.071-73.108v-261.062c0-11.959 9.729-21.688 21.688-21.688s21.688 9.729 21.688 21.688v159.312c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-30.813c0-11.959 9.729-21.688 21.688-21.688s21.688 9.729 21.688 21.688v30.813c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-15.813c0-11.959 9.729-21.688 21.688-21.688s21.688 9.729 21.688 21.688v15.813c.451 3.76 3.632 6.688 7.5 6.688s7.049-2.927 7.454-6.688c.046 0 .046-.813.046-.813 0-11.959 9.729-21.688 21.688-21.688s21.688 9.729 21.688 21.688v102.563z"/></g></svg>
        );
    }
    if (icon === "mask") {
        return (            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Masker_N95" data-name="Masker N95"><path class="cls-1" d="M24.11,22a8.76,8.76,0,0,0,3.43-1.15,10.36,10.36,0,0,0,2.14-2C30.47,17.88,31.22,17,32,17h0c.76,0,1.51.86,2.3,1.78a10.36,10.36,0,0,0,2.14,2A8.76,8.76,0,0,0,39.89,22H40a1,1,0,0,0,.11-2,7.2,7.2,0,0,1-2.57-.85,9.23,9.23,0,0,1-1.71-1.67C34.83,16.33,33.69,15,32,15H32c-1.67,0-2.81,1.31-3.81,2.47a9.23,9.23,0,0,1-1.71,1.67,7.2,7.2,0,0,1-2.57.85,1,1,0,1,0,.22,2Z"/><path class="cls-1" d="M57,11c-3.56,0-7.19,5.37-9.48,9.56C42.24,15.36,34.67,11,32,11s-10.24,4.36-15.52,9.56C14.19,16.37,10.56,11,7,11c-4.71,0-7,6.54-7,20,0,9.23,4.11,19,8,19,2.13,0,5.45-3.2,7.89-5.92C19.39,49,24.76,53,32,53s12.61-4,16.11-8.92C50.55,46.8,53.87,50,56,50c3.89,0,8-9.77,8-19C64,17.54,61.71,11,57,11ZM8,48c-2,0-6-7.87-6-17C2,19.39,3.78,13,7,13c2.4,0,5.65,4.64,8,9.08-2.39,2.66-4,5.45-4,7.92a25.6,25.6,0,0,0,3.76,12.33C12,45.4,9.18,48,8,48Zm24,3c-6.91,0-11.71-3.87-14.76-8.47.71-.85,1.27-1.56,1.55-1.92a1,1,0,0,0-1.58-1.22c-.34.44-.7.88-1.07,1.33A24.38,24.38,0,0,1,13,30c0-1.8,1.2-3.91,3-6,.36.73.68,1.44,1,2.09a1,1,0,1,0,1.84-.79c-.16-.36-.64-1.45-1.35-2.87C22.34,17.49,29.78,13,32,13s9.66,4.49,14.55,9.41c-.71,1.42-1.19,2.51-1.35,2.87a1,1,0,1,0,1.84.79c.28-.65.6-1.36,1-2.09,1.8,2.11,3,4.22,3,6a24.38,24.38,0,0,1-3.14,10.72c-.37-.45-.73-.89-1.07-1.33a1,1,0,1,0-1.58,1.22c.28.36.84,1.07,1.55,1.92C43.71,47.13,38.91,51,32,51Zm24-3c-1.18,0-4-2.6-6.76-5.67A25.6,25.6,0,0,0,53,30c0-2.47-1.64-5.26-4-7.92C51.35,17.64,54.6,13,57,13c3.22,0,5,6.39,5,18C62,40.13,58,48,56,48Z"/><path class="cls-1" d="M46.92,33.34a1,1,0,0,0-1.3-.56A38.46,38.46,0,0,1,32,35a38.46,38.46,0,0,1-13.62-2.22,1,1,0,1,0-.74,1.86A40.5,40.5,0,0,0,32,37a40.5,40.5,0,0,0,14.36-2.36A1,1,0,0,0,46.92,33.34Z"/><path class="cls-1" d="M38.85,40.51a48.37,48.37,0,0,1-13.7,0,1,1,0,1,0-.3,2A49.32,49.32,0,0,0,32,43a49.32,49.32,0,0,0,7.15-.51,1,1,0,1,0-.3-2Z"/><path class="cls-1" d="M38.85,28.51a48.37,48.37,0,0,1-13.7,0,1,1,0,0,0-.3,2A49.32,49.32,0,0,0,32,31a49.32,49.32,0,0,0,7.15-.51,1,1,0,0,0-.3-2Z"/></g></svg>
        );
    }
    if (icon === "damaged-box") {
        return (            
            <svg width="41px" height="41px" viewBox="0 0 41 41" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="r" transform="translate(-92.000000, -442.000000)" fill="#919191" fill-rule="nonzero">
                        <g id="damaged-box" transform="translate(92.000000, 442.000000)">
                            <path d="M17.1515425,30.890411 L13.4933908,30.890411 C13.0400013,30.890411 12.6723305,30.5131548 12.6723305,30.0479452 C12.6723305,29.5827356 13.0400013,29.2054795 13.4933908,29.2054795 L17.1515425,29.2054795 C17.604932,29.2054795 17.9726027,29.5827356 17.9726027,30.0479452 C17.9726027,30.5131548 17.604932,30.890411 17.1515425,30.890411 Z M10.4223792,30.890411 L9.24571776,30.890411 C8.79232831,30.890411 8.42465753,30.5131548 8.42465753,30.0479452 C8.42465753,29.5827356 8.79232831,29.2054795 9.24571776,29.2054795 L10.4223792,29.2054795 C10.8757686,29.2054795 11.2434394,29.5827356 11.2434394,30.0479452 C11.2434394,30.5131548 10.8758507,30.890411 10.4223792,30.890411 Z" id="Shape"></path>
                            <path d="M17.1515354,33.6986301 L9.24572483,33.6986301 C8.79233147,33.6986301 8.42465753,33.321374 8.42465753,32.8561644 C8.42465753,32.3909548 8.79233147,32.0136986 9.24572483,32.0136986 L17.1515354,32.0136986 C17.6049288,32.0136986 17.9726027,32.3909548 17.9726027,32.8561644 C17.9726027,33.321374 17.6049288,33.6986301 17.1515354,33.6986301 Z" id="Shape"></path>
                            <path d="M19.2610488,37.0684932 L7.13621151,37.0684932 C6.29820119,37.0684932 5.61643836,36.3974919 5.61643836,35.5727112 L5.61643836,27.3337235 C5.61643836,26.50766 6.29820119,25.8356164 7.13621151,25.8356164 L19.2610488,25.8356164 C20.0990591,25.8356164 20.7808219,26.50766 20.7808219,27.3337235 L20.7808219,35.5727112 C20.7808219,36.3974919 20.0990591,37.0684932 19.2610488,37.0684932 Z M7.24316905,35.4649533 L19.1540912,35.4649533 L19.1540912,27.4392364 L7.24316905,27.4392364 L7.24316905,35.4649533 Z M19.2610488,27.4392364 L19.2620488,27.4392364 L19.2610488,27.4392364 Z" id="Shape"></path>
                            <path d="M36.2260396,31.4520548 C35.918153,31.4520548 35.6223091,31.283054 35.4750187,30.9889422 L35.4726607,30.9841497 C35.2646521,30.5688786 35.4332486,30.0638101 35.8493502,29.8561326 C36.2651149,29.6483709 36.7710729,29.8166991 36.9791657,30.2322223 C37.1871744,30.6474934 37.0196727,31.1550002 36.6037395,31.3625937 C36.4822187,31.4232994 36.3531186,31.4520548 36.2260396,31.4520548 Z" id="Shape"></path>
                            <path d="M38.5212862,33.4055297 C38.3557078,32.9951238 37.8874261,32.7966075 37.4756502,32.9612503 C37.0637938,33.1262936 36.8642155,33.5925947 37.0297136,34.0030005 L38.3777313,37.3436642 C38.9570148,38.779404 38.7891054,39.0929141 38.7680464,39.1239047 C38.5818108,39.3984962 37.0828434,39.3984962 36.5185905,39.3984962 L33.0121851,39.3984962 L27.5554099,32.1795173 C27.3707015,31.9350355 27.0622915,31.8170789 26.760794,31.8749761 C26.4592965,31.9330335 26.217359,32.1570951 26.1373026,32.4525072 L24.8409679,37.2360378 L20.4939703,39.2597991 L3.39188443,39.2597991 C2.5438976,39.2597991 2.03229227,39.14945 1.8278109,38.9223454 C1.61898912,38.6905962 1.55918796,38.1499015 1.65001498,37.3149958 L2.82015644,26.5251256 L7.08709757,22.8910518 C7.27928113,22.7273699 7.38296862,22.4830483 7.36697342,22.2317598 C7.35097821,21.9803111 7.21722939,21.7511245 7.00583552,21.6128277 L3.59371333,19.3816613 L3.91844004,16.3837366 L9.9091656,16.9802465 L10.6268599,20.0461584 C10.7293417,20.4841115 11.1903893,20.7560604 11.6253141,20.6355412 C12.0347591,20.5221491 12.2888337,20.0946063 12.1922998,19.6823586 L11.5991109,17.1484128 L13.4874289,17.3362785 C13.514677,17.3390012 13.5416036,17.3403626 13.5682891,17.3403626 C13.9762069,17.3403626 14.3257704,17.0320577 14.3670846,16.6190893 C14.4112121,16.1789741 14.0888967,15.786586 13.6472202,15.7427026 L7.28796194,15.1099969 L4.00862405,9.66605333 C4.00862405,9.66605333 4.01015123,3.46976571 4.00934745,3.34083821 C4.00532855,2.67393871 4.0004255,1.8438378 4.18079351,1.67887467 C4.19349321,1.66726319 4.31896311,1.56708412 4.82373632,1.61312965 L15.8522271,2.62236771 L14.9498244,12.4326292 C14.9213706,12.741815 15.0748924,13.0395494 15.3437565,13.1965847 C15.6127813,13.3537001 15.948359,13.3416081 16.2052468,13.1658343 L20.7234492,10.0743771 L24.6053802,13.9317918 C24.7586609,14.0841825 24.9638657,14.165623 25.1730893,14.165623 C25.2649613,14.165623 25.3574762,14.1500076 25.4468565,14.1176556 C25.7398339,14.011871 25.9449583,13.7468889 25.9733317,13.4377032 L26.873323,3.63096512 L38.000759,4.64925213 C38.4088376,4.68656903 38.7007701,4.78955087 38.7815499,4.92464447 C38.9892464,5.27170768 38.5466053,6.30232688 38.3087671,6.85599441 C38.2529044,6.9861231 34.0133722,17.3140165 34.0133722,17.3140165 L30.6508431,18.2776094 L30.6231128,14.9443932 C30.619335,14.5021959 30.257313,14.1476052 29.8126624,14.1502478 C29.3688157,14.1539315 29.0118574,14.515489 29.0155548,14.9576863 L29.0469826,18.7371839 L27.5693153,19.1606427 C27.384848,19.213495 27.2254586,19.3304106 27.1199224,19.4902486 L25.0305793,22.6558592 C24.8089775,22.9916312 24.8772183,23.4540885 25.1877181,23.7111428 C25.55183,24.0125608 26.1139126,23.9295187 26.3737744,23.5357693 L28.2996288,20.6178437 L33.2348318,19.2035651 C33.2073426,19.2688297 33.1804964,19.3327329 33.1544539,19.3943138 C32.2836398,21.4587553 32.1519004,21.9272186 33.170208,24.4492327 L34.3312668,27.3239956 C34.497006,27.7342413 34.9652876,27.9328377 35.3770636,27.7679546 C35.7888396,27.6028313 35.9883375,27.13637 35.8226787,26.7260442 L34.6616199,23.8513614 C33.8578409,21.860833 33.8724697,21.8261587 34.636542,20.0147673 C34.7327544,19.7867819 39.7345906,7.60753763 39.7868363,7.48605749 C40.2098651,6.50108343 40.789229,5.15206937 40.1626029,4.10463354 C39.7989733,3.49667232 39.1210661,3.14328285 38.1479309,3.05431487 L4.97066712,0.0181923925 C4.14390005,-0.0569218893 3.53013442,0.100033326 3.0937628,0.498987859 C2.38868787,1.14378551 2.39479659,2.16631671 2.40186985,3.35028756 C2.40267363,3.47609197 2.40106607,9.88739221 2.40106607,9.88739221 C2.40098569,10.0326559 2.440612,10.1752769 2.51568495,10.29972 L5.29354514,14.9111603 L3.28498182,14.7109623 C2.84523434,14.6670789 2.45307057,14.984673 2.40580837,15.4218253 L1.94275129,19.6965326 C1.91043938,19.9953081 2.04860898,20.2870366 2.30083483,20.4519997 L5.22892131,22.3666131 L1.53314552,25.5142859 C1.37737315,25.6469771 1.27834758,25.833962 1.25632404,26.0369628 L0.0517808445,37.1427455 C-0.04788775,38.0590917 -0.0721618754,39.211191 0.631385873,39.9922034 C1.32143013,40.7580808 2.41408729,40.8613829 3.39188443,40.8613829 L20.6726504,40.8613829 C20.7902433,40.8613829 20.9063893,40.8356775 21.0128901,40.7861085 L25.8599989,38.5294769 C26.0746079,38.4296181 26.2339972,38.2405511 26.2957275,38.0127258 L27.2607445,34.4517643 L31.9692818,40.6809645 C32.121196,40.8818832 32.3589539,41 32.6113405,41 L36.5185905,41 C38.2266209,41 39.4833293,40.9297705 40.1000689,40.0206315 C40.7025013,39.1323931 40.32151,37.8669817 39.869304,36.7461933 L38.5212862,33.4055297 Z M17.4530333,2.76883255 L25.2725972,3.4844202 L24.5283782,11.5932392 L21.386165,8.47087139 C21.1122371,8.19860214 20.6825369,8.15936334 20.363517,8.37773929 L16.7068853,10.8796535 L17.4530333,2.76883255 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "cancel") {
        return (            
            <svg width="47px" height="47px" viewBox="0 0 47 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="r" transform="translate(-89.000000, -344.000000)" fill="#919191" fill-rule="nonzero">
                        <g id="cancel" transform="translate(89.000000, 344.000000)">
                            <path d="M40.1169343,6.88306574 C35.6784303,2.4443745 29.7771215,0 23.5,0 C17.2228785,0 11.3215697,2.4443745 6.88306574,6.88306574 C2.4443745,11.3215697 0,17.2228785 0,23.5 C0,29.7771215 2.4443745,35.6784303 6.88306574,40.1169343 C11.3215697,44.5556255 17.2228785,47 23.5,47 C29.7771215,47 35.6784303,44.5556255 40.1169343,40.1169343 C44.5556255,35.6784303 47,29.7771215 47,23.5 C47,17.2228785 44.5556255,11.3215697 40.1169343,6.88306574 Z M23.5,45.12749 C11.5745458,45.12749 1.87250996,35.4254542 1.87250996,23.5 C1.87250996,11.5745458 11.5745458,1.87250996 23.5,1.87250996 C35.4254542,1.87250996 45.12749,11.5745458 45.12749,23.5 C45.12749,35.4254542 35.4254542,45.12749 23.5,45.12749 Z" id="Shape"></path>
                            <path d="M27.7884091,23.5000472 L34.3632739,16.9260194 C35.545481,15.7437571 35.545481,13.8202567 34.3632739,12.6380888 C33.7904344,12.0654084 33.0289137,11.75 32.218972,11.75 C31.4090304,11.75 30.6474153,12.0655027 30.0747645,12.6380888 L23.4999941,19.2121166 L16.9252237,12.6381832 C16.3524785,12.0655027 15.5909578,11.75 14.7810162,11.75 C13.9710745,11.75 13.2094594,12.0654084 12.6367143,12.6380888 C11.4545072,13.8203511 11.4545072,15.7438514 12.6367143,16.9260194 L19.2115791,23.5000472 L12.6367143,30.074075 C11.4544128,31.2563373 11.4544128,33.179932 12.6368087,34.3621943 C13.2096482,34.934686 13.9710745,35.25 14.7810162,35.25 C15.5910522,35.25 16.3525729,34.934686 16.9252237,34.3621 L23.4999941,27.7879778 L30.0747645,34.3621 C30.6475097,34.934686 31.408936,35.25 32.218972,35.25 C33.0289137,35.25 33.79034,34.934686 34.3632739,34.3621 C35.5455754,33.1798376 35.5455754,31.2562429 34.3632739,30.074075 L27.7884091,23.5000472 Z M33.0284417,33.0272298 C32.8121993,33.2433534 32.5247885,33.3624574 32.218972,33.3624574 C31.91325,33.3624574 31.6257447,33.2434478 31.4096911,33.0273242 L24.1674102,25.7858613 C23.9903387,25.6089042 23.7503105,25.5094307 23.4999941,25.5094307 C23.2496777,25.5094307 23.0096495,25.6089042 22.832578,25.7858613 L15.5902971,33.0273242 C15.3742435,33.2434478 15.0867382,33.3624574 14.7810162,33.3624574 C14.4751997,33.3624574 14.1877889,33.2433534 13.9716409,33.0273242 C13.525281,32.5811091 13.525281,31.8550658 13.9716409,31.4088508 L21.2139218,24.1673879 C21.3908989,23.9903364 21.4903836,23.7503353 21.4903836,23.5000472 C21.4903836,23.249759 21.3908989,23.009758 21.2139218,22.8327065 L13.9716409,15.5912436 C13.525281,15.1451229 13.525281,14.4190796 13.9716409,13.9728646 C14.1877889,13.7566466 14.4752941,13.6375426 14.7810162,13.6375426 C15.0867382,13.6375426 15.3741491,13.7566466 15.5902971,13.9728646 L22.8324836,21.2142331 C23.2012567,21.5826814 23.7987315,21.5826814 24.1674102,21.2142331 L31.4096911,13.9727702 C31.6258391,13.7566466 31.91325,13.6375426 32.218972,13.6375426 C32.5246941,13.6375426 32.8121993,13.7566466 33.0283473,13.9728646 C33.4747072,14.4189853 33.4747072,15.1450285 33.0283473,15.5912436 L25.7860664,22.8327065 C25.6090893,23.009758 25.5096046,23.249759 25.5096046,23.5000472 C25.5096046,23.7503353 25.6090893,23.9903364 25.7860664,24.1673879 L33.0283473,31.4088508 C33.4747072,31.8549715 33.4747072,32.5810147 33.0284417,33.0272298 Z" id="Shape"></path>
                            <path d="M15.9243066,5.83937373 C15.6979869,5.39066358 15.1536988,5.21187209 14.7090131,5.44023676 C11.6188992,7.02484698 9.01170323,9.43060406 7.16905937,12.3974311 C5.27426436,15.4481862 4.27272727,18.9721647 4.27272727,22.5887284 C4.27272727,23.0919326 4.67746358,23.5 5.17656004,23.5 C5.67565649,23.5 6.0803928,23.0919326 6.0803928,22.5887284 C6.0803928,16.0017837 9.70069494,10.053276 15.5284278,7.06466955 C15.9733847,6.83648713 16.1506263,6.28790162 15.9243066,5.83937373 Z" id="Shape"></path>
                            <path d="M20.1020416,6.40909091 C20.1609656,6.40909091 20.2207651,6.40299635 20.2806522,6.39054225 C21.3953924,6.15744746 22.5433156,6.03926602 23.6926397,6.03926602 C24.1761141,6.03926602 24.5681818,5.643738 24.5681818,5.15599665 C24.5681818,4.6682553 24.1761141,4.27272727 23.6926397,4.27272727 C22.4242419,4.27272727 21.1567196,4.40327449 19.9253572,4.66074751 C19.4517765,4.75976201 19.1475257,5.22718816 19.2456739,5.70486024 C19.3313895,6.12211669 19.6957026,6.40909091 20.1020416,6.40909091 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "contact-form") {
        return (            
            <svg width="47px" height="47px" viewBox="0 0 47 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="r" transform="translate(-89.000000, -250.000000)" fill="#919191" fill-rule="nonzero">
                        <path d="M134.074052,250.516185 C132.233937,249.452401 129.872678,250.085985 128.810469,251.928192 L123.558453,261.035376 L112.231992,261.035376 C111.724985,261.035376 111.314,261.44692 111.314,261.954412 C111.314,262.461903 111.724985,262.873447 112.231992,262.873447 L122.498448,262.873447 L118.687128,269.482417 L97.262112,269.482417 C96.755105,269.482417 96.3441199,269.893961 96.3441199,270.401453 C96.3441199,270.909036 96.755105,271.320488 97.262112,271.320488 L117.627031,271.320488 L115.50702,274.996631 L97.262112,274.996631 C96.755105,274.996631 96.3441199,275.408175 96.3441199,275.915667 C96.3441199,276.423158 96.755105,276.834703 97.262112,276.834703 L115.127339,276.834703 L114.731776,280.510845 L97.262112,280.510845 C96.755105,280.510845 96.3441199,280.922389 96.3441199,281.429881 C96.3441199,281.937373 96.755105,282.348917 97.262112,282.348917 L114.533949,282.348917 L114.485111,282.802828 C114.446189,283.164561 114.624095,283.515265 114.938783,283.697142 C115.081347,283.77958 115.239701,283.820293 115.397687,283.820293 C115.588538,283.820293 115.778746,283.760831 115.939303,283.643378 L121.800774,279.356536 C121.904048,279.280992 121.990339,279.184769 122.054231,279.073933 L129.208051,266.669249 L129.208051,284.482642 C129.208051,286.541833 127.534644,288.217235 125.477699,288.217235 L104.203142,288.217235 C103.875143,288.217235 103.572114,288.392404 103.40816,288.676753 L100.198218,294.242893 L96.9882749,288.676753 C96.8243216,288.392404 96.5212924,288.217235 96.1932938,288.217235 L94.5663365,288.217235 C92.5093918,288.217235 90.8359841,286.541833 90.8359841,284.482642 L90.8359841,266.608041 C90.8359841,264.548849 92.5093918,262.873447 94.5663365,262.873447 L103.970155,262.873447 C104.477162,262.873447 104.888147,262.461903 104.888147,261.954412 C104.888147,261.446828 104.477162,261.035376 103.970155,261.035376 L94.5663365,261.035376 C91.4970301,261.035376 89,263.535245 89,266.608041 L89,284.482642 C89,287.555438 91.4970301,290.055307 94.5663365,290.055307 L95.6632452,290.055307 L99.4032366,296.540482 C99.56719,296.824832 99.8702191,297 100.198218,297 C100.526216,297 100.829245,296.824832 100.993199,296.540482 L104.73319,290.055307 L125.477791,290.055307 C128.547097,290.055307 131.044127,287.555438 131.044127,284.482642 L131.044127,266.608041 C131.044127,265.820243 130.877236,265.042004 130.55805,264.328465 L135.484547,255.785844 C136.546847,253.943729 135.914167,251.579785 134.074052,250.516185 Z M133.15606,252.107955 C134.119401,252.664799 134.450612,253.902372 133.894401,254.866808 L133.36986,255.776378 L129.875891,253.756797 L130.400431,252.847227 C130.956643,251.882883 132.192719,251.551387 133.15606,252.107955 Z M116.937068,277.177319 L119.5796,278.704756 L116.532968,280.932958 L116.937068,277.177319 Z M120.923265,277.359012 L117.429295,275.339431 L128.957899,255.348567 L132.451868,257.368148 L120.923265,277.359012 Z" id="contact-form"></path>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "track-order") {
        return (            
            <svg width="47px" height="47px" viewBox="0 0 47 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="r" transform="translate(-89.000000, -157.000000)" fill="#919191" fill-rule="nonzero">
                        <g id="track-order" transform="translate(89.000000, 157.000000)">
                            <path d="M39.5012793,35 C37.5706733,35 36,33.4298493 36,31.5 C36,29.5701507 37.5706733,28 39.5012793,28 C41.4304232,28 43,29.5701507 43,31.5 C43,33.4298493 41.4304232,35 39.5012793,35 Z M39.5012793,29.8282013 C38.5782837,29.8282013 37.8275331,30.5781295 37.8275331,31.5 C37.8275331,32.4218705 38.5783751,33.1717987 39.5012793,33.1717987 C40.4228128,33.1717987 41.1724669,32.4218705 41.1724669,31.5 C41.1724669,30.5781295 40.4228128,29.8282013 39.5012793,29.8282013 Z" id="Shape"></path>
                            <path d="M16.6234961,15.7055273 L16.6234961,9.23100195 L32.0152617,9.23100195 C34.9009883,9.23100195 37.2486016,11.5775137 37.2486016,14.4616797 C37.2486016,17.3474062 34.9009883,19.6950195 32.0152617,19.6950195 L25.6897227,19.6950195 C25.1828203,19.6950195 24.7717539,20.1060859 24.7717539,20.6129883 C24.7717539,21.1198906 25.1828203,21.530957 25.6897227,21.530957 L32.0152617,21.530957 C35.9132324,21.530957 39.0845391,18.3596504 39.0845391,14.4616797 C39.0845391,10.5651777 35.9132324,7.39506445 32.0152617,7.39506445 L16.6234961,7.39506445 L16.6234961,0.91796875 C16.6234961,0.411066406 16.2124297,0 15.7055273,0 L0.91796875,0 C0.411066406,0 0,0.411066406 0,0.91796875 L0,15.7055273 C0,16.2124297 0.411066406,16.6234961 0.91796875,16.6234961 L15.7055273,16.6234961 C16.2124297,16.6234961 16.6234961,16.2124297 16.6234961,15.7055273 Z M6.58991406,1.8359375 L10.033582,1.8359375 L10.033582,5.31320312 L8.79469141,4.54963672 C8.49956445,4.36778711 8.12705273,4.36760352 7.83174219,4.54945312 L6.59000586,5.3140293 L6.59000586,1.8359375 L6.58991406,1.8359375 Z M14.7875586,14.7875586 L1.8359375,14.7875586 L1.8359375,1.8359375 L4.75397656,1.8359375 L4.75397656,6.95737695 C4.75397656,7.28995703 4.93389844,7.59655859 5.22425195,7.75876367 C5.51469727,7.92096875 5.87022656,7.9135332 6.15323633,7.73893555 L8.31266602,6.40916602 L10.4698008,7.73875195 C10.6172266,7.82963086 10.7842969,7.87525391 10.951459,7.87525391 C11.1054941,7.87525391 11.2597129,7.83651562 11.3989687,7.75876367 C11.6894141,7.59655859 11.8694277,7.28995703 11.8694277,6.95728516 L11.8694277,1.8359375 L14.7875586,1.8359375 L14.7875586,14.7875586 Z" id="Shape"></path>
                            <path d="M43.2109004,39.8146914 C45.0890645,37.3468242 46.8254023,34.9810352 46.7892344,31.4195918 C46.7867559,27.1965684 43.3514414,23.7620801 39.1293359,23.7620801 C34.9057617,23.7620801 31.4693457,27.1970273 31.4667754,31.4200508 C31.4308828,34.981127 33.1673125,37.3474668 35.0468535,39.8146914 C33.1950352,40.3322422 31.924291,41.1879727 31.4559434,42.229041 L8.56804492,42.229041 C7.00235742,42.229041 5.72858398,40.9565527 5.72858398,39.392334 C5.72858398,37.8266465 7.00235742,36.552873 8.56804492,36.552873 L21.0189141,36.552873 C23.5969375,36.552873 25.6943125,34.4566914 25.6943125,31.8801367 C25.6943125,29.3021133 23.5969375,27.2047383 21.0189141,27.2047383 L9.3824668,27.2047383 C7.81824805,27.2047383 6.54566797,25.9321582 6.54566797,24.3679395 C6.54566797,22.8037207 7.81824805,21.5311406 9.3824668,21.5311406 L17.4463633,21.5311406 C17.9532656,21.5311406 18.364332,21.1200742 18.364332,20.6131719 C18.364332,20.1062695 17.9532656,19.6952031 17.4463633,19.6952031 L9.3824668,19.6952031 C6.80591211,19.6952031 4.70973047,21.7913848 4.70973047,24.3679395 C4.70973047,26.9444941 6.80591211,29.0406758 9.3824668,29.0406758 L21.0189141,29.0406758 C22.5846016,29.0406758 23.858375,30.3144492 23.858375,31.8801367 C23.858375,33.4443555 22.5846016,34.7169355 21.0189141,34.7169355 L8.56804492,34.7169355 C5.99002148,34.7169355 3.89264648,36.8143105 3.89264648,39.392334 C3.89264648,41.9687969 5.99002148,44.0649785 8.56804492,44.0649785 L31.45475,44.0649785 C31.8092695,44.8592969 32.6308516,45.5519961 33.8545039,46.0682617 C35.2786406,46.6690723 37.1519395,47 39.1293359,47 C41.1056309,47 42.9781953,46.6690723 44.4019648,46.0681699 C46.0772578,45.3609668 47,44.3235703 47,43.1468262 C47,41.6955176 45.5820137,40.4776484 43.2109004,39.8146914 Z M33.3026211,31.4342793 C33.3027129,31.4310664 33.3027129,31.4278535 33.3027129,31.4246406 C33.3027129,28.2118418 35.9165371,25.5980176 39.1293359,25.5980176 C42.340666,25.5980176 44.9532969,28.2118418 44.9532969,31.4246406 C44.9532969,31.4278535 44.9532969,31.4310664 44.9533887,31.4342793 C44.985334,34.4552227 43.422125,36.5075254 41.6122578,38.8836875 C41.4234316,39.1315391 39.5828125,41.3258516 39.5828125,41.3258516 C39.4240957,41.5091699 39.2592285,41.6160215 39.1292441,41.6199687 C38.949873,41.6147363 38.7670137,41.4339883 38.6745742,41.3273203 C38.6745742,41.3273203 36.8372598,39.1348437 36.6494434,38.8886445 C34.8363633,36.5107383 33.2706758,34.457334 33.3026211,31.4342793 Z M39.1293359,45.1640625 C35.2229199,45.1640625 33.0919473,43.8314473 33.0919473,43.1468262 C33.0919473,42.6801309 34.1190625,41.8401895 36.3120898,41.3983711 L37.2849531,42.5271973 C37.9445137,43.2892031 38.6485957,43.4527852 39.1232773,43.4559062 L39.1291523,43.4559062 C39.1291523,43.4559062 39.1331914,43.4559062 39.1351191,43.4559062 C39.6085156,43.4527852 40.3112207,43.2892031 40.9715156,42.5263711 L41.9454805,41.3982793 C44.1373145,41.8401895 45.1638789,42.6802227 45.1638789,43.1468262 C45.1640625,43.8314473 43.0340078,45.1640625 39.1293359,45.1640625 Z" id="Shape"></path>
                            <path d="M20.6499824,20.6129883 C20.6499824,21.1198906 21.0610488,21.530957 21.5679512,21.530957 L21.5705215,21.530957 C22.0774238,21.530957 22.4872051,21.1198906 22.4872051,20.6129883 C22.4872051,20.1060859 22.0748535,19.6950195 21.5678594,19.6950195 C21.0608652,19.6950195 20.6499824,20.1059941 20.6499824,20.6129883 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    
    if (icon === "return-box") {
        return (            
            <svg width="47px" height="47px" viewBox="0 0 47 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="r" transform="translate(-89.000000, -63.000000)" fill="#919191" fill-rule="nonzero">
                        <g id="return-box" transform="translate(89.000000, 63.000000)">
                            <path d="M46.5238033,10.1646408 L28.2189157,0.113222335 C27.9438833,-0.0377407782 27.6104022,-0.0377407782 27.3353699,0.113222335 L20.4358961,3.90164354 C20.2903118,3.94001186 20.1544093,4.01316263 20.0418146,4.1182272 L9.03084086,10.1646408 C8.73716237,10.3256442 8.55464413,10.6340249 8.55464413,10.9692993 L8.55464413,23.1259539 C6.69719001,23.7068571 4.99500182,24.7313265 3.57967923,26.1470092 C-0.109411115,29.8357445 -1.0499714,35.4618997 1.2392153,40.1467765 C1.46153606,40.602176 2.01124205,40.7911487 2.46664108,40.5684692 C2.92239867,40.3457896 3.11101269,39.7960831 2.88869193,39.3406836 C0.943743832,35.3600624 1.74302281,30.5798027 4.87774562,27.4450768 C6.83811276,25.4847078 9.44428574,24.4050167 12.2164822,24.4050167 C14.9886788,24.4050167 17.5948518,25.4847078 19.555219,27.4450768 C21.5152275,29.4050873 22.5949175,32.0112629 22.5949175,34.7834621 C22.5949175,37.5556614 21.5152275,40.1618369 19.5548604,42.1222059 C16.4201376,45.2569318 11.6398826,46.0562116 7.65926521,44.1112616 C7.20386618,43.888582 6.65416019,44.0775548 6.43183942,44.5329543 C6.2091601,44.9887123 6.39777412,45.5384188 6.85353171,45.7607398 C8.56002288,46.5948021 10.3909419,47 12.2085935,47 C15.379533,46.9996414 18.5081599,45.7654014 20.8532854,43.4202736 C21.9286723,42.3448855 22.7785114,41.1041911 23.3798532,39.7555632 L27.3353699,41.9274959 C27.4730654,42.0031566 27.6251041,42.0408078 27.7771428,42.0408078 C27.9291815,42.0408078 28.0815788,42.0031566 28.2189157,41.9274959 L46.5238033,31.876436 C46.8174818,31.715074 47,31.4066932 47,31.0717775 L47,24.6922411 C47,24.1852058 46.5890652,23.7742706 46.0820304,23.7742706 C45.5749956,23.7742706 45.1640608,24.1852058 45.1640608,24.6922411 L45.1640608,30.5285254 L28.697981,39.5701763 L28.697981,21.5621768 L34.1322894,18.5780555 L34.1322894,23.3084722 C34.1322894,23.6333478 34.3036915,23.9338396 34.5830268,24.0987875 C34.7271768,24.1837715 34.8885386,24.2264427 35.050259,24.2264427 C35.2022977,24.2264427 35.354695,24.1887916 35.492749,24.1127722 L39.4152762,21.9537486 C39.7085961,21.7923867 39.8903971,21.4843645 39.8903971,21.1498073 L39.8903971,15.4160775 L45.1640608,12.5205259 L45.1640608,17.3488357 C45.1640608,17.8558709 45.5749956,18.2668062 46.0820304,18.2668062 C46.5890652,18.2668062 47,17.8558709 47,17.3488357 L47,10.9692993 C47,10.6343834 46.8174818,10.3256442 46.5238033,10.1646408 Z M27.7771428,1.96494095 L44.1747334,10.9692993 L39.0021898,13.8096291 L22.6045992,4.80527075 L27.7771428,1.96494095 Z M27.7771428,19.973299 L11.3795522,10.9692993 L16.7417855,8.02462203 L33.1397348,17.0286217 L27.7771428,19.973299 Z M35.0466731,15.9815616 L18.6490825,6.97756193 L20.6973022,5.85268941 L37.0952514,14.8566892 L35.0466731,15.9815616 Z M20.8532854,26.1470092 C18.5461695,23.8398911 15.4788602,22.5694343 12.2164822,22.5694343 C11.5993629,22.5694343 10.9897737,22.6149742 10.3905833,22.7042612 L10.3905833,12.5205259 L26.8624004,21.565404 L26.8624004,39.5734035 L24.0034271,38.0035305 C24.2849139,36.9672278 24.4304982,35.8864611 24.4304982,34.7834621 C24.4304982,31.521081 23.1600425,28.4537687 20.8532854,26.1470092 Z M38.0548166,20.6072723 L35.9682286,21.7558112 L35.9682286,17.5700809 L38.0548166,16.4244107 L38.0548166,20.6072723 Z" id="Shape"></path>
                            <path d="M46.1454545,20.0818182 C45.9208026,20.0818182 45.7001562,20.1732992 45.5412642,20.3322222 C45.3823721,20.4911453 45.2909091,20.7115009 45.2909091,20.9365306 C45.2909091,21.1612264 45.3823721,21.381582 45.5412642,21.540505 C45.7001562,21.699762 45.9208026,21.7909091 46.1454545,21.7909091 C46.3701065,21.7909091 46.5907529,21.699762 46.7496448,21.540505 C46.908537,21.381582 47,21.1612264 47,20.9365306 C47,20.7115009 46.908537,20.4911453 46.7496448,20.3322222 C46.5907529,20.1732992 46.3701065,20.0818182 46.1454545,20.0818182 Z" id="Shape"></path>
                            <path d="M9.11145566,35.743673 C9.34698983,35.743673 9.58288357,35.6537412 9.76232106,35.4742376 C10.1219152,35.1145108 10.1219152,34.5313935 9.76232106,34.1716667 L9.12476062,33.5335114 L14.5654197,33.5335114 C15.88513,33.5335114 16.9588781,34.6076556 16.9588781,35.9278531 C16.9588781,37.2480505 15.88513,38.3221948 14.5654197,38.3221948 L11.3416584,38.3221948 C10.8331923,38.3221948 10.4210975,38.7344417 10.4210975,39.2430955 C10.4210975,39.7513895 10.8331923,40.1636364 11.3416584,40.1636364 L14.5654197,40.1636364 C16.9002643,40.1636364 18.8,38.2635593 18.8,35.9278531 C18.8,33.5921469 16.9002643,31.6920697 14.5654197,31.6920697 L9.12476062,31.6920697 L9.76232106,31.0539144 C10.1219152,30.6941876 10.1219152,30.1110703 9.76232106,29.7513435 C9.40308651,29.3919764 8.82018447,29.3919764 8.46059035,29.7513435 L6.25124409,31.9615051 C5.89200955,32.3212319 5.89200955,32.9043492 6.25124409,33.264076 L8.46059035,35.4738778 C8.64038741,35.6537412 8.87592158,35.743673 9.11145566,35.743673 Z" id="Shape"></path>
                            <path d="M4.27315785,43.5818182 C4.0301755,43.5818182 3.78886195,43.4784273 3.62030966,43.2779826 L3.61864076,43.2759816 C3.31491286,42.9151143 3.36164023,42.3768152 3.72277605,42.0733132 C4.08391196,41.7694776 4.62294564,41.8161703 4.92667354,42.1770375 C5.23006778,42.5382382 5.18434164,43.0775379 4.82320582,43.3810399 C4.66266384,43.5157814 4.46741019,43.5818182 4.27315785,43.5818182 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
    
    if (icon === "clock-style") {
        return (            
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 512.001 512.001">
            <g>
                <g>
                    <path d="M256.017,121.493c-39.609,0-76.892,13.013-107.816,37.633c-30.004,23.887-51.493,57.451-60.509,94.51
                        c-1.305,5.366,1.986,10.775,7.353,12.081c5.365,1.303,10.774-1.986,12.081-7.353c16.741-68.812,77.968-116.871,148.892-116.871
                        c84.491,0,153.229,68.738,153.229,153.229s-68.738,153.229-153.229,153.229c-71.594,0-132.953-48.616-149.215-118.225
                        c-1.257-5.378-6.635-8.72-12.013-7.463c-5.378,1.256-8.719,6.635-7.463,12.013c8.743,37.424,30.15,71.363,60.279,95.565
                        c30.593,24.576,69.094,38.11,108.412,38.11c95.519,0,173.229-77.71,173.229-173.229S351.536,121.493,256.017,121.493z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M489.249,66.953l-16.571-16.571C457.993,35.697,438.468,27.61,417.7,27.61s-40.292,8.088-54.977,22.773
                        c-3.905,3.905-3.905,10.237,0,14.142l35.315,35.315l-17.079,17.079c-33.644-23.749-73.231-37.345-114.943-39.222V60h21.266
                        c16.542,0,30-13.458,30-30s-13.458-30-30-30h-62.531c-16.542,0-30,13.458-30,30s13.458,30,30,30h21.266v17.697
                        c-41.711,1.877-81.298,15.473-114.941,39.22L113.999,99.84l35.315-35.315c3.905-3.905,3.905-10.237,0-14.142
                        C134.629,35.698,115.105,27.61,94.337,27.61s-40.292,8.087-54.978,22.773l-16.57,16.571C8.104,81.638,0.016,101.163,0.016,121.93
                        s8.088,40.292,22.772,54.978c1.875,1.875,4.419,2.929,7.071,2.929s5.196-1.054,7.071-2.929l34.765-34.765l15.636,15.636
                        c-31.464,38.61-48.574,86.46-48.574,136.944c0,49.704,16.592,96.851,47.132,135.144c-4.153,6.856-11.263,18.598-18.378,30.355
                        c-5.515,9.112-11.029,18.229-15.165,25.078c-2.071,3.43-3.797,6.292-5.005,8.301c-2.752,4.577-3.325,5.529-3.325,8.332
                        c0,2.66,1.06,5.211,2.945,7.088c2.97,2.957,4.991,2.961,12.513,2.977c1.073,0.002,2.262,0.003,3.528,0.003
                        c2.591,0,5.507-0.004,8.421-0.011c8.656-0.02,17.292-0.058,17.292-0.058c2.919-0.013,5.688-1.301,7.578-3.527l32.111-37.812
                        c36.865,26.869,81.121,41.387,127.613,41.387s90.747-14.518,127.612-41.387l32.111,37.812c1.89,2.226,4.658,3.514,7.578,3.527
                        c0,0,8.636,0.038,17.292,0.058c2.915,0.006,5.83,0.011,8.421,0.011c1.266,0,2.455-0.001,3.528-0.003
                        c7.521-0.016,9.543-0.021,12.513-2.977c1.885-1.877,2.945-4.428,2.945-7.088c0-2.803-0.573-3.755-3.325-8.332
                        c-1.208-2.009-2.934-4.871-5.005-8.301c-4.136-6.849-9.65-15.966-15.165-25.078c-7.115-11.757-14.226-23.499-18.378-30.355
                        c30.541-38.293,47.132-85.44,47.132-135.144c0-50.483-17.109-98.332-48.572-136.941l15.638-15.638l34.765,34.765
                        c1.875,1.875,4.419,2.929,7.072,2.929c2.652,0,5.196-1.054,7.071-2.929C519.563,146.593,519.563,97.268,489.249,66.953z
                         M224.751,40c-5.514,0-10-4.486-10-10s4.486-10,10-10h62.531c5.514,0,10,4.486,10,10s-4.486,10-10,10H224.751z M64.626,120.927
                        c0,0.001-0.001,0.001-0.002,0.002l-0.002,0.002l-34.156,34.157c-6.791-9.644-10.45-21.12-10.45-33.158
                        c0-15.425,6.007-29.927,16.915-40.835l16.571-16.571C64.76,53.266,79.548,47.637,94.337,47.637
                        c11.622,0,23.243,3.476,33.151,10.429l-34.7,34.7c-0.001,0.001-0.002,0.002-0.003,0.003c-0.001,0.001-0.002,0.002-0.003,0.003
                        L64.626,120.927z M85.839,128l14.018-14.018l15.314,15.314c-4.387,3.748-8.655,7.676-12.779,11.801
                        c-0.577,0.577-1.137,1.166-1.707,1.749L85.839,128z M84.028,491.952c-3.927,0.015-8.252,0.029-12.356,0.038
                        c7.451-12.33,18.353-30.342,28.059-46.369c0.882,0.912,1.761,1.827,2.661,2.726c3.374,3.374,6.849,6.611,10.4,9.734
                        L84.028,491.952z M440.361,491.99c-4.103-0.009-8.43-0.023-12.356-0.038l-28.764-33.871c3.552-3.123,7.026-6.36,10.401-9.734
                        c0.9-0.9,1.779-1.814,2.661-2.726C422.008,461.648,432.911,479.66,440.361,491.99z M453.275,294.722
                        c0,108.769-88.49,197.258-197.258,197.258c-108.769,0-197.258-88.49-197.258-197.258c0-108.769,88.49-197.259,197.258-197.259
                        S453.275,185.953,453.275,294.722z M411.351,142.848c-0.571-0.583-1.131-1.173-1.709-1.751c-4.124-4.124-8.39-8.052-12.776-11.799
                        l15.316-15.316L426.199,128L411.351,142.848z M481.565,155.082l-34.149-34.15c-0.001-0.001-0.002-0.002-0.003-0.003
                        c-0.001-0.001-0.002-0.002-0.003-0.003L419.254,92.77c-0.001-0.001-0.001-0.001-0.001-0.001c-0.001-0.001-0.002-0.002-0.002-0.002
                        l-34.708-34.708c9.644-6.791,21.12-10.45,33.158-10.45c15.425,0,29.928,6.007,40.835,16.915l16.571,16.571
                        C495.213,101.201,497.366,132.565,481.565,155.082z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M256.017,260.023c-5.936,0-11.527,1.5-16.418,4.138l-40.682-40.682c-3.905-3.905-10.237-3.905-14.143,0
                        c-3.905,3.905-3.905,10.237,0,14.143l40.682,40.682c-2.638,4.891-4.139,10.482-4.139,16.418c0,15.657,10.427,28.92,24.699,33.224
                        v94.387c0.001,5.523,4.478,10,10.001,10c5.523,0,10-4.477,10-10v-94.387c14.273-4.304,24.699-17.567,24.699-33.224
                        C290.716,275.589,275.15,260.023,256.017,260.023z M256.016,309.421c-8.105,0-14.699-6.594-14.699-14.699
                        c0-8.105,6.594-14.699,14.699-14.699c8.105,0,14.699,6.594,14.699,14.699C270.715,302.827,264.121,309.421,256.016,309.421z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M356.914,224.843c-3.148-4.538-9.379-5.664-13.917-2.516c-4.538,3.148-5.664,9.379-2.516,13.917
                        c11.944,17.217,18.258,37.438,18.258,58.479c0,5.523,4.477,10,10,10s10-4.477,10-10
                        C378.739,269.587,371.192,245.424,356.914,224.843z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M375.806,324.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                        c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S377.666,326.79,375.806,324.93z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M99.856,287.65c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                        s4.44,2.93,7.07,2.93s5.211-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S101.716,289.51,99.856,287.65z"/>
                </g>
            </g>
        </svg>
        );
    }
    
    if (icon === "calendar-style") {
        return (            
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 512 512" >
                <g>
                    <g>
                        <path d="M465.399,188.93c-1.859-1.86-4.43-2.93-7.069-2.93c-2.63,0-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07
                            s1.069,5.21,2.93,7.07c1.861,1.86,4.44,2.93,7.07,2.93c2.64,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07
                            S467.26,190.79,465.399,188.93z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M456.333,74h-11.452c1.77-1.804,2.865-4.273,2.865-7V54c0-18.748-15.252-34-34-34s-34,15.252-34,34v20h-92.738
                            c1.77-1.804,2.865-4.273,2.865-7V54c0-18.748-15.252-34-34-34s-34,15.252-34,34v20h-92.738c1.77-1.804,2.865-4.273,2.865-7V54
                            c0-18.748-15.252-34-34-34S64,35.252,64,54v20h-8.333C24.972,74,0,98.972,0,129.667V462c0,16.542,13.458,30,30,30h172.667
                            c5.522,0,10-4.477,10-10s-4.478-10-10-10H30c-5.514,0-10-4.486-10-10V206h389.34c5.522,0,10-4.477,10-10s-4.478-10-10-10H20
                            v-56.333C20,110,36,94,55.667,94H64v24.168c0,18.748,15.252,34,34,34s34-15.252,34-34c0-5.523-4.478-10-10-10
                            c-5.522,0-10,4.477-10,10c0,7.72-6.28,14-14,14c-7.72,0-14-6.28-14-14V94h137.873v24.168c0,18.748,15.252,34,34,34
                            c18.748,0,34-15.252,34-34c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10c0,7.72-6.28,14-14,14c-7.72,0-14-6.28-14-14V94
                            h137.873v24.168c0,18.748,15.252,34,34,34s34-15.252,34-34c0-5.523-4.478-10-10-10c-5.522,0-10,4.477-10,10c0,7.72-6.28,14-14,14
                            c-7.72,0-14-6.28-14-14V94h56.587C476,94,492,110,492,129.667V462c0,5.514-4.486,10-10,10H309.333c-5.522,0-10,4.477-10,10
                            s4.478,10,10,10H482c16.542,0,30-13.458,30-30V129.667C512,98.972,487.028,74,456.333,74z M84,74V54c0-7.72,6.28-14,14-14
                            c7.72,0,14,6.28,14,14v13c0,2.727,1.095,5.196,2.865,7H84z M241.873,74V54c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14v13
                            c0,2.727,1.095,5.196,2.865,7H241.873z M399.746,74V54c0-7.72,6.28-14,14-14c7.72,0,14,6.28,14,14v13c0,2.727,1.095,5.196,2.865,7
                            H399.746z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M96,238c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S119.159,238,96,238z M96,302
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22s22,9.869,22,22C118,292.131,108.131,302,96,302z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M416,238c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S439.159,238,416,238z M416,302
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C438,292.131,428.131,302,416,302z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M309.333,238c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S332.492,238,309.333,238z M309.333,302
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C331.333,292.131,321.464,302,309.333,302z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M202.667,238c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S225.826,238,202.667,238z M202.667,302
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C224.667,292.131,214.798,302,202.667,302z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M96,360c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S119.159,360,96,360z M96,424
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22s22,9.869,22,22C118,414.131,108.131,424,96,424z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M309.333,360c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S332.492,360,309.333,360z M309.333,424
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C331.333,414.131,321.464,424,309.333,424z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M416,360c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S439.159,360,416,360z M416,424
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C438,414.131,428.131,424,416,424z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M202.667,360c-23.159,0-42,18.841-42,42s18.841,42,42,42s42-18.841,42-42S225.826,360,202.667,360z M202.667,424
                            c-12.131,0-22-9.869-22-22c0-12.131,9.869-22,22-22c12.131,0,22,9.869,22,22C224.667,414.131,214.798,424,202.667,424z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M263.069,474.93C261.21,473.07,258.63,472,256,472c-2.641,0-5.21,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                            s1.06,5.21,2.93,7.07c1.86,1.86,4.43,2.93,7.07,2.93c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07
                            S264.93,476.79,263.069,474.93z"/>
                    </g>
                </g>
            </svg>
        );
    }
    if (icon === "paperplane-style") {
        return (            
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M506.955,1.314c-3.119-1.78-6.955-1.75-10.045,0.078L313.656,109.756c-4.754,2.811-6.329,8.943-3.518,13.697
                            c2.81,4.753,8.942,6.328,13.697,3.518l131.482-77.749L210.411,303.335L88.603,266.069l158.965-94
                            c4.754-2.812,6.329-8.944,3.518-13.698c-2.81-4.753-8.943-6.33-13.697-3.518L58.91,260.392c-3.41,2.017-5.309,5.856-4.84,9.791
                            s3.216,7.221,7.004,8.38l145.469,44.504L270.72,439.88c0.067,0.121,0.136,0.223,0.207,0.314c1.071,1.786,2.676,3.245,4.678,4.087
                            c1.253,0.527,2.57,0.784,3.878,0.784c2.563,0,5.086-0.986,6.991-2.849l73.794-72.12l138.806,42.466
                            c0.96,0.293,1.945,0.438,2.925,0.438c2.116,0,4.206-0.672,5.948-1.961C510.496,409.153,512,406.17,512,403V10
                            C512,6.409,510.074,3.093,506.955,1.314z M271.265,329.23c-1.158,1.673-1.779,3.659-1.779,5.694v61.171l-43.823-79.765
                            l193.921-201.21L271.265,329.23z M289.486,411.309v-62.867l48.99,14.988L289.486,411.309z M492,389.483l-196.499-60.116
                            L492,45.704V389.483z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M164.423,347.577c-3.906-3.905-10.236-3.905-14.143,0l-93.352,93.352c-3.905,3.905-3.905,10.237,0,14.143
                            C58.882,457.024,61.441,458,64,458s5.118-0.976,7.071-2.929l93.352-93.352C168.328,357.815,168.328,351.483,164.423,347.577z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M40.071,471.928c-3.906-3.903-10.236-3.903-14.142,0.001l-23,23c-3.905,3.905-3.905,10.237,0,14.143
                            C4.882,511.024,7.441,512,10,512s5.118-0.977,7.071-2.929l23-23C43.976,482.166,43.976,475.834,40.071,471.928z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M142.649,494.34c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07
                            c0,2.63,1.069,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07
                            C145.58,498.77,144.51,496.2,142.649,494.34z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M217.051,419.935c-3.903-3.905-10.233-3.905-14.142,0l-49.446,49.445c-3.905,3.905-3.905,10.237,0,14.142
                            c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.446-49.445C220.956,430.172,220.956,423.84,217.051,419.935z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M387.704,416.139c-3.906-3.904-10.236-3.904-14.142,0l-49.58,49.58c-3.905,3.905-3.905,10.237,0,14.143
                            c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l49.58-49.58C391.609,426.377,391.609,420.045,387.704,416.139z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M283.5,136.31c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.86-2.93,4.44-2.93,7.08
                            c0,2.63,1.07,5.2,2.93,7.06c1.86,1.87,4.44,2.93,7.07,2.93s5.21-1.06,7.07-2.93c1.859-1.86,2.93-4.43,2.93-7.06
                            C286.43,140.75,285.36,138.17,283.5,136.31z"/>
                    </g>
                </g>
            </svg>
        );
    }
    
    if (icon === "checklist-style") {
        return (            
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 512.001 512.001">
                <g>
                    <g>
                        <path d="M400.003,152H256.001c-5.523,0-10,4.477-10,10s4.477,10,10,10h144.002c5.523,0,10-4.477,10-10S405.526,152,400.003,152z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M365.011,202.931c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
                            s1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S366.871,204.791,365.011,202.931z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M263.061,45.931c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
                            s1.07,5.21,2.93,7.07c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                            S264.921,47.791,263.061,45.931z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M315.878,200h-59.877c-5.523,0-10,4.477-10,10s4.477,10,10,10h59.877c5.523,0,10-4.477,10-10S321.401,200,315.878,200z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M400.003,260H256.001c-5.523,0-10,4.477-10,10s4.477,10,10,10h144.002c5.523,0,10-4.477,10-10S405.526,260,400.003,260z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M365.011,310.931c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
                            s1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S366.871,312.791,365.011,310.931z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M315.878,308h-59.877c-5.523,0-10,4.477-10,10s4.477,10,10,10h59.877c5.523,0,10-4.477,10-10S321.401,308,315.878,308z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M400.003,368H256.001c-5.523,0-10,4.477-10,10s4.477,10,10,10h144.002c5.523,0,10-4.477,10-10S405.526,368,400.003,368z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M365.011,418.931c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07
                            s1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S366.871,420.791,365.011,418.931z"
                            />
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M315.878,416h-59.877c-5.523,0-10,4.477-10,10s4.477,10,10,10h59.877c5.523,0,10-4.477,10-10S321.401,416,315.878,416z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M419.243,39.001h-76.379C331.823,28.48,316.898,22,300.479,22h-8.76C285.022,8.742,271.263,0,256,0
                            s-29.021,8.742-35.719,22H211.5c-16.419,0-31.343,6.48-42.384,17.001H92.759c-26.885,0-48.758,21.873-48.758,48.758v375.484
                            c0,26.885,21.873,48.758,48.758,48.758h326.483c26.885,0,48.758-21.873,48.758-48.758V87.759
                            C468.001,60.874,446.128,39.001,419.243,39.001z M211.501,42h15.586c4.498,0,8.442-3.003,9.639-7.338
                            C239.111,26.029,247.037,20,256.001,20c8.964,0,16.89,6.029,19.274,14.662c1.197,4.335,5.142,7.338,9.639,7.338h15.565
                            c21.705,0,39.571,16.75,41.354,38.001H170.147C171.93,58.75,189.797,42,211.501,42z M448.001,463.244
                            c0,15.857-12.901,28.758-28.758,28.758H92.759c-15.857,0-28.758-12.901-28.758-28.758V87.759
                            c0-15.857,12.901-28.758,28.758-28.758h62.347c-3.276,7.512-5.105,15.794-5.105,24.5v6.5c0,5.523,4.477,10,10,10H351.98
                            c5.523,0,10-4.477,10-10v-6.5c0-8.705-1.829-16.988-5.105-24.5h62.368c15.857,0,28.758,12.901,28.758,28.758V463.244z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M192.41,149.596c-3.905-3.905-10.237-3.905-14.142-0.001l-42.762,42.763l-13.173-13.174
                            c-3.905-3.904-10.237-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l20.245,20.245c1.953,1.953,4.512,2.929,7.071,2.929
                            c2.559,0,5.119-0.976,7.071-2.929l49.833-49.833C196.315,159.834,196.315,153.502,192.41,149.596z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M168.001,368h-48c-5.523,0-10,4.477-10,10v48c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-48
                            C178.001,372.477,173.524,368,168.001,368z M158.001,416h-28v-28h28V416z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M168.001,260h-48c-5.523,0-10,4.477-10,10v48c0,5.523,4.477,10,10,10h48c5.523,0,10-4.477,10-10v-48
                            C178.001,264.477,173.524,260,168.001,260z M158.001,308h-28v-28h28V308z"/>
                    </g>
                </g>
            </svg>
        );
    }
    
    



    return (
        <svg
            width="10px"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chevron-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-chevron-down fa-w-14"
        >
            <path
                fill="currentColor"
                d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
            />
        </svg>
    );
}
