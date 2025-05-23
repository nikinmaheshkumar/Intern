import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forms() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
            {/* Details Button Outside the Form */}
            <div className="w-full max-w-md flex justify-end mb-2">
                <button
                    onClick={() => navigate('/contact/details')}
                    className="flex items-center gap-2 bg-white text-[#220135] border border-purple-900 font-bold border-2 px-6 py-3 text-lg rounded-md hover:bg-purple-100 transition shadow-md"
                >
                    <span className="text-xl">ℹ️</span> Details
                </button>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-xl shadow-lg p-8 bg-gradient-to-br from-[#220135] to-black text-white space-y-6"
            >
                <h2 className="text-2xl font-bold text-center">Contact Us</h2>

                <div>
                    <label htmlFor="fname" className="block mb-1 font-medium">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="lname" className="block mb-1 font-medium">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength="10"
                        pattern="\d{10}"
                        title="Enter a 10-digit phone number"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-[#220135] font-semibold py-2 rounded-md hover:bg-purple-100 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Forms;
