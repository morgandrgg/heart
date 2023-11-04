import React, {useState} from 'react';

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [faqItems, setFaqItems] = useState([
        {
            question: 'Are we living in reality or is it just a matrix?',
            answer: 'Answer to the first question...',
            isExpanded: false,
        },
        {
            question: 'Are we just puppets and is there a bigger power in play?',
            answer: 'Answer to the second question...',
            isExpanded: false,
        },
        {
            question: 'How far does the universe actually extend?',
            answer: 'Answer to the third question...',
            isExpanded: false,
        },
        {
            question: 'Is Time Travel possible?',
            answer: 'Answer to the fourth question...',
            isExpanded: false,
        },
]);

const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
};

const handleExpandToggle = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isExpanded = !updatedFaqItems[index].isExpanded;
    setFaqItems(updatedFaqItems);
};

return (
    <>
        <section className="font-sans mb-10">
            <div className="pt-24 md:py-24 lg:py-36 text-center bg-blue-100 dark:bg-gray-700 lg:block">
                <div className="max-w-xl mx-auto mb-6">
                    <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white">
                        Frequently Asked Questions
                    </h1>
                    <p className="max-w-md pb-0 md:pb-0 mx-auto text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at eaque
                        quibusdam eum ratione.
                    </p>
                </div>
                <form className="flex items-center pb-24 md:pb-4 max-w-2xl px-4 mx-auto md:px-6 mb-10 md:mb-0">
                    <label htmlFor="voice-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="w-5 h-5 text-gray-500 dark:text-gray-400 bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                </path>
                            </svg>
                        </div>
                        <input type="text" id="voice-search"
                            className="bg-gray-50 border pr-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ask a question..." value={searchQuery} onChange={handleSearchChange} required/>
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 bi bi-mic" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z">
                                </path>
                                <path
                                    d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <button type="submit"
                        className="inline-flex items-center py-2 px-3 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 mr-2 -ml-1 bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                            </path>
                        </svg>
                        Search
                    </button>
                </form>
            </div>

            <div className="max-w-xl mx-auto">
                <div className="w-full p-4 rounded-md shadow-lg bg-stone-50 dark:bg-gray-800 -mt-36 lg:full">
                    {faqItems
                        .filter(
                            (item) =>
                                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                item.answer.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((item, index) => (
                            <div key={index} className="flex flex-col justify-between w-full py-4 pl-4 pr-3 mb-3 bg-white rounded shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between">
                                 <span className={`font-bold ${item.isExpanded ? 'text-blue-500' : ''} dark:text-white`}>
                                        {item.question}
                                 </span>
                                    <div className={`p-2 bg-blue-500 rounded cursor-pointer`} onClick={() => handleExpandToggle(index)}>
                                        {item.isExpanded ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 className="text-white" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z">
                                                </path>
                                            </svg>)
                                            :
                                            (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                 className="text-white" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                {item.isExpanded && (
                                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 answer">{item.answer}</div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    </>
);
};

export default Faq;
