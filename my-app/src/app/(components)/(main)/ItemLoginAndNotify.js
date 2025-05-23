import Link from "next/link";
export default function ItemLoginAndNotify({ colorVar = "text-[#82869E]" }) {
    return (
        <>
            <li className="flex items-center space-x-2 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill={colorVar}
                    viewBox="0 0 24 24" stroke="currentColor" className={`w-5 h-5 m-auto `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className="flex flex-col">
                    <Link href="/login" className={`${colorVar} title-header-item`}>Login</Link>
                    <Link href="/register" className={`${colorVar} title-header-item`}>Register</Link>
                </div>
            </li >
            <li className="flex items-center space-x-2 hover:text-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={colorVar}
                    className={`w-5 h-5 m-auto`}
                >
                    <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
                    <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z" clipRule="evenodd" />
                </svg>
            </li>
        </>
    );
}
