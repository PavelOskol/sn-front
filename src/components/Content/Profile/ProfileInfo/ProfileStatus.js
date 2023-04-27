import s from "./ProfileInfo.module.css"
import {useState} from "react";

export default function ProfileStatus() {
    const [statusCondition, statusToggle] = useState(true);
    const switcher = () => statusToggle(condition => !condition)

    const [status, changeStatus] = useState( "Ваш статус");
    const typing = (e) => changeStatus( () => e.target.value)
    const pressEnter = (e) => e.key === "Enter" ? e.target.blur() : null;
    return <>
        {statusCondition ?
            <span onClick={ switcher }
                  className={s.Status} >{status}</span>
            :
            <input type='text'
                   value={status}
                   onFocus={ e => e.target.select() }
                   onBlur={switcher}
                   autoFocus={true}
                   onChange={ typing }
                   onKeyDown={pressEnter}

            />}
        </>
}