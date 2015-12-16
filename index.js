var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen({
  // smartCSR: true
});

screen.title = 'my window title';

var term = blessed.terminal({
	width: '50%',

});

screen.append(term);

// var prompt = blessed.Prompt({

// });

// screen.append(prompt);
// prompt.input('meaning of life and everithing', '42', function(err, data) {
// 	screen.render();
// 	loading.load('meaning of life and everithing');

// 	screen.lockKeys = false;

// });

// var loading = blessed.Loading({
// 	top: 'center',
// 	left: 'center',
// 	// width: 1
// });
// screen.append(loading);

// var progress = blessed.ProgressBar({
// 	top: 'center',
// 	left: 'center',
// 	width: '50%',
// 	// pch:'#',
// 	height: 1,
// 	filled: 0,
// 	// content: 'Hello {bold}world{/bold}!',
// 	// tags: true,
// 	// border: {
// 	//   type: 'line'
// 	// },
// 	style: {
// 		bg: 'magenta',
// 		bar: {
// 			bg: 'red',
// 			height: '100%',
// 			width: '100%'
// 		}
// 	}
// });


// screen.append(progress);

// setInterval(function() {
// 	if (progress.filled == 100) {
// 		progress.setProgress(0);
// 	};

// 	progress.progress(1);

// 	screen.render();
// }, 100)


// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
// box.focus();


// Render the screen.
screen.render();
