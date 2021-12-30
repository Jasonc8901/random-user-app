export function fetchRandomUsers(setUsers, setIsLoading, setIsError, page, isError) {
    const url = `https://randomuser.me/api/?page=${page}&results=1000&seed=abc`

    fetch(url).then(res => Promise.all([res, res.json()]))
        .then((resData) => {
            const [res, json] = resData
            setUsers([...json.results])
            setIsLoading(false)
            
            if (isError) {
                setIsError(false)
            }
        })
        .catch((err) => setIsError(true))
        
}