import { useEffect, useReducer, useState } from 'react';
import Card from '../UI/Card';
import styles from './Login.module.css';
import LoginButton from './LoginButton';

const emailReducer = (prevState, action) => {
    if(action.type === 'USER_INPUT'){
        return {
            value: action.value,
            isValid: action.value.includes('@')
        }
    }
    if(action.type === 'INPUT_BLUR'){
        return {
            value: prevState.value,
            isValid: prevState.value.includes('@')
        }
    }
    return {
        value: '',
        isValid: false
    }
}

const passwordReducer = (prevState, action) => {
    if(action.type === 'USER_PASSWORD'){
        return {
            value: action.value,
            isValid: action.value.trim().length > 7
        }
    }
    if(action.type === 'PASSWORD_BLUR'){
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 7
        }
    }
    return {
        value: '',
        isValid: false
    }
}

const Login = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: '', isValid: undefined})
    const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {value: '', isValid: undefined})
    const {isValid: emailIsValid} = emailState;
    const {isValid: passwordIsValid} = passwordState;

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid)
        }, 1000)

        return ()=>{clearTimeout(timer)}
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => { dispatchEmailState({type: 'USER_INPUT', value: event.target.value}) }
    const passwordChangeHandler = (event) => { dispatchPasswordState({type: 'USER_PASSWORD', value: event.target.value}) }
    const validateEmailHandler = () => { dispatchEmailState({type: 'INPUT_BLUR'}) }
    const validatePasswordHandler = () => { dispatchPasswordState({type: 'PASSWORD_BLUR'}) }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    }

    return <Card className={styles.login}>
        <form onSubmit={submitHandler}>
            <div className={`${styles.control} ${emailState.isValid === false ? styles.invalid : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}/>
            </div>
            <div className={`${styles.control} ${passwordState.isValid === false ? styles.invalid : ""}`}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}/>
            </div>
            <div className={styles.actions}>
                <LoginButton disabled={!formIsValid}/>
            </div>
        </form>
    </Card>
}

export default Login;