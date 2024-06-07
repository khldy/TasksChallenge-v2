import axios from 'axios';
const baseUrl = "http://localhost:5000";

const getAllToDoForADay = (day) => {
    return axios.get(baseUrl+"/challenge/"+day)
        .then(({ data }) => {
            console.log('data ----> ', data);
            return data;
        });
};

const addToDo = (text,day) => {
    return axios.post(`${baseUrl}/save/${day}`, { text,day })
        .then(({ data }) => {
            console.log(data);
            return getAllToDoForADay(day);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const updateToDo = (toDoId, text,day) => {
    return axios.post(`${baseUrl}/update`, { _id: toDoId, text })
        .then(({ data }) => {
            return getAllToDoForADay(day);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const deleteToDo = (_id,day) => {
    return axios.post(`${baseUrl}/delete`, { _id })
        .then(({ data }) => {
            console.log(data);
            return getAllToDoForADay(day);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const completeToDo = (_id, completed,day) => {
    return axios.post(`${baseUrl}/complete`, { _id, completed})
        .then(({ data }) => {
            console.log(data);
            return getAllToDoForADay(day);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export { getAllToDoForADay, addToDo, updateToDo, deleteToDo, completeToDo};
