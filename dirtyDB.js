// simple 'dirty' DB to simulate Mongo requests
// please DO NOT EVER store passwords in plain text
let DirtyDB = {
    "users": {
        "admin@gmail.com":{
            "name": "Admin",
            "password": "Admin321",
            "invites": []
        },
        "janedoe@gmail.com":{
            "name": "Jane Doe",
            "password": "CriticalHit",
            "teams": ["builders leauge united", "reliable excavation and demolition"],
            "invites": [],
        },
        "thepyro@gmail.com":{
            "name": "The Pyro",
            "password": "Mmph",
            "teams": ["builders leauge united"],
            "invites": ["reliable excavation and demolition"],
        },
    },

    "teams": {
        "builders leauge united": {
            "admins": ["thepyro@gmail.com"]
        },
        "reliable excavation and demolition": {
            "admins": ["janedoe@gmail.com"]
        },
    },
}