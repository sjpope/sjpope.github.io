import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  background: #000;
  color: #0f0;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  padding: 10px;
  height: 400px;
  overflow-y: auto;
  border: 1px solid #333;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Prompt = styled.span`
  margin-right: 5px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: #0f0;
  outline: none;
  flex: 1;
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
`;

interface Command {
  command: string;
  output: string;
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<Command[]>([]);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    let output = '';
    switch (command.trim().toLowerCase()) {
      case 'help':
        output = 'Available commands: help, about, clear';
        break;
      case 'about':
        output = 'This is sjpope’s interactive portfolio terminal. Explore projects and more!';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = `Command not recognized: ${command}`;
    }
    setHistory([...history, { command, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <TerminalContainer>
      {history.map((item, index) => (
        <div key={index}>
          <div>
            <Prompt>&gt;</Prompt>
            <span>{item.command}</span>
          </div>
          <div>{item.output}</div>
        </div>
      ))}
      <InputRow>
        <Prompt>&gt;</Prompt>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </InputRow>
      <div ref={terminalEndRef} />
    </TerminalContainer>
  );
};

export default Terminal;
