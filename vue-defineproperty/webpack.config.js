
const HtmlWebpackPlguin = require("html-webpack-plugin")
const {resolve} = require("path")
module.exports ={
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:resolve(__dirname,"dist")
    },
    module:{
        rules:[]
    },
    plugins:[ new HtmlWebpackPlguin({
        template:'./src/index.html'
    })],
    mode:"development",
    devServer:{
        port:"3000",open:true,
    
    }
}