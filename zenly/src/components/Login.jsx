import React, { useEffect, useRef, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


export default function Login() {
    const [value, setValue] = useState('');
    const [sentCode, setSentCode] = useState(false);

    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();

    useEffect(() => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    }, [])

    const onClickCheck = async () => {
        const auth = getAuth();
        const phoneNumber = value

        confirmationResult.current = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current)
        setValue('');
        setSentCode(true);
    }

    const checkCode = async () => {
        const code = value;
        await confirmationResult.current.confirm(code);
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
                        <button onClick={checkCode}></button>
                    </div>
                )
    }

        </>
    )
}
