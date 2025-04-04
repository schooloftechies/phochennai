// app/components/SearchBar.js
"use client"; // Marking this component as a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            // Navigate to the search results page with the query
            router.push(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
