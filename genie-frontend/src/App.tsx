import React, { useState } from 'react';
import PromptInput from './components/PromptInput';
import ResultsDisplay from './components/ResultsDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchKeywords = async (prompt: string) => {
      setLoading(true);
      try {
          const response = await fetch('http://127.0.0.1:8000/process-prompt/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ prompt }),
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setKeywords(data.keywords);
      } catch (error) {
          console.error('Error fetching keywords:', error);
      } finally {
          setLoading(false);
      }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 p-5">
          <h1>Genie</h1>
          <PromptInput onSubmit={fetchKeywords} />
          {loading ? <LoadingSpinner /> : <ResultsDisplay keywords={keywords} />}
      </div>
  );
};


export default App;
