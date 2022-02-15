const app = require('./app')
const startRoutes = require('./routes')
const startDataBaseConnection = require('./database')

//__DataBase Config
startDataBaseConnection();

//__Routes
startRoutes(app);

//__Start Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${process.env.SERVER_URL}:${app.get('port')}`)
})

