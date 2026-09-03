'use client'

import {useEffect, useState} from "react";
import {Recipe} from "@/components/index";
import {SearchResult} from "@/searchResult";

const RecipePage = () => {
    const [id, setId] = useState('')
    useEffect(() => {
        const handleHashChange=()=>{
            const id= window.location.hash.split('#')[1]
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
                {id && <Recipe id={id} />}
        </>
    );
};

export default RecipePage;