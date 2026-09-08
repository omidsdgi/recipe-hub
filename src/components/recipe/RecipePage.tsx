'use client'

import {useEffect, useState} from "react";
import {EmptyState, Recipe} from "@/components";
import {SearchResult} from "@/searchResult";

const RecipePage = () => {
    const [id, setId] = useState('')
    useEffect(() => {
        const handleHashChange=()=>{
            const id= window.location.hash.slice(1)
            setId(id)
        }
        ['hashchange','load'].forEach(ev=>
        window.addEventListener(ev,handleHashChange)
        )
        return () => ['hashchange', 'load'].forEach(ev=>
            window.removeEventListener(ev, handleHashChange)
        )
    },[])

    return (
        <>
            <SearchResult/>
                {id ? (
                    <Recipe id={id} />
                    )  : (
                        <EmptyState/>
                )}
        </>
    );
};

export default RecipePage;