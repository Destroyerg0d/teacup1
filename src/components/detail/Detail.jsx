import { arrayRemove, arrayUnion, doc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css"

const Detail = () =>{

    const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock} =useChatStore();

    const {currentUser} = useUserStore();

    const handleBlock = async () => {
        if(!user) return;

        const userDocRef = doc(db,"user", currentUser.id)

        try {
            await updateDoc(userDocRef,{
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });
            changeBlock()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='detail'>
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>
                    come on bro
                </p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat settings</span>
                        <img src="./arrowup.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy % Help</span>
                        <img src="./arrowup.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Photo</span>
                        <img src="./arrowdown.png" alt="" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt=""/>
                            <span>photo_2024-2.png</span>
                        </div>    
                    <img src ="./download.png" alt=""/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt=""/>
                            <span>photo_2024-2.png</span>
                        </div>    
                    <img src ="./download.png" alt=""/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt=""/>
                            <span>photo_2024-2.png</span>
                        </div>    
                    <img src ="./download.png" alt=""/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt=""/>
                            <span>photo_2024-2.png</span>
                        </div>    
                    <img src ="./download.png" alt=""/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="./avatar.png" alt=""/>
                            <span>photo_2024-2.png</span>
                        </div>    
                    <img src ="./download.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowup.png" alt="" />
                    </div>
                </div>
            </div>
            <button onClick={handleBlock}>{isCurrentUserBlocked ? "You Are Blocked!" : isReceiverBlocked ? "User Blocked":"Block user"}</button>
            <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
        </div>
    )
}

export default Detail