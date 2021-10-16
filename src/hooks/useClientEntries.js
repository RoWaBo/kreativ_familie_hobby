import { useEffect, useState } from "react";
import client from "../client";

// Arguments are the search word for the filtering of entries
const useClientEntries = (contentTypeName, id) => {

    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            try {
                const response = await client.getEntries()
                if (contentTypeName) {
                    setData(response.items.filter(item => item.sys.contentType.sys.id === contentTypeName))
                } else if (id) {
                    const items = response.items.filter(item => item.sys.id === id) 
                    setData(items[0])
                } else {
                    setData(response.items)
                }
            } catch (error) {
                console.error(error)
            }
        })()
    }, [contentTypeName, id])

    return data
}

export default useClientEntries;