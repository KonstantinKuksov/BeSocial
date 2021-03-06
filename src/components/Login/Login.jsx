import React from 'react';
import {login} from "../../redux/AuthReducer";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import styles from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className={styles.textInput} component={Input}
                       name={'email'} placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field className={styles.textInput} component={Input}
                       name={'password'} placeholder={'password'}
                       validate={[required]} type={'password'}/>
            </div>
            <div className={styles.checkbox} >
                <Field className={styles.checkbox} component={Input}
                       type="checkbox" name={'rememberMe'}/> <span>remember me</span>
            </div>
            { error && <div className={styles.errorMessage}>
                {error}
            </div>}
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm( { form: 'login' } )(LoginForm);

const Login = ({login, isAuth}) => {

   const onSubmit = (formData) => {
       login(formData.email, formData.password, formData.rememberMe);
   };

   if (isAuth)
       return (
           <Redirect to={'profile'}/>
       );

    return <div className={styles.container}> 
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
