import { useEffect, useState } from "react"

const useFetch = (url, slug) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [errorCode, setErrorCode] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [openErrorDialog, setOpenErrorDialog] = useState(false)

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                setErrorCode(res.status)
                throw Error(`${res.status} - ${res.statusText}`)
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
            setError(null)
            setErrorCode(null)
            setOpenErrorDialog(false)
        })
        .catch(err => {
            setError(err.message)
            setOpenErrorDialog(true)
            setIsLoading(false)
        })
    }, [url, slug])

    return { data, error,errorCode, isLoading, openErrorDialog }
}

export default useFetch
