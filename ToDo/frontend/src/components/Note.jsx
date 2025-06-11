function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                    {note.title}
                </h3>
                <button
                    onClick={() => onDelete(note.id)}
                    className="opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    aria-label="Delete note"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {note.content}
            </p>
            
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {formattedDate}
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
            </div>
        </div>
    );
}

export default Note