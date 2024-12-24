import { useState } from "react"

import axios from "../config/config"

export default function Login (){

    const [user, setUser] = useState({})

    const loginHandle = async () => {
        try {
           const goLogin = await axios('/login' + user)


        } catch (error) {
            throw error
        }
    }

    return(
        <div>
            ini page login
        </div>
    )
}