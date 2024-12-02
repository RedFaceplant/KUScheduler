// simple 'dirty' DB to simulate Mongo requests
// please DO NOT EVER store passwords in plain text
let DirtyDB = {
    "users": {
        "admin@gmail.com":{
            "name": "Admin",
            "password": "Admin321"
        },
        "janedoe@gmail.com":{
            "name": "Jane Doe",
            "password": "CriticalHit",
            "teams": ["builders leauge united"]
        },
        "thepyro@gmail.com":{
            "name": "The Pyro",
            "password": "Mmph",
            "teams": ["builders leauge united"]
        },
    },

    "teams": {
        "builders leauge united": {
            "admins": ["thepyro@gmail.com"]

        },
    },
}