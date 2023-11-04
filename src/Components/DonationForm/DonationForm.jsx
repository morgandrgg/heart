import React, {useState} from 'react';

const DonationForm = () => {
    const [donationAmount, setDonationAmount] = useState(10);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal');
    const [selectedProgram, setSelectedProgram] = useState('PROGRAMMES');
    const [isDonating, setIsDonating] = useState(false);

    const handleDonation = async () => {
        setIsDonating(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsDonating(false);

        setDonationAmount(10);
    };

    return (
        <div className='relative top-20 mb-24 ml-4 mr-4'>
            <div className="z-30 relative flex items-center justify-center w-full h-full overflow-auto">
                <div className="p-4 mb-1 rounded-lg">
                    <h1 className='text-4xl text-center font-extrabold font-sans text-dark-blue mt-0 mb-3'>Donate Now</h1>
                </div>
            </div>
            <div className="max-w-md mx-auto p-4 bg-lighter-blue shadow-md rounded-md relative">
                <form>
                    <div className="mb-4">
                        <label htmlFor="donationAmount" className="block text-gray-600 font-medium">
                            Donation Amount ($)
                        </label>
                        <input type="number" id="donationAmount" className="w-full p-2 border rounded-md" value={donationAmount}
                               onChange={(e) => setDonationAmount(e.target.value)}/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="program" className="block text-gray-600 font-medium">
                            Select a Program or Purpose
                        </label>
                        <select id="program" className="w-full p-2 border rounded-md" value={selectedProgram}
                                onChange={(e) => setSelectedProgram(e.target.value)}>

                            <option value="PROGRAMMES">PROGRAMMES</option>
                            <option value="SPONSOR A CHILD">SPONSOR A CHILD</option>
                            <option value="GIVE TO MISSIONARY">GIVE TO MISSIONARY</option>
                            <option value="FOOD PROGRAMMES">FOOD PROGRAMMES</option>
                            <option value="HEART OF GENERATION">HEART OF GENERATION</option>
                        </select>
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block text-gray-600 font-medium">
                            Select Payment Method
                        </label>
                        <select id="paymentMethod" className="w-full p-2 border rounded-md" value={selectedPaymentMethod}
                            onChange={(e) => setSelectedPaymentMethod(e.target.value)}>
                            <option value="paypal">PayPal</option>
                            <option value="mpesa">M-Pesa</option>
                            <option value="creditcard">Credit Card</option>
                        </select>
                    </div>

                    {selectedPaymentMethod === 'paypal' && (
                        <div className="mb-4">
                            {/* PayPal specific input fields */}
                            <label htmlFor="paypalEmail" className="block text-gray-600 font-medium">
                                PayPal Email
                            </label>
                            <input type="email" id="paypalEmail" className="w-full p-2 border rounded-md"/>
                        </div>)
                    }

                    {selectedPaymentMethod === 'mpesa' && (
                        <div className="mb-4">
                            {/* M-Pesa specific input fields */}
                            <label htmlFor="mpesaNumber" className="block text-gray-600 font-medium">
                                M-Pesa Number
                            </label>
                            <input type="text" id="mpesaNumber" className="w-full p-2 border rounded-md"/>
                        </div>)
                    }

                    {selectedPaymentMethod === 'creditcard' && (
                        <div className="mb-4">
                            {/* Credit Card specific input fields */}
                            <label htmlFor="cardNumber" className="block text-gray-600 font-medium">
                                Credit Card Number
                            </label>
                            <input type="text" id="cardNumber" className="w-full p-2 border rounded-md"/>
                        </div>
                    )}


                    <button type="button" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md"
                            onClick={handleDonation} disabled={isDonating}>
                        {isDonating ? 'Donating...' : 'Donate Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonationForm;
