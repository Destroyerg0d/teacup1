import { collection, query, serverTimestamp, updateDoc, where } from "firebase/firestore"
import { db } from "../../../../lib/firebase"
import "./addUser.css"
import { useUserStore } from "../../../../lib/userStore";

const AddUser = () => {

    const {currentUser} = useUserStore()
    const [user,setUser] = userState(null)
    const handleSearch = async (e) =>{
        e.preventDefault()

        const formData = new FormDeta(e.target)
        const username = formData.get("username")

        try{
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", "username"));

            const querySnapShot = await getDocs(q)

            if(!querySnapShot.empty){
                setUser(querySnapShot.docs[0].data);
            }
        }
        catch(err){
            console.log(err)
        }
    }

    const handleAdd = async () =>{

        const chatRef = collection(db,"chats")
        const userChatsRef = collection(db,"userchats")

        try{
            const newChatRef = doc(chatRef)

            await setDoc(newChatRef,{
                createAt: serverTimestamp(),
                message:[],
            });

            await updateDoc(doc(userChatsRef, user.id),{
                chats:arrrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    reveiverId:currentUser.id,
                    updatedAt: Date.now(),
                })
            });

            await updateDoc(doc(userChatsRef, currentUser.id),{
                chats:arrrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    reveiverId:user.id,
                    updatedAt: Date.now(),
                })
            })

        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className='addUser'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="username" />
                <button>Search</button>
            </form>
            {user && <div className="user">
                <div className="detail">
                    <img src ={user.avatar || "./avatar.png"} alt=""/>
                    <span>{user.username}</span>
                </div>
                <button onClick={handleAdd}>Add User</button>
            </div>}
        </div>
    )
}