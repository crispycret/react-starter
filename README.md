

# React + Flask Starter Kit

### Author: Brandon Nadeau

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Flask]().

The Starter Kit is a working template that comes prebuilt with back-end and front-end user authentication support.
\
Windows Not Yet Supported.
\

## Clone the project
```
git clone https://github.com/crispycret/react-starter.git
```


## Flask (Back End)
This project uses Python's Flask to serve as the applications bakend API and supports the following features. 

<!-- Create a Table here -->    
* User Authentication
* Database Management

The back-end flask application has been linked to the react project allowing hot-reloading of the flask application \
which speeds up development and allows `npm` to start both the front-end and and back-end applications.



# React (Front End)

Frontend user interaction is provided using React. \
All features provided by the back-end API have a corresponding web page as a working example.

The feature `User Authentication` is exampled using multiple web pages to allow user authentication selection by personal preference and should be minimized to a single login/signup method by the developer.


# Customizable settings

* Front-end project name in the `package.json` file
* Back-end database name in the `config.py` file.


# Getting Started with React + Flask

The react application is ready to be used but all features that require back-end support will not work as we have not started the back-end application.

## React
Install package dependencies
```
npm install
```

### Start React
```
 npm start
```

Runs the react app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Start Flask

As mentioned above we will be using `npm` to start the flask application. This is do-able after adding both a `proxy` field that points to the back-end API end-point and a new command that starts the flask application in the `package.json` file. Open another terminal to start the flask application and run the following commands to setup the flask application.

### Environment setup
First we need to create and activate a virtual environment in the `backend` folder using the following commands.

```
cd backend
python -m venv env
source env/bin/activate
```

After creating and activating the venv we need to install the flask applications dependencies using the provided `requirements.txt` file.

```
pip install -r requirements.txt
```

### Database Initialization

Now that the environment is ready we can initialize the database for the backend.

```
flask db init
flask db migrate -m "Initial Migration"
flasj db upgrade
```

With that the back-end setup is complete. Finally start the flask application using `npm` from the root directory.

```
cd ..
npm run backend
```

Runs the flask api in development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any errors in the console.


<!-- Table goes here -->
## List of backend api requests

* / -> api information.
* /login -> access_token
* /register -> action status
* /logout -> destroy access_token
* /users -> list of users

## Other React Commands

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


<!-- # ============================================================================================================================ -->

