import React from 'react';
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator}
    from './../../../redux/DialogsReducer';

const NewMessage = (props) => {

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const clearTextArea = () => {
        props.dispatch(updateNewMessageTextActionCreator(''));
    }

    const changeText = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    const pressEnter = (event) => {
        if (event.key == "Enter") {
            addMessage();
        }
    }

    return (
        <div className={styles.container}>
			<textarea className={styles.text}
                      placeholder={"Your message..."}
                      onChange={changeText}
                      value={props.newMessageText}
                      onKeyPress={pressEnter}>
            </textarea>
            <div className={styles.buttons}>
                <button onClick={addMessage}
                        className={`${styles.button} ${styles.post}`}>Send
                </button>
                <button onClick={clearTextArea}
                        className={`${styles.button} ${styles.clear}`}>Clear
                </button>
            </div>
        </div>
    )
};

export default NewMessage;