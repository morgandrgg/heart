import {Link} from "react-router-dom";

const Error = ({ status }) => {
    const title = {
        404: "Page Not Found",
        403: "Forbidden",
        500: "Internal Server Error",
    }[status] || "Error"; // Added a default value for unknown status

    const description = {
        404: "Sorry, the page you are looking for couldn't be found",
        403: "Sorry, you are forbidden from accessing this page",
        500: "Oops 😪😪 something went wrong with our servers",
    }[status] || "An error occurred"; // Added a default value for unknown status

    return (
        <>
            <section className="h-screen bg-center bg-no-repeat bg-cover bg-gradient-to-r from-lighter-blue to-lighter-gray">
                <div className="flex items-center h-full lg:h-screen">
                    <div className="justify-center max-w-6xl px-2 mx-auto text-center">
                        <div className="w-full p-4 bg-white lg:p-16 dark:bg-gray-700">
                            <h1 className="inline-block mb-8 font-bold text-gray-700 text-7xl lg:text-9xl dark:text-gray-300">
                                {status}
                            </h1>
                            <h2 className="mb-6 text-2xl font-semibold text-gray-600 lg:text-4xl dark:text-gray-300">
                                {title}
                            </h2>
                            <p className="mb-8 text-xs text-gray-600 lg:text-xl dark:text-gray-300">
                                {description}
                            </p>
                            <div className="mb-8">
                                <div className="flex px-6 py-2 border border-gray-700 rounded-md dark:border-gray-400">
                                    <input type="text" className="w-full pr-4 text-sm text-gray-700 bg-white dark:text-gray-400 dark:bg-gray-700 placeholder-text-100" placeholder="Search..."/>
                                    <button className="flex items-center text-gray-700  dark:hover:text-blue-300 hover:text-yellow-700">
                                        <span className="mr-2 text-xs">Go</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center">
                                <Link to='/' className="px-8 py-4 text-xs font-medium text-gray-100 uppercase bg-light-blue rounded-full lg:text-base dark:bg-dark-blue dark:hover:bg-dark-blue hover:bg-dark-blue md:w-auto">
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;
