function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded shadow">
      <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D" className="rounded-t" />
      <div className="p-4">
        <h3 className="font-bold">Card Title</h3>
        <p className="text-gray-600">Simple card component</p>
        <button className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
