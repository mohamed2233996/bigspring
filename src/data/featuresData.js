const featuresBoxs = [
    {
        title: 'Cloud Support',
        description: 'Fugiat similique nobis porro cumque stinctio iusto quaerat corrupti.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={42} height={42} fill={"none"}>
            <path d="M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        title: 'Object Oriented',
        description: 'Fugiat similique nobis porro cumque stinctio iusto quaerat corrupti.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={42} height={42} fill={"none"}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        title: '24h Service',
        description: 'Fugiat similique nobis porro cumque stinctio iusto quaerat corrupti.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={42} height={42} fill={"none"}>
            <path d="M17 11.8045C17 11.4588 17 11.286 17.052 11.132C17.2032 10.6844 17.6018 10.5108 18.0011 10.3289C18.45 10.1244 18.6744 10.0222 18.8968 10.0042C19.1493 9.98378 19.4022 10.0382 19.618 10.1593C19.9041 10.3198 20.1036 10.6249 20.3079 10.873C21.2513 12.0188 21.7229 12.5918 21.8955 13.2236C22.0348 13.7334 22.0348 14.2666 21.8955 14.7764C21.6438 15.6979 20.8485 16.4704 20.2598 17.1854C19.9587 17.5511 19.8081 17.734 19.618 17.8407C19.4022 17.9618 19.1493 18.0162 18.8968 17.9958C18.6744 17.9778 18.45 17.8756 18.0011 17.6711C17.6018 17.4892 17.2032 17.3156 17.052 16.868C17 16.714 17 16.5412 17 16.1955V11.8045Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 11.8046C7 11.3694 6.98778 10.9782 6.63591 10.6722C6.50793 10.5609 6.33825 10.4836 5.99891 10.329C5.55001 10.1246 5.32556 10.0224 5.10316 10.0044C4.43591 9.9504 4.07692 10.4058 3.69213 10.8732C2.74875 12.019 2.27706 12.5919 2.10446 13.2237C1.96518 13.7336 1.96518 14.2668 2.10446 14.7766C2.3562 15.6981 3.15152 16.4705 3.74021 17.1856C4.11129 17.6363 4.46577 18.0475 5.10316 17.996C5.32556 17.978 5.55001 17.8757 5.99891 17.6713C6.33825 17.5167 6.50793 17.4394 6.63591 17.3281C6.98778 17.0221 7 16.631 7 16.1957V11.8046Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 10.5V9C20 5.13401 16.4183 2 12 2C7.58172 2 4 5.13401 4 9V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 17.5C20 22 16 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
    {
        title: 'Faster Response',
        description: 'Fugiat similique nobis porro cumque stinctio iusto quaerat corrupti.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={42} height={42} fill={"none"}>
            <path d="M2 3H6.73259C9.34372 3 10.6493 3 11.8679 3.40119C13.0866 3.80239 14.1368 4.57795 16.2373 6.12907L19.9289 8.85517C19.9692 8.88495 19.9894 8.89984 20.0084 8.91416C21.2491 9.84877 21.985 11.307 21.9998 12.8603C22 12.8841 22 12.9091 22 12.9593C22 12.9971 22 13.016 21.9997 13.032C21.9825 14.1115 21.1115 14.9825 20.032 14.9997C20.016 15 19.9971 15 19.9593 15H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 8H3.89284C4.16278 8 4.29775 8 4.4256 8.0082C5.52021 8.07839 6.53798 8.595 7.24076 9.43715C7.32284 9.53551 7.40251 9.64446 7.56185 9.86235C7.61383 9.93344 7.63982 9.96899 7.66371 10.0048C7.86673 10.3091 7.98241 10.6633 7.99815 11.0287C8 11.0717 8 11.1158 8 11.2038V11.4157C8 11.5874 8 11.6732 7.9741 11.7416C7.93351 11.8488 7.84884 11.9335 7.74159 11.9741C7.67317 12 7.58735 12 7.41572 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21 11H17.3333C14.3878 11 12 8.76142 12 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 19H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    },
]

export default featuresBoxs;