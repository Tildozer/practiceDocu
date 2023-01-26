import chalk from 'chalk';
import fileB, { foo, bar } from './fileB.js'
// import fileC from './fileC.js'


// const exportsFromFileB = require('./fileB') // note the relative file path
// // console.log(exportsFromFileB)
// const exportsFromFileC = require('./fileC')
/** 
!!Modifiers!!

*    reset - Reset the current style.
*    bold - Make the text bold.
*    dim - Make the text have lower opacity.
*    italic - Make the text italic. (Not widely supported)
*    underline - Put a horizontal line below the text. (Not widely supported)
*    overline - Put a horizontal line above the text. (Not widely supported)
*    inverse- Invert background and foreground colors.
*    hidden - Print the text but make it invisible.
*    strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
*    visible- Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.
*/
/**
   !!Colors!!
*    black
*    red
*    green
*    yellow
*    blue
*    magenta
*    cyan
*    white
*    blackBright (alias: gray, grey)
*    redBright
*    greenBright
*    yellowBright
*    blueBright
*    magentaBright
*    cyanBright
*    whiteBright
 */

/**
   !!Background colors!!

*    bgBlack
*    bgRed
*    bgGreen
*    bgYellow
*    bgBlue
*    bgMagenta
*    bgCyan
*    bgWhite
*    bgBlackBright (alias: bgGray, bgGrey)
*    bgRedBright
*    bgGreenBright
*    bgYellowBright
*    bgBlueBright
*    bgMagentaBright
*    bgCyanBright
*    bgWhiteBright

*/
  fileB();



console.log(chalk.blue("blue"));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'

log(
    chalk.bgHex('#DEADED').underline('Hello, world!'),
    chalk.bgRgb(15, 100, 204).inverse('Hello!')
)
log(
    chalk.rgb(255, 136, 0).bold('Orange!'),
    chalk.hex('#FF8800').bold('Orange!'),
    chalk.bgAnsi256(194)('Honeydew, more or less')
)