import React, {useEffect, useState} from "react";

const PartnershipForm = ()=>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        category: 'Corporate Partnership',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server or perform any desired actions)
        console.log(formData);
    };

    return(
        <>
            <div className='bg-pure-white py-16 md:py-20'>
                <div className={`transition-colors ${isScrolled ? 'bg-white text-neutral-black' : 'bg-primary-color bg-opacity-80 text-pure-white'} py-6 rounded-br-3xl rounded-bl-3xl`}>
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl font-sans font-bold">Partnership Form</h1>
                    </div>
                    {isScrolled ? (
                        (
                            <div className="flex w-32 mt-1 ml-10 overflow-hidden rounded md:mx-auto md:mb-0">
                                <div className="flex-1 h-2 bg-blue-200">
                                </div>
                                <div className="flex-1 h-2 bg-blue-400">
                                </div>
                                <div className="flex-1 h-2 bg-blue-300">
                                </div>
                            </div>
                        )
                    ) : null}
                </div>
                <div className="flex justify-center items-center -mt-40  -mb-48 md:-mb-8 md:mt-12 h-screen">
                    <div className="p-8 rounded-lg w-96 bg-lighter-blue">
                        <div>
                            <form onSubmit={handleSubmit} className="">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="organization" className="block text-gray-700">Organization (if applicable):</label>
                                    <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-gray-700">Partnership Category:</label>
                                    <select id="category" name="category" value={formData.category} onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        <option value="Corporate Partnership">Corporate Partnership</option>
                                        <option value="Individual Sponsorship">Individual Sponsorship</option>
                                        <option value="Nonprofit Collaboration">Nonprofit Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700">Message or Comments:</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                                </div>

                                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default  PartnershipForm