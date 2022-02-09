import PropTypes from "prop-types";
import style from "./friendList.module.scss";

const FriendListItem = ({name, isOnline, avatar}) => {
   
    const classFormat= "status" + ((isOnline && "Online")||"Offline")
    return (
<li className={style.item}><span className={style[classFormat]}></span> <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={style.name}>{name}</p>
</li>
    )
}


FriendListItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string
    }) 
}

export default FriendListItem;