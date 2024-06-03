import React from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const history = useHistory();

    const handleDayClick = (day) => {
        history.push(`/tasks/${day}`);
    };

    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= 100; i++) {
            let className = 'day-button';
            if (i === 100) {
                className += ' day-100';
            } else if (i % 5 === 0) {
                className += ' multiple-of-five';
            } else if (i === 25 || i === 50 || i === 75) {
                className += ` day-${i}`;
            }
            buttons.push(
                <button key={i} className={className} onClick={() => handleDayClick(i)}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className="dashboard">
            <button id="theme-toggle"><i className="fa-solid fa-sun"></i></button>
            <div className="title">
                <h1>100 DAYS CHALLENGE</h1>
            </div>
            <div className="container">
                {renderButtons()}
            </div>
            <footer>All rights reserved to Youssef Khaled</footer>
        </div>
    );
};

export default Dashboard;
