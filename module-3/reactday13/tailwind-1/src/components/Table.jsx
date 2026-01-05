function Table() {
  return (
    <table className="w-full border border-gray-300 max-w-xl mx-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">City</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100">
          <td className="border p-2">A</td>
          <td className="border p-2">20</td>
          <td className="border p-2">Delhi</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="border p-2">B</td>
          <td className="border p-2">22</td>
          <td className="border p-2">Mumbai</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
