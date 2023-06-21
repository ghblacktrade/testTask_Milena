import React, { useState } from 'react'
import InputMask from 'react-input-mask'

//тоже здесь опишу интерфейсы

interface User {

    id: number
    email: string
    number: string
}

const App: React.FC = () => {

    const [email, setIsEmail] = useState('')

    return (
        <div className='App'>
            
                <h1>Get users</h1>
                <form onSubmit={}>
                    <div>

                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' value={} onChange={} />

                    </div>

                    <div>
                        <label htmlFor="number">Number</label>
                        //для форматирования решил использовать react-musk
                        <InputMask 
                            id='number'
                            mask='+7 999 525-50-96'
                            value={}
                            onChange={}
                            placeholder='+7 ___ ___-__-__'/>
                    </div>

                    <button type='submit'>Submit</button>
                </form>

                <h2>Search Results:</h2>
                    <ul>

                         {searchResult.map((user: User) => (

                             <li key={user.id}>

                                 Email: {user.email}, Number: {user.number}
                             </li>
                         ))}
                    </ul>
                
        </div>
    )
}