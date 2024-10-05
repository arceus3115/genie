import React from 'react';

const ResultsDisplay: React.FC<{ keywords: string[] }> = ({ keywords }) => {
    return (
        <div>
            <h2> Keywords:</h2>
            {keywords.length > 0 ? (
                <ul>
                    {keywords.map((keyword, index) => (
                        <li key={index} className="text-gray-800 py-1">{keyword}</li>
                    ))}
                </ul>
            ) : (
                <div>
                    No keywords found. Please enter a prompt.
                </div>
            )}
        </div>
    );
};

export default ResultsDisplay;
