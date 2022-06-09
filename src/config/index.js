const config ={
    development: {
        username: "root",
        password: "goodjob@349",
        database: "moviebe",
        host: "127.0.0.1",
        dialect: "mysql"
      },
    AUTH:{
        SECRET_KEY: "nodejs-20",

    },
    SYSTEM:{
        PORT:3000,
        HOST:"",
        DOMAIN: 'http://localhost:3000'
    }
};

module.exports=config;