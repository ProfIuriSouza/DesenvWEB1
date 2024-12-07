import './PomodoroTimer.css';
import React, { useState, useEffect } from 'react';

export default function PomodoroTimer () {
  // Estado para armazenar o tempo restante (em segundos)
  const [seconds, setSeconds] = useState(25 * 60); // 25 minutos em segundos
  const [isActive, setIsActive] = useState(false); // Controle de início e pausa
  const [isCompleted, setIsCompleted] = useState(false); // Verificar se o pomodoro foi completado

  // Função para formatar o tempo
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Efeito para controlar a contagem do temporizador
  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsCompleted(true); // O pomodoro foi completado
      setIsActive(false); // Parar o temporizador
    }
    return () => clearInterval(interval); // Limpar intervalo quando o componente desmontar ou o temporizador parar
  }, [isActive, seconds]);

  // Função para iniciar ou pausar o temporizador
  const toggleTimer = () => {
    setIsActive((prevActive) => !prevActive);
    setIsCompleted(false); // Resetar a conclusão
  };

  // Função para reiniciar o temporizador
  const resetTimer = () => {
    setIsActive(false);
    setIsCompleted(false);
    setSeconds(25 * 60); // Resetar para 25 minutos
  };

  return (
    <div className='pomodoro'>
      <h4>Pomodoro Timer</h4>
      <div className='timer'>
        {formatTime(seconds)}
      </div>
      <div>
        {isActive ? (
          <button onClick={toggleTimer} className='btn btn-info text-light'>Pausar</button>
        ) : (
          <button onClick={toggleTimer} className='btn btn-info text-light'>
            {isCompleted ? 'Reiniciar' : 'Iniciar'}
          </button>
        )}
        <button onClick={resetTimer} className='btn btn-secondary text-light'>
          Reiniciar
        </button>
      </div>
      {isCompleted && <p style={{ color: 'green', marginTop: '20px' }}>Pomodoro Completo!</p>}
    </div>
  );
};

// Estilo simples para os botões
const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
};
