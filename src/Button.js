import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>
        {text}
    </button>;
}
//createreactapp이 랜덤하게 보이는 classname을 생성해줌: element에서 확인가능

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;