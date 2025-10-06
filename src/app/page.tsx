// 'use client'

// import React, { useEffect } from 'react'
// import { useRouter } from 'next/navigation';

// import { redirect } from 'next/navigation';

function Page() {
    // const router = useRouter();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         router.push('/dashboard');
    //     }, 1000);

    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [router]);

    // return (
    //     <div>Redirecting to dashboard...</div>
    // )
    // redirect('/dashboard');
    return (
        <div className="w-screen overflow-hidden h-screen flex justify-center items-center">
            <div>
                <h1>Click here to go to the dashboard</h1>
                <a href="/dashboard" className="text-blue-500 underline">Go to Dashboard</a>
            </div>
        </div>
    )
}

export default Page