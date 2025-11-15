
import React, { useState } from 'react';
import { getAIResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isThinkingMode, setIsThinkingMode] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Please enter a question.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResponse('');

        try {
            const aiResponse = await getAIResponse(query, isThinkingMode);
            setResponse(aiResponse);
        } catch (err) {
            setError('Failed to get a response. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="assistant" className="py-20 md:py-32 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">AI Electrical Assistant</h2>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                        Have a complex question about an electrical project or issue? Get instant guidance from our AI assistant. For critical issues, always consult with us directly.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto bg-gray-800 p-6 md:p-8 rounded-lg shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="e.g., 'What are the regulations for installing an EV charger in the UK?'"
                            className="w-full h-32 p-4 bg-gray-700 text-gray-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:outline-none transition-shadow"
                            disabled={isLoading}
                        />
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                               <input
                                    type="checkbox"
                                    id="thinking-mode"
                                    checked={isThinkingMode}
                                    onChange={(e) => setIsThinkingMode(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-500 bg-gray-600 text-amber-400 focus:ring-amber-500 cursor-pointer"
                                    disabled={isLoading}
                                />
                                <label htmlFor="thinking-mode" className="text-gray-300 select-none cursor-pointer">
                                    Enable Advanced Analysis
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : 'Ask Assistant'}
                            </button>
                        </div>
                    </form>
                    {error && <p className="mt-4 text-red-400">{error}</p>}
                    {response && (
                        <div className="mt-6 p-4 bg-gray-900/50 rounded-md">
                            <h3 className="text-lg font-semibold text-amber-400 mb-2">Assistant's Response:</h3>
                            <p className="text-gray-300 whitespace-pre-wrap">{response}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AIAssistant;
