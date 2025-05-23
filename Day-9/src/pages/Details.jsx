import { useEffect, useState } from 'react';
import { FaTrash, FaEdit, FaUser } from 'react-icons/fa';
import axios from "axios"

const Details = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://6830120df504aa3c70f62bde.mockapi.io/user/details")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to get users ", error);
                setLoading(false);
            })
    }, [])


    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = (id) => {
        alert(`Edit user with ID ${id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-4 shadow-lg">
                        <FaUser className="text-white text-xl" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        User Management
                    </h1>
                    <p className="text-gray-600 text-lg">Manage your users with ease</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm border border-gray-100">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold text-white">Active Users</h2>
                            <div className="bg-white/20 px-4 py-2 rounded-full">
                                <span className="text-white font-medium">{users.length} Users</span>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {users.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-200 group"
                                    >
                                        <td className="px-6 py-6">
                                            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                                                <span className="text-sm font-semibold text-purple-700">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="relative">
                                                    <img
                                                        src={user.avatar}
                                                        alt={`${user.fname} ${user.lname}`}
                                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100 group-hover:ring-purple-200 transition-all duration-200"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {user.fname} {user.lname}
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="space-y-1">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                    <span className="text-sm font-medium text-gray-900">{user.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                    <span className="text-sm text-gray-600">{user.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex items-center justify-center space-x-3">
                                                <button
                                                    onClick={() => handleEdit(user.id)}
                                                    className="group/btn relative p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-md"
                                                    title="Edit User"
                                                >
                                                    <FaEdit className="text-blue-600 text-sm group-hover/btn:scale-110 transition-transform duration-200" />
                                                    <div className="absolute inset-0 bg-blue-200 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-200"></div>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user.id)}
                                                    className="group/btn relative p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-md"
                                                    title="Delete User"
                                                >
                                                    <FaTrash className="text-red-600 text-sm group-hover/btn:scale-110 transition-transform duration-200" />
                                                    <div className="absolute inset-0 bg-red-200 rounded-lg opacity-0 group-hover/btn:opacity-20 transition-opacity duration-200"></div>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Showing {users.length} of {users.length} users</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;