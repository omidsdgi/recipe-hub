'use client'

import {useEffect, useState} from "react";
import {Recipe} from "@/components";
import {SearchResult} from "@/searchResult/index";

const Hash = () => {
    const [id, setId] = useState('')
    useEffect(() => {
        const useRecipe=()=>{
            const id= window.location.hash.split('#')[1]
            setId(id)
        }
        ['hashchange','load'].forEach(ev=>
        window.addEventListener(ev,useRecipe)
        )
        return () => ['hashchange', 'load'].forEach(ev=>
            window.removeEventListener(ev, useRecipe)
        )
    },[])

    return (
        <>
            <SearchResult/>
                {id && <Recipe id={id} />}
        </>
    );
};

export default Hash;