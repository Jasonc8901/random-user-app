import './App.css'

function UserCard(props) {
    const {user} = props
    
    return (
        <div className='User-Card'>
            <img src={user.picture.thumbnail} /><br />
            <p><span className='Card-Descriptor'>Name:</span> {`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
            <p><span className='Card-Descriptor'>Email:</span> {user.email}</p>
            <p><span className='Card-Descriptor'>Age:</span> {user.dob.age}</p>
        </div>
    )
}

export default UserCard