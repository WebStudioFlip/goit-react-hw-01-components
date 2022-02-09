import FriendListItem from "./FriendListItem";
import style from "./friendList.module.scss";


const FriendList = ({friends}) => {    
const element = friends.map(frend => <FriendListItem key={frend.id} user={frend} />);


return (<ul className={style.friendList}>
{element}
</ul>)
}

FriendList.defaultProps = {
    friends: []   
}

export default FriendList;