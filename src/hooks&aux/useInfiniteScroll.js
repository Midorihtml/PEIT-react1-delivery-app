import React from "react";

export const useInfiniteScroll = (currentPage, setCurrentPage, initialState, state, setState, setLoading) => {
    React.useEffect(() => {
        const handleScroll = async () => {
            /* This is checking if the user has scrolled to the bottom of the page. */
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

            let elements = currentPage * 3;
            const pages = Math.ceil(initialState.length / 3);

            if (pages > 1 && currentPage <= pages) {
                setLoading(true);
                const nextPage = initialState.slice(elements, elements + 3);
                setState([...state, ...nextPage]);
                setCurrentPage(currentPage + 1);
                setLoading(false);
            }

            window.removeEventListener("scroll", handleScroll);
            setLoading(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentPage, setCurrentPage, initialState, state, setState, setLoading]);
};