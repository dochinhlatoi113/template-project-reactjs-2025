'use client'
export default function Layout({ children }) {
    return (
        <div className={`container mx-auto max-w-[1300px] pt-[130px] pb-4 flex flex-col`}>
            {children}
        </div>
    );
}
