import s from "./ProfileInfo.module.css"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeStatusThunk} from "../../../../redux/reducers/profile";

export default function ProfileStatus({_id}) {
    const [statusCondition, statusToggle] = useState(true);
    const dispatch = useDispatch();
    const currentUserId = useSelector( state => state.Authorized._id)
    const typingOn = () => {
        if (_id === currentUserId) {
            statusToggle(() => false)
        }
    }
    const typingOff = async () => {
        if (localStatus !== globalStatus) {
            dispatch(changeStatusThunk(localStatus))
            //todo status load holder
            statusToggle(() => true)
        }

    }

    const globalStatus = useSelector( state => state.ProfilePage.profile.status);
    useEffect( () => changeLocalStatus( globalStatus), [globalStatus] );

    const [localStatus, changeLocalStatus] = useState(globalStatus);

    const typing = (e) => changeLocalStatus( () => e.target.value)
    const pressEnter = (e) => e.key === "Enter" ? e.target.blur() : null;
    return <>
        {statusCondition ?
            <span onClick = {typingOn}
                  className={s.Status} >{localStatus || "(Статус)"}</span>
            :
            <input type='text'
                   value={localStatus}
                   onFocus={ e => e.target.select() }
                   onBlur={typingOff}
                   autoFocus={true}
                   onChange={ typing }
                   onKeyDown={pressEnter}

            />}
        </>
}