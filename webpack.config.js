const ETWP = require("extract-text-webpack-plugin");//less、sass文件编译插件
module.exports={
	entry:{
		bundle:__dirname+"/src/script/app.js"
	},
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style-loader!css-loader"},
			{test:/\.(js|jsx)$/,exclude:/node_modules/,loader:"jsx-loader!babel-loader"},
			{test:/\.less$/,exclude:/node_modules/,loader:"style-loader!css-loader!less-loader"},
			// {test:/\.(sass|scss)$/,exclude:/node_modules/,loader:"style-loader!css-loader!sass-loader"}//这里的loader只是将样式应用到页面上，并没有将scss和less文件转存为css文件到dist中
			{test:/\.(sass|scss)$/,loader:ETWP.extract({fallback: 'style-loader',use: ['css-loader', 'sass-loader']})}
			//此处使用了extract-text-webpack-plugin插件，将文件scss或者less文件转存到dist目录下并编译为css文件,一般只在项目上线之前使用,开发过程中不需要导出为css文件
		]
	},
	devtool:"source-map",
	devServer:{
		contentBase:__dirname+"/dist",
		host:"localhost",
		port:8000,
		inline:true,
		hot:true
	},
	plugins:[
		new ETWP({
			filename:'css/[name].css',
			allChunks:true
		})
	]

};
