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
