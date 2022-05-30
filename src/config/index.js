const config ={
    development:{
        user: 'root',
        password:'goodjob@349',
        database: 'moviebe',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    AUTH:{
        SECRET_KEY: 'moviebe',
    },
    SYSTEM:{
        PORT: 3000,
        HOST: '',
        DOMAIN:'http://localhost'
    }
}
module.exports = config;