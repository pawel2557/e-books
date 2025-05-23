import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} eBooks`
    },[title])
    return null;
}
