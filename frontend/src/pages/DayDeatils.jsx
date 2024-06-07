import { useContext, useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import { addToDo, getAllToDoForADay, updateToDo, deleteToDo, completeToDo } from "../utils/HandleApi";
import { useParams } from "react-router-dom";
import "./DayDeatils.css"
import { dayContext } from "../context";
function Home() {
    const [toDo, setToDo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [toDoId, setToDoId] = useState("");

    const { day } = useParams();
    const ctx = useContext(dayContext)



    // useEffect(()=>{
    //     for (let task of toDo){
    //         console.log(task)
    //         if(!task["completed"]){
    //             return  ctx.setStateNotcompleted(task["day"])
    //         }

    //         console.log("=>>>>>>>>>>>>>>>>>>>>>.",ctx.completedDays)    
    //         ctx.setStatecompleted(task["day"])

    //     }
    // },[toDo])

    useEffect(() => {
        getAllToDoForADay(day).then(data => {
            setToDo(data);
        });
    }, [day]);

    const updateMode = (_id, text) => {
        setIsUpdating(true);
        setText(text);
        setToDoId(_id);
    };

    const handleAddUpdate = () => {
        if (text.trim() === "") {
            alert("Task cannot be empty");
            return;
        }
        if (isUpdating) {
            updateToDo(toDoId, text, day)
                .then(data => {
                    setToDo(data);
                    setText("");
                    setIsUpdating(false);
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            addToDo(text, day)
                .then(data => {
                    setToDo(data);
                    setText("");
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    const handleComplete = (_id, completed) => {
        completeToDo(_id, completed, day)
            .then(data => {
                setToDo(data);
                console.log("a7a");
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="App">
            <div className="container">
                <h1>All Tasks for Day {day}</h1>
                <div className="top">
                    <input
                        type="text"
                        placeholder="Add tasks here.."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="add" onClick={handleAddUpdate}>
                        {isUpdating ? "Update" : "Add"}
                    </div>
                </div>
                <div className="list">
                    {toDo.length > 0 ? toDo.map((item) => (
                        <ToDo
                            key={item._id}
                            text={item.text}
                            completed={item.completed}
                            updateMode={() => updateMode(item._id, item.text)}
                            deleteToDo={() => {
                                deleteToDo(item._id, day)
                                    .then(data => {
                                        setToDo(data);
                                    })
                                    .catch(err => {
                                        console.error(err);
                                    });
                            }}
                            completeToDo={() => handleComplete(item._id, !item.completed)}
                        />
                    )) : <p className="emptyTasks">"No Tasks Yet"</p>}
                </div>
                <div className="complete">
                    {
                        !ctx.completedDays.includes(day) ? <button onClick={() => {
                            ctx.setDaycompleted(day)
                        }}>Mark Day as Completed</button> : <button onClick={() => {
                            ctx.setDayNotcompleted(day)
                        }}>Mark Day as Not Completed</button>
                    }
                </div>
            </div>
            <footer>All rights reserved to Youssef Khaled</footer>
        </div>
    );
}

export default Home;
