import FriendListItem from "./FriendListItem";
import style from "./friendList.module.scss";
import PropTypes from "prop-types";


const FriendList = ({friends}) => {    
const element = friends.map(frend => <FriendListItem key={frend.id} user={frend} />);


return (<ul className={style.friendList}>
{element}
</ul>)
}

FriendList.defaultProps = {
    friends: []   
}

FriendList.propTypes = {    
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}

export default FriendList;