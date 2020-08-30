# Blind Lunch UI5 ( Development )

A webapp to find a co-worker from your own or another department to have lunch with. 

## Features

- Signup ( disabled on Herokuapps, a single test - user will be returned )
- Signing up person may decide whether or not s/he wants to have lunch with a person that doesn't work in their department
- Random selection of a signed up user
- Daily wipe of database

## Tech stack

### Serverside

- Node / Express setup
- Lowdb handles signed up users and query for matching. 
- Integrating into another db is very simple though

### Clientside

- App uses SAP's OpenUI5 framework, runtime & libraries
- These are served from a static folder of the Node app

## Demo ( Signup does not work on Herokuapps )

https://blind-lunch-ui5.herokuapp.com/
