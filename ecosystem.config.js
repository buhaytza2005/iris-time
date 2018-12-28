module.exports = {
    apps: [
        {
            name: "IRIS-TIME",
            script: "bin/run.js",
            env_production: {
                NODE_ENV: "production",
                IRIS_URL: "http://3.82.138.13:5000"
            }
        }
    ],
    deploy: {
        production: {
            key: "../iris.pem",
            user: "node",
            host: "52.91.163.214",
            ref: "origin/master",
            repo: "https://github.com/buhaytza2005/iris-time.git",
            path: "/srv/production",
            "post-deploy": "cp ../.env ./ && npm install && pm2 startOrRestart ecosystem.config.js --env production"
        }
    }
};