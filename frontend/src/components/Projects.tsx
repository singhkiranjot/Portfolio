import toDoImg from "../assets/ProjectsImg/todo.png"
import mediumImg from "../assets/ProjectsImg/medium.png"
import currencyImg from "../assets/ProjectsImg/currency.png"
export const Projects = [
    {
        id: 1,
        img: currencyImg ,
        title:"Currency Converter",
        description:"Currency Convertor is an application built in python. It is a realtime currency converter that converts the amount from one currency to another provided by user." ,
        link: "https://github.com/singhkiranjot/currency-converter",
    },
    {
        id: 2,
        img:mediumImg,
        title: "Mindful Trails" ,
        description:"Mindful Trails is an web application made in express, react, typescript, tailwind. It Authenticate and provide an full-fledged bloging experiece to user. User can create, delete, see All blogs in its interface." ,
        link: "https://medium-red-chi.vercel.app/",
    },
    {
        id: 3,
        img:toDoImg ,
        title: "ToDo List" ,
        description:"ToDo list is a web application which is built in react. It is an ToDo list which help user to create and delete the ToDos." ,
        link: "https://to-do-list-murex-zeta.vercel.app/",
    },
]