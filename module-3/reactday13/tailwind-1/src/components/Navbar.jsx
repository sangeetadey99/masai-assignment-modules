function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex flex-col md:flex-row gap-4">
      <a className="hover:text-blue-600">Home</a>
      <a className="hover:text-blue-600">Features</a>
      <a className="hover:text-blue-600">Contact</a>
    </nav>
  );
}

export default Navbar;
