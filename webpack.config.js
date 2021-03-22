var config = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			}
		]
	}
};

module.exports = config;
