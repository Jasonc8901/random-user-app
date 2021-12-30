import UserCard from './UserCard'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'
import { LoadingMsg, ErrorMsg } from './Message'
import './App.css'

function getUserCards(users) {
    return users.map((user) => 
        <UserCard key={user.email} user={user} />
    )
}

function UserTable(props) {
    const {users, page, isError, isLoading} = props

    return (
        <>
            <h1 className="App-header">Random Users App</h1>
            <div className='User-Table'>
                {isError ? <ErrorMsg /> : isLoading ? <LoadingMsg /> : getUserCards(users)}
            </div>
            <br />
            <div>
                {page > 1 ? <Link className="Pag-Link" to={`/?page=${page - 1}`} >{'<'}</Link> : null}
                <Link className="Pag-Link" to={`/?page=${page + 1}`} >{'>'}</Link>
            </div>
        </>
    )
}

UserTable.propTypes = {
    users: PropTypes.array,
    page: PropTypes.number,
    isError: PropTypes.bool,
    isLoading: PropTypes.bool,
}

export default React.memo(UserTable)