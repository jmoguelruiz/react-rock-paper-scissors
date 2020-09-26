import React from 'react';
import { css } from 'glamor';
import { InputText, Button } from '../../common/components';

const Form = ({redirect, changeField, formValues, registerUser, formErrors}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-10 col-md-6">
                <div className={`${styles.form}`}>
                    <div className={styles.info}> Es necesario registrarse para poder jugar, elija un nickname y asigne una contraseña para poder ingresar. </div>
                    <form>
                        <div className="row">
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
                                <InputText 
                                    placeholder='Repita la contraseña' 
                                    type={'password'}
                                    handleChange = {(e) => changeField('confirmPassword', e.target.value)}
                                    value = {formValues.confirmPassword}
                                    error = {formErrors.confirmPassword}
                                />
                            </div>
                            <div className="col-12">
                                <Button text="Registrar" onClick={registerUser}/>
                            </div>
                        </div>
                    </form>

                    <div className={(styles.label, styles.link)} onClick={() => redirect('/react-rock-paper-scissors/login')}> 
                        Regresar al login
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
        marginTop: 20,
        '&:hover' : {
            color: "blue",
            cursor: "pointer"
        }
    }),
    info: css({
        color: "#fff",
        fontSize: 14,
        marginBottom: 20,
    })
}

export default Form;