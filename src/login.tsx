import {useForm} from "@mantine/form"
import { useState } from "react";
import axios from "axios";
import router from "next/router";


const Loginpage = () => {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        }
    });
    const [loading, setLoading] = useState(false);
    const [token,   setToken] = useSessionStorage({
        key: "xpert-token",
        defaultValues: ""
    })

    const handleLogin = () => {
        setLoading(true);
        const configs = {
            method: "POST",
            url: process.env.NEXT_PUBLIC_BASE_URL + "v1/accounts/login",
            data: {email: form.values.email, password: form.values.password}
        }
        axios(configs)
        .then(({data}) => {
            router.push("/card/landscape")
            setToken(data.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error.message)
            setLoading(false)
        })
    }
}