import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import UserTable from './UserTable'

const USERS_PER_PAGE = 12


function fetchRandomUsers(setUsers, setAllUsers, setIsLoading, setIsError, page, isError) {
  const url = `https://randomuser.me/api/?results=1000&seed=abc`

  fetch(url).then(res => Promise.all([res, res.json()]))
      .then((resData) => {
          const [res, json] = resData
          const start = (page - 1) * USERS_PER_PAGE
          
          setAllUsers([...json.results])
          setUsers(json.results.slice(start, start + USERS_PER_PAGE))
          setIsLoading(false)
          
          if (isError) {
              setIsError(false)
          }
      })
      .catch(() => setIsError(true))
      
}

function processPageChange(page, setPage, setUsers, allUsers) {
  const start = (page - 1) * USERS_PER_PAGE
  
  setPage(page ? page : 1)
  setUsers(allUsers.slice(start, start + USERS_PER_PAGE))
}

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (users.length) {
      const pageParam = parseInt(searchParams.get('page'))
      
      if (!isNaN(pageParam)) {
        processPageChange(pageParam, setPage, setUsers, allUsers)
      }
    }
  }, [searchParams])

  useEffect(() => {
    const pageParam = parseInt(searchParams.get('page'))

    setPage(pageParam ? pageParam : 1)
    setIsLoading(true)
    fetchRandomUsers(setUsers, setAllUsers, setIsLoading, setIsError, pageParam, isError)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserTable users={users} page={page} isLoading={isLoading} isError={isError}/>} />
      </Routes>
    </div>
  );
}

export default App
