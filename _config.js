var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://melisaopiyo:ES3jIC2aOeuLEmol@cluster0.l5nlpw5.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://melisaopiyo:ES3jIC2aOeuLEmol@cluster0.l5nlpw5.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://melisaopiyo:ES3jIC2aOeuLEmol@cluster0.l5nlpw5.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
