import os from "os";
import fs from "fs/promises";

async function main() {
  try {

    console.log("Free Memory:", os.freemem());
    console.log("Total CPU Cores:", os.cpus().length);

    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    await fs.writeFile(
      "readme.md",
      "Hi this is first line in Readme"
    );
    console.log("readme.md created");

    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:");
    console.log(data);

    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Text appended to data.txt");

    await fs.unlink("readme.md");
    console.log("readme.md deleted");

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
