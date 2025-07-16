const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <p>© 2024 Hair Elegance. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="https://www.instagram.com/hairelegance.utah" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 