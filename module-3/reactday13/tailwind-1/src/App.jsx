import Navbar from "./components/Navbar";
import Button from "./components/Button";
import HoverImage from "./components/HoverImage";
import ResponsiveText from "./components/ResponsiveText";
import List from "./components/List";
import Card from "./components/Card";
import Table from "./components/Table";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen space-y-10">
      <Navbar />
      <ResponsiveText />
      <Button />
      <HoverImage />
      <List />
      <Card />
      <Table />
      <Form />
      <Grid />
    </div>
  );
}

export default App;
