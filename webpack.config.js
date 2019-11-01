//entry->output 

const path= require('path');

module.export = {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),     //absolute path
        filename :'bundle.js'
    }
};