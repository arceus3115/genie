import React, { useState } from 'react';

const PromptInput: React.FC<{ onSubmit: (prompt: string) => void }> = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What are you looking for?"
                required
            />
            <button
                type="submit"
            >
                Search
            </button>
        </form>
    );
};

export default PromptInput;
