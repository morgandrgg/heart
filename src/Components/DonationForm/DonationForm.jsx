import React, { useState } from 'react';

const DonationForm = () => {
    const [donationAmount, setDonationAmount] = useState(10);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal');
    const [selectedProgram, setSelectedProgram] = useState('PROGRAMMES');
    const [isDonating, setIsDonating] = useState(false);

    const handleDonation = async () => {
        setIsDonating(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsDonating(false);

        setDonationAmount(10);
        setName('');
        setEmail('');
    };

    return (
        <div>
        <div className="max-w-md mx-auto p-4 bg-amber-100 shadow-md rounded-md">

            {/*<h2 className="text-2xl font-extrabold text-indigo-600">Make a Donation</h2>*/}
            <form>
                <div className="mb-4">
                    <label htmlFor="donationAmount" className="block text-gray-600 font-medium">
                        Donation Amount ($)
                    </label>
                    <input
                        type="number"
                        id="donationAmount"
                        className="w-full p-2 border rounded-md"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="program" className="block text-gray-600 font-medium">
                        Select a Program or Purpose
                    </label>
                    <select
                        id="program"
                        className="w-full p-2 border rounded-md"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                    >
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
                    <select
                        id="paymentMethod"
                        className="w-full p-2 border rounded-md"
                        value={selectedPaymentMethod}
                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    >
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
                        <input
                            type="email"
                            id="paypalEmail"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>)
                }

                {selectedPaymentMethod === 'mpesa' && (
                    <div className="mb-4">
                        {/* M-Pesa specific input fields */}
                        <label htmlFor="mpesaNumber" className="block text-gray-600 font-medium">
                            M-Pesa Number
                        </label>
                        <input
                            type="text"
                            id="mpesaNumber"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>)
                }

                {selectedPaymentMethod === 'paypal' && (
                    <div className="mb-4">
                        {/* PayPal specific input fields */}
                        <label htmlFor="paypalEmail" className="block text-gray-600 font-medium">
                            PayPal Email
                        </label>
                        <input
                            type="email"
                            id="paypalEmail"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                )}

                {selectedPaymentMethod === 'mpesa' && (
                    <div className="mb-4">
                        {/* M-Pesa specific input fields */}
                        <label htmlFor="mpesaNumber" className="block text-gray-600 font-medium">
                            M-Pesa Number
                        </label>
                        <input
                            type="text"
                            id="mpesaNumber"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                )}

                {selectedPaymentMethod === 'creditcard' && (
                    <div className="mb-4">
                        {/* Credit Card specific input fields */}
                        <label htmlFor="cardNumber" className="block text-gray-600 font-medium">
                            Credit Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                )}


                <button
                    type="button"
                    className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md"
                    onClick={handleDonation}
                    disabled={isDonating}
                >
                    {isDonating ? 'Donating...' : 'Donate Now'}
                </button>
            </form>
        </div>
        </div>
    );
};

export default DonationForm;
