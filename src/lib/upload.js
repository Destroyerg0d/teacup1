import { ref,getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {

    const data = new DataTransfer()
    const storageRef = ref(storage,`images/${data + file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve,reject) => {
        uploadTask.on(
            "state.changed",
            (snapshot) => {
                const progress= (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is "+progress+"% done");
            },
            (error) => {
                reject("Something went wrong!" +error.code)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                    resolve(downloadURL)
                });
            }

        );
    });

};

export default upload