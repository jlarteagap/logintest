import React, {useState} from 'react';
import Title from './component/title/Title';
import Label from './component/label/Label';
import Input from './component/input/Input';

import './login.css';

const Login = () =>{

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState( '' );
    const [ passswordError, setpassswordError] = useState(false);
    const [ isLogin, setIfLogin] = useState(false);
    const [ hasError, setHasError ] = useState(false);


    function handleChange(name, value){
        if(name === 'userio'){
            setUser(value)
        } else{
            if(value.length < 6){
                setpassswordError(true)
            }else {
                setpassswordError(false)
                setPassword(value)
            }
        }
    }

    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0){
        
            if(param.user === "admin" && param.password === "123456"){
                
                const {user, password} = param

                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account)
                setIfLogin(true)
            } else {
                setIfLogin(false)
                setHasError(true)
            }
        } else {
            setIfLogin(false)
            setHasError(true)
        }
    }

    function handleSubmit(){
        let account = { user, password}

        if(account){
            ifMatch(account);
            
        }
    }

    return(
        <div className="login">
            <Title text = "Esto es un titulo enviado por props"/>
            {hasError && 
            <label>Usuario o contraseña incorrectos</label>
            }
            <Label text = "Usuario" />
            <Input 
                attribute = {{
                    id : "userio",
                    name : "userio",
                    placeholder : "Ingrese un usuario",
                    type: "text"
                }}

                handleChange = {handleChange}
            />
            <Label text = "Usuario" />
            <Input
            attribute = {{
                id : "password",
                name : "password",
                placeholder : "Ingrese una contraseña",
                type: "password"
            }}

            handleChange = {handleChange}
            params = {passswordError}
            />

            {passswordError && 
                <label className="label--error">Contrasenha incorrecta</label>
            }
            <button onClick = {handleSubmit} >Ingresar</button>
        </div>
    )
}

export default Login;