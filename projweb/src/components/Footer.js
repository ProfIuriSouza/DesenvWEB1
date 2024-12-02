import './Footer.css';
import { useState } from 'react';

export default function Footer({ totalTasks, completedTasks}){




    return (
        <>
        <footer className="footer">
            <div className="task-count">
                <span>Total de tarefas: {totalTasks}</span>
                <span>Concluídas: {completedTasks}</span>
            </div>
            
        </footer>
        </>

    );
}