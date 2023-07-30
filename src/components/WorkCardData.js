import proj1 from "../assets/react_chatapp.jfif";
import proj2 from "../assets/stackoverflow_clone.jfif";
import proj3 from "../assets/foodStore.png";

// import proj2 from '../assets/laptop2.jpg';

const ProjectCardData = [
  {
    imgsrc: proj1,
    title: "Chat Application",
    text: (
      <>
        A real-time chat application using Socket.io for communication, REACT
        for the front-end, NodeJS for the server-side logic, and MongoDB for
        data storage. Implemented features such as user authentication,
        one-to-one chat, group chat and notifications
      </>
    ),
    view: "https://stunning-crepe-ec7e54.netlify.app/",
    fsource: "https://github.com/ShruthiBandi-27/chat-app-frontend.git",
    bsource: "https://github.com/ShruthiBandi-27/chat-app-backend.git",
  },
  {
    imgsrc: proj2,
    title: "Stack Overflow clone",
    text: (
      <>
        A Clone of the Stack Overflow website using REACT for the front-end,
        NodeJS for the back-end, and MongoDB for data storage. Implemented user
        registration and login functionality, question and answer posting.
        <br />
        <br />
      </>
    ),
    view: "https://poetic-frangipane-8e2714.netlify.app/",
    fsource:
      "https://github.com/ShruthiBandi-27/stackoverflow_clone_frontend.git",
    bsource:
      "https://github.com/ShruthiBandi-27/stackoverflow_clone_backend.git",
  },
  {
    imgsrc: proj3,
    title: "Food Delivery App",
    text: (
      <>
        Food Delivery app using MERN stack. Implemented essential features like 
        user registration, login, cart management, and the ability to place orders
        for food delivery.
        <br />
        <br/>
        <br/>
      </>
    ),
    view: "https://64c615c27331c05d9e625d88--glowing-basbousa-1cd0a9.netlify.app/",
    fsource:
      "https://github.com/ShruthiBandi-27/food_store_frontend.git",
    bsource:
      "https://github.com/ShruthiBandi-27/food_store_backend.git",
  },
 
  
  // {
  //     imgsrc: proj1,
  //     title: "Tic Tac Toe",
  //     text : "Project 3 text",
  //     view: "https://master--bucolic-sfogliatella-211713.netlify.app/",
  //     source :"https://github.com/ShruthiBandi-27/React_shopping_page.git"
  // }
];

export default ProjectCardData;
