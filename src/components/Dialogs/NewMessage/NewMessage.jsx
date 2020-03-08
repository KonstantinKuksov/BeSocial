import React from 'react';
import styles from './../../Profile/MyPosts/NewPost/NewPost.module.css';

const NewMessage = (props) => {

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.addMessage(props.newMessageText);
    }

    const clearTextArea = () => {
        props.updateNewMessageText('');
    }

    const changeText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    const pressEnter = (event) => {
        if (event.key == "Enter") {
            addMessage();
        }
    }

    return (
        <div className={styles.container}>
			<textarea ref={newMessageElement} className={styles.text}
                      placeholder={"Your message..."} onChange={changeText}
                      value={props.newMessageText} onKeyPress={pressEnter}></textarea>
            <div className={styles.buttons}>
                <button onClick={ addMessage }
                        className={`${styles.button} ${styles.post}`}>Send</button>
                <button onClick={ clearTextArea }
                        className={`${styles.button} ${styles.clear}`}>Clear</button>
            </div>
        </div>
    )
};

export default NewMessage;