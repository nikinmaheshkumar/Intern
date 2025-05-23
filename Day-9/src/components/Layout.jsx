import Footer from './Footer';
import Navbar from './Navbar';


function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}


export default Layout;