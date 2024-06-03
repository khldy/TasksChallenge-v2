import axios from 'axios';
const baseUrl = "http://localhost:5000";

const getAllToDo = () => {
    return axios.get(baseUrl)
        .then(({ data }) => {
            console.log('data ----> ', data);
            return data;
        });
};

const addToDo = (text) => {
    return axios.post(`${baseUrl}/save`, { text })
        .then(({ data }) => {
            console.log(data);
            return getAllToDo();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const updateToDo = (toDoId, text) => {
    return axios.post(`${baseUrl}/update`, { _id: toDoId, text })
        .then(({ data }) => {
            return getAllToDo();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const deleteToDo = (_id) => {
    return axios.post(`${baseUrl}/delete`, { _id })
        .then(({ data }) => {
            console.log(data);
            return getAllToDo();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const completeToDo = (_id, completed) => {
    return axios.post(`${baseUrl}/complete`, { _id, completed})
        .then(({ data }) => {
            console.log(data);
            return getAllToDo();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo, completeToDo};
