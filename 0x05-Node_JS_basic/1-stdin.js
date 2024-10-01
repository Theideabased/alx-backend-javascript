const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

function ask(question){
	rl.question(question, (answer) => {
		rl.write(`Your name is: ${answer}\n`);
		rl.close()
	})
}
rl.on('close', () => {
	console.log('This important software is now closing');
	process.exit(0)

});
ask('Welcome to Holberton School, what is your name?\n');
