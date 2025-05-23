import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditForm() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        axios.get(`https://6830120df504aa3c70f62bde.mockapi.io/user/details/${id}`)
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                console.error("Failed to get users ", error);
            })
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Form Data:', formData);
        axios.put(`https://6830120df504aa3c70f62bde.mockapi.io/user/details/${id}`, formData)
            .then(() => {
                toast.success('User Updated!', {
                    position: 'top-center',
                });
                setTimeout(() => {
                    navigate('/contact/details');
                }, 5500)
            })
            .catch((err) => {
                console.error("Error Updateing", err);
            })

    };
    return (
        <div className="flex flex-col my-20 items-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded-xl shadow-lg p-8 bg-gradient-to-br from-[#220135] to-black text-white space-y-6 justify-self-center" autoComplete="off"
            >
                <h2 className="text-2xl font-bold text-center">Update Details</h2>

                <div>
                    <label htmlFor="fname" className="block mb-1 font-medium">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                        autoComplete="off"
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
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                        autoComplete="off"
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
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
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
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-[#220135] font-semibold py-2 rounded-md hover:bg-purple-100 transition"
                >
                    Update
                </button>
                <ToastContainer />
            </form>
        </div>
    );
}


export default EditForm;