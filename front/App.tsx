import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import axios from 'axios'

//тоже здесь опишу интерфейсы

interface User {

    id: number
    email: string
    number: string
}

const App: React.FC = () => {

    const [email, setIsEmail] = useState('')
    const [number, setIsNumber] = useState('')
    const [result, setIsResult] = useState<User[]>([])
    
// тут при отправке формы буду сразу event вызывать
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {

        event.preventDefault()

        if (!email) {

            alert('Enter Email')
            return
        }

        try {

            const response = await axios.get(`http://localhost:3000/users?email=${email}&number=${number}`)
            setIsResult(response.data)

        } catch (err) {

            console.error(err)
        }
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setIsEmail(e.target.value)
      }
    
    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setIsNumber(e.target.value)
      }

    return (
        <div className='App'>
            
                <h1>Get users</h1>
                <form onSubmit={handleSubmit}>
                    <div>

                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' value={email} onChange={changeEmail} />

                    </div>

                    <div>
                        <label htmlFor="number">Number</label>
                        //для форматирования решил использовать react-musk
                        <InputMask 
                            id='number'
                            mask='+7 999 525-50-96'
                            value={number}
                            onChange={changeNumber}
                            placeholder='+7 ___ ___-__-__'/>
                    </div>

                    <button type='submit'>Submit</button>
                </form>

                <h2>Search Results:</h2>
                    <ul>
//  чтобы кучу не писать мапом просто прошелся
                         {result.map((user: User) => (

                             <li key={user.id}>

                                 Email: {user.email}, Number: {user.number}
                             </li>
                         ))}
                    </ul>
                
        </div>
    )
}