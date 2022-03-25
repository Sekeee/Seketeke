import React, { useEffect, useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";


export default function Login() {
    const [value, setValue] = useState(''); //phone number
    const [sentCode, setSentCode] = useState(false); // send ver code state

    useEffect(() => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible'
          }, auth); // save recaptcha on browser window
    }, [])

    const onClickCheck = async () => {
        const auth = getAuth();
        const phoneNumber = value

        window.confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
            .catch((e) => {
                console.log(e);
            })
        setValue('');
        setSentCode(true);
    }

    const checkCode = async () => {
        const phoneCode = value;
        await window.confirmationResult.confirm(phoneCode)
            .catch((e) => {
                console.log(e);
            })
        
    }

    return (
        <>
            <div id="recaptcha-container"></div>
            {
                (!sentCode) ? (
                    <div>
                        <input type="text" placeholder='Insert phone number' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button onClick={onClickCheck}> Check </button>
                    </div>
                ) : (
                    <div>
                        <input type="text" placeholder='Insert code' value={value} onChange={(e) => setValue(e.target.value)} />
                        <button onClick={checkCode}> Login </button>
                    </div>
                )
            }

        </>
    )
}
