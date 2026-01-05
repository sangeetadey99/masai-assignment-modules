function Form() {
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <input className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-blue-400" placeholder="Name" />
      <input className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-blue-400" placeholder="Email" />
      <input className="w-full border p-2 mb-4 rounded focus:ring-2 focus:ring-blue-400" placeholder="Password" />
      <button className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300">
        Submit
      </button>
    </form>
  );
}

export default Form;
