import './App.css'

export function ErrorMsg() {
    return (
        <div className='Error'>
            There was an error in fetching your results.  Please try a different page.
        </div>
    )
}

export function LoadingMsg() {
    return <div className='Loading'> Loading... </div>
}