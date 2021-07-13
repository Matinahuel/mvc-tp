const path = require('path');

module.exports = {
    about : (req,res) => {
        return res.sendFile(path.resolve(__dirname,'..','views','about.html'))
    }

}