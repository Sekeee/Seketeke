import React, { useEffect, useRef, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


export default function Login() {
    const [value, setValue] = useState('');
    const [sentCode, setSentCode] = useState(false);

    let recaptchaVerifier = useRef();
    let confirmationResult = useRef();

    useEffect(() => {
        const auth = getAuth();
        recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    }, [])

    const onClickCheck = async () => {
        const auth = getAuth();
        const phoneNumber = value
        console.log(phoneNumber);

        confirmationResult.current = signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current)
        .catch((e) => {
            console.log(e);
        })
        
        setValue('');
        setSentCode(true);
    }

    const checkCode = async () => {
        const code = value;
        const result = await confirmationResult.confirm(code)
        .catch((e) => {
            console.log(e);
        })
        console.log(result);
    }

    return (
        <>
            {
                (!sentCode) ? (
                    <div>
                        <div id="recaptcha-container"></div>
                        <input type="text" placeholder='Insert phone number' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button onClick={onClickCheck}> Check </button>
                    </div>
                ) : (
                    <div>
                        <input type="text" placeholder='Insert code' value={value} onChange= {(e) => setValue(e.target.value)} />
                        <button onClick={checkCode}> Login </button>
                    </div>
                )
    }

        </>
    )
}
