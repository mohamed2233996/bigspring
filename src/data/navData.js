const links = [
    {
        key : 1,
        text: "Home",
        href: "/",
    },
    {
        key : 2,
        text: "Company",
        href: "/",
        subLinks: [
            { label: "About", href: "/About" },
            { label: "Team", href: "/Team" },
            { label: "How It Works", href: "/How-it-Works" },
            { label: "careers", href: "/careers" },
        ],
    },
    {
        key : 3,
        text: "Products",
        href: "/Products",
        subLinks: [
            {
                label: {
                    text: "CRM",
                    p: "For great customer relationships",
                    svg:
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                            <path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 4C17.6568 4 19 5.34315 19 7C19 8.22309 18.268 9.27523 17.2183 9.7423" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.7143 14H10.2857C7.91876 14 5.99998 15.9188 5.99998 18.2857C5.99998 19.2325 6.76749 20 7.71426 20H16.2857C17.2325 20 18 19.2325 18 18.2857C18 15.9188 16.0812 14 13.7143 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.7143 13C20.0812 13 22 14.9188 22 17.2857C22 18.2325 21.2325 19 20.2857 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 4C6.34315 4 5 5.34315 5 7C5 8.22309 5.73193 9.27523 6.78168 9.7423" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.71429 19C2.76751 19 2 18.2325 2 17.2857C2 14.9188 3.91878 13 6.28571 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                }, href: "/Products1"
            },
            {
                label: {
                    text: "Help Desk",
                    p: "Software to deliver great customer support",
                    svg:
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                            <path d="M16 2H12C9.17157 2 7.75736 2 6.87868 2.94627C6 3.89254 6 5.41554 6 8.46154V9.53846C6 12.5845 6 14.1075 6.87868 15.0537C7.75736 16 9.17157 16 12 16H16C18.8284 16 20.2426 16 21.1213 15.0537C22 14.1075 22 12.5845 22 9.53846V8.46154C22 5.41554 22 3.89254 21.1213 2.94627C20.2426 2 18.8284 2 16 2Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M18 16.6082C17.9879 18.9537 17.8914 20.2239 17.123 21.0525C16.2442 22 14.8298 22 12.0011 22H8.00065C5.17192 22 3.75755 22 2.87878 21.0525C2 20.1049 2 18.5799 2 15.5298V14.4515C2 11.4014 2 9.87638 2.87878 8.92885C3.52015 8.2373 4.44682 8.05047 6.00043 8" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                }, href: "/Products2"
            },
            {
                label: {
                    text: "Workplace",
                    p: "Application built to improve productivity",
                    svg:
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                            <path d="M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M19.5 18L18.9142 18.5541C18.2475 19.1847 17.9142 19.5 17.5 19.5M15.5 18L16.0858 18.5541C16.7525 19.1847 17.0858 19.5 17.5 19.5M17.5 19.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 5.5L15.9007 5.19094C15.4056 3.65089 15.1581 2.88087 14.5689 2.44043C13.9796 2 13.197 2 11.6316 2H11.3684C9.80304 2 9.02036 2 8.43111 2.44043C7.84186 2.88087 7.59436 3.65089 7.09934 5.19094L7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                }, href: "/Products3"
            },
            {
                label: {
                    text: "Analytics",
                    p: "Create custom reports from any data set.",
                    svg:
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                            <path d="M14 16V8C14 7.05719 14 6.58579 13.7071 6.29289C13.4142 6 12.9428 6 12 6C11.0572 6 10.5858 6 10.2929 6.29289C10 6.58579 10 7.05719 10 8V16C10 16.9428 10 17.4142 10.2929 17.7071C10.5858 18 11.0572 18 12 18C12.9428 18 13.4142 18 13.7071 17.7071C14 17.4142 14 16.9428 14 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 9V7C21 6.05719 21 5.58579 20.7071 5.29289C20.4142 5 19.9428 5 19 5C18.0572 5 17.5858 5 17.2929 5.29289C17 5.58579 17 6.05719 17 7V9C17 9.94281 17 10.4142 17.2929 10.7071C17.5858 11 18.0572 11 19 11C19.9428 11 20.4142 11 20.7071 10.7071C21 10.4142 21 9.94281 21 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 14V12C7 11.0572 7 10.5858 6.70711 10.2929C6.41421 10 5.94281 10 5 10C4.05719 10 3.58579 10 3.29289 10.2929C3 10.5858 3 11.0572 3 12V14C3 14.9428 3 15.4142 3.29289 15.7071C3.58579 16 4.05719 16 5 16C5.94281 16 6.41421 16 6.70711 15.7071C7 15.4142 7 14.9428 7 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 21L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 13L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 6L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5L19 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 18L5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 10L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                }, href: "/Products4"
            },
            {
                label: {
                    text: "View All Product",
                    p: "See all our products",
                    svg:
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} fill={"none"}>
                            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                }, href: "/Products"
            },
        ],
    },
    {
        key:4,
        text: "Blog",
        href: "/Blog",
        subLinks: [
            { label: "Blog Post", href: "/Blog" },
            { label: "Author", href: "/Author" },
        ],
    },
    {
        key:5,
        text: "Pages",
        href: "/Pages",
        subLinks: [
            { label: "Pricing", href: "/Pricing" },
            { label: "Case Studies", href: "/CaseStudies" },
            { label: "FAQ", href: "/FAQ" },
            { label: "Privacy Policy", href: "/PrivacyPolicy" },
            { label: "Terms & Condition", href: "/TermsAndCondition" },
            { label: "404", href: "/404" },
        ],
    },
    {
        text: "Contact",
        href: "/Contact",
    }
]

export default links