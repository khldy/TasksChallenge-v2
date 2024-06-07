import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'
import { dayContext } from '../context';
const Dashboard = () => {
    const navigate = useNavigate()
    const ctx = useContext(dayContext)

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
                <button key={i} className={`${className} ${ctx.completedDays.length > 0 && ctx.completedDays.includes(i.toString()) ? "completed":""}`} onClick={() => navigate("/challenge/" + i)}>
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
