const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let data=await fs.readFile(fileName,"utf-8");
	console.log(data);
	
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {

	await fs.unlink(fileName)
	// write code here
	// dont chnage function name
}
myFileWriter("newfile.txt" , "hello");
myFileUpdater("newfile.txt", " world");
myFileReader("newfile.txt");
myFileDeleter("newfile.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }