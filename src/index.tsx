import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hi</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Title />
    </React.StrictMode>
)
