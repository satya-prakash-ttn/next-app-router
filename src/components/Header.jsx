import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
       
            <header>
                <nav className="container">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/recipes">Recipes</Link>
                    <Link href="/csr">CSR</Link>
                    <Link href="/ssr">SSR</Link>
                    <Link href="/stylecsr">Style CSR</Link>
                                  
                </nav>
            </header>
       
    );
}

export default Header;
