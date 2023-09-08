import fs from "fs/promises";

const readFile = async() => {
  const text = await fs.readFile("instruction.txt", "utf-8");
  // const buffer = await fs.readFile("instruction.txt");
  // const text = buffer.toString();
  console.log(text);
}

readFile()

// fs.readFile("instruction.txt")
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))

// fs.readFile("instruction.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// })




const addText = async() => {
  await fs.appendFile("instruction.txt", "\n9. пункт");
}

addText();

const replaceText = async() => {
  const result = await fs.writeFile("test.txt", "Тестове повідомлення");
  console.log(result);
}

replaceText();