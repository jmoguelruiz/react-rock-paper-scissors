import React from 'react';
import { css } from 'glamor';
import { InputText, Button, Logo} from '../../common/components';

const Form = ({redirect, changeField, formValues, registerUser, formErrors, login}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-10 col-md-6">
                <div className={`${styles.form}`}>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <Logo />
                              
                            </div>
                            <div className="col-12">
                                <InputText 
                                    placeholder='Nickname' 
                                    handleChange = {(e) => changeField('nickname', e.target.value)}
                                    value = {formValues.nickname}
                                    error = {formErrors.nickname}
                                />
                            </div>
                            <div className="col-12">
                                <InputText 
                                    placeholder='Contraseña' 
                                    type={'password'}
                                    handleChange = {(e) => changeField('password', e.target.value)}
                                    value = {formValues.password}
                                    error = {formErrors.password}
                                />
                            </div>
                            <div className="col-12">
                                <Button text="Ingresar" onClick={login}/>
                            </div>
                        </div>
                    </form>
                    <div className={styles.label}>
                        ó
                    </div>
                    <div className={(styles.label, styles.link)} onClick={() => redirect('/react-rock-paper-scissors/register')}> 
                        Registrate aquí para poder ingresar
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    form: css({
        backgroundColor: '#476b96',
        marginTop: 20,
        padding: 20
    }),
    label: css({
        margin: 10
    }),
    link: css({
        '&:hover' : {
            color: "blue",
            cursor: "pointer"
        }
    })
}

export default Form;