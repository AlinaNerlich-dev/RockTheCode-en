# Rock The Code Power Portfolio Project

## SETUP AND INSTALL INSTRUCTIONS

Install all dependencies using npm install. Make sure you are in the correct project folder!


## JSON-SERVER DETAILS

Remember to install json-server and direct it to run in the DATA folder. 
Use the command:  

json-server technologies.json --id "_id"

The --id flag tells json-server that the data has a property "_id" instead of simply "id". Otherwise it will not server files correctly.

To preserve the original state of the database, you may also start json-server using the --snapshots flag and type s + enter at any time in the terminal to save a copy of the current state of the database.

json-server technologies.json --snapshots --id "_id"


## STARTING LIVE SERVER
use "npm run dev" in the root folder to begin 

