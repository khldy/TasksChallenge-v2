import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo, completeToDo } from "./utils/HandleApi";

function App() {
    const [toDo, setToDo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [toDoId, setToDoId] = useState("");

    useEffect(() => {
        getAllToDo().then(data => {
            setToDo(data);
        });
    }, []);

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
            updateToDo(toDoId, text)
                .then(data => {
                    setToDo(data);
                    setText("");
                    setIsUpdating(false);
                })
                .catch(err => {
                    console.error(err);
                });
        } else {
            addToDo(text)
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
        completeToDo(_id, completed)
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
                <h1>To-Do List</h1>
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
                    {toDo.map((item) => (
                        <ToDo
                            key={item._id}
                            text={item.text}
                            completed={item.completed}
                            updateMode={() => updateMode(item._id, item.text)}
                            deleteToDo={() => {
                                deleteToDo(item._id)
                                    .then(data => {
                                        setToDo(data);
                                    })
                                    .catch(err => {
                                        console.error(err);
                                    });
                            }}
                            completeToDo={() => handleComplete(item._id, !item.completed)}
                        />
                    ))}
                </div>
            </div>
            <footer>All rights reserved to Youssef Khaled</footer>
        </div>
    );
}

export default App;
