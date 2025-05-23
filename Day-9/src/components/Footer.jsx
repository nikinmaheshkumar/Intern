import "../styles/index.css"

function Footer() {
    return (
        <footer className="bg-[#220135] text-white p-4 flex justify-center items-center h-20">
            <p>Built By Nikin &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;