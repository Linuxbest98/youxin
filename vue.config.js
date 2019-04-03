const url = "https://openapi.youdao.com/api"

module.exports = {
	configureWebpack: {
		devServer: {
			proxy: {
				"/api": {
					target: "https://openapi.youdao.com/api",
					pathRewrite: {"^/api": ""}
				}

				
			},
		}
	}
}
