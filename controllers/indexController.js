const path = require('path');

module.exports = {
    index : (req,res) => {
        return res.sendFile(path.resolve(__dirname,'..','views','home.html'))
    }

}