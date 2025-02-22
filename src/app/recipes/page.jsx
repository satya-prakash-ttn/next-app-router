"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const recipesPerPage = 10;

    useEffect(() => {
        const fetchRecipes = async () => {
            const url = `https://dummyjson.com/recipes?limit=${recipesPerPage}&skip=${(currentPage - 1) * recipesPerPage}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error - ${response.status}`);
                }
                const data = await response.json();
                setRecipes(data.recipes);
                setTotalPages(Math.ceil(data.total / recipesPerPage));
            }
            catch (error) {
                setError(error.message);
            }
        }
        fetchRecipes();

    }, [currentPage]);


    console.log('Data', recipes);
    return (
        <div className="container">
            <h2 className='mb-4 text-4xl font-extrabold'>Recipes</h2>
            {error && <p>Error - {error}</p>}

            <table className='w-full text-left table-auto min-w-max border border-slate-300'>
                <thead>
                    <tr className='text-slate-500 border-b border-slate-300 bg-slate-50 '>
                        <th className='p-2'>id</th>
                        <th>Name</th>
                        <th>prepTimeMinutes</th>
                        <th>servings</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((item) => (
                        <tr key={item.id} className='border-b border-slate-300 ' >
                            <td className='p-2'>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.prepTimeMinutes}</td>
                            <td>{item.servings}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className='pagination mt-4'>
             <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1} >Prev</button>
                    <span> Page {currentPage} of {totalPages} </span>
             <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages} >Next</button>
            </div>
        </div>
    );
}

export default Page;
