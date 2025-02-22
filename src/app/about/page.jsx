'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div className="container">
            About page Content.
        </div>
    );
}

export default Page;
