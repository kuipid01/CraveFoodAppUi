/* eslint-disable no-unused-vars */
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate()
  const [projectTitle , setProjectName] = useState("");
  const [projectDescription, setProjectDesc] = useState("");
  const [projectImage, setImageUrl] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectImageFile, setProjectImage] = useState(null);
  const [projectLink, setProjectLink] = useState('')
  const handleImageUpload = (e) => {
    setProjectImage(e.target.files[0]);
    if (projectImageFile) {
      console.log("clicked");
      // // const storage = getStorage();
      const storageRef = ref(storage, `projectImages/${projectImageFile.name}`);

      const uploadTask = uploadBytesResumable(storageRef, projectImageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setUploading(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);

            setImageUrl(downloadURL);

            setUploading(false);
          });
        }
      );
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    setLoading(true)
    const projectTags = inputTags.split(",");
    try {
       
        const response = await axios.post('https://devkuipid.onrender.com/project/', {projectLink,projectTitle,projectDescription,projectImage,projectTags});
        console.log('Response:', response.data);
        setLoading(false)
        navigate('/')
        // Handle the response or perform any necessary actions
      } catch (error) {
        console.error('Error:', error);
        // Handle the error or display an error message
      }
  };
  const LoadingState = () => {
    <div className="w-full h-fit min-h-[300px] bg-transparent flex justify-center  items-center ">
    <div className="w-[100px] h-[100px] border  rounded-full animate-pulse">
    </div>
    </div>
  }
  if (loading) return <LoadingState/>
  return (

  
    <div className="w-full flex bg-[#1c0523] h-screen p-5 items-center flex-col justify-center">
      <h1>Enter Project Details</h1>
      <form
       
        className="w-[90%]  md:w-[60%] gap-2 flex flex-col"
      >
        <div className="w-full">
          <input
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Project Name"
          />
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setInputTags(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Tags Seperate with Commas"
          />
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setProjectLink(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Project Link"
          />
        </div>
        <div className="w-full">
          <textarea
            onChange={(e) => setProjectDesc(e.target.value)}
            name="desc"
            className="border-b w-full  outline-none border-gray-400 p-2 bg-transparent"
            placeholder="Enter project description"
          ></textarea>
        </div>
        <div className="w-full">
          <input
            onChange={(e) => handleImageUpload(e)}
            className="border-b w-full cursor-pointer outline-none border-gray-400 p-2 bg-transparent"
            type="file"
            name="file"
            id="file"
          />
        </div>
        <button
          disabled={uploading}
          className={`border  mt-3 rounded-xl hover:bg-white transition-all hover:text-[#1c0523] hover:outline-none w-full ${uploading?' cursor-wait ':'cursor-pointer '} outline-none border-gray-400 p-2 bg-transparent`}
          onClick={(e) => handleAddPost(e)}
        >
            {uploading?' Uploading  ':' Add this project '}
          
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
