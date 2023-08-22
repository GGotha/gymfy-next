const path = require('path')

const buildEslintCommand = filenames =>
	`next lint --fix --file ${filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' --file ')}`

const buildTestCommand = filenames =>
	`yarn test:verify ${filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' ')}`

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand, buildTestCommand],
}
