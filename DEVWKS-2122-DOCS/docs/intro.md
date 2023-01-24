---
sidebar_position: 1
---

# Introduction

This workshop will guide you through the process of adding Webex OAuth to a custom application. This application is built with ReactJs, Node, Express, and MongoDb.

We live in an era where employees want to get thousands of data points in a way that they want view it. Whether that’s because the current tool can’t do what they want, they can’t aggregate their data from multiple sources, or the data just doesn’t exist at the moment. This causes employees to look for a solution outside of what the company can provide.

They look to the bold new no-code application builders like Microsoft Power Apps and Glide.com or they create their own application and start querying the data from any source they need. They are then able to format it in any way they want to view it. But these are no longer controlled by the company and many of them will have little to no security. If we leave them as is, the data they can retrieve can be accessed by anyone, not just the authorized users who need it. How do we add security to these home-grown applications the employees feel they need to do their job?

We could audit the departments and take away those applications they painstakingly created, but then they may resent us and may even try to hide them in the future. The other option is to assist them with adding security to their application. With this option, we allow the employee to continue using the application they worked hard to create by adding authentication and authorization. This preventing open access of the data to anyone and keeps the company in compliance with data protection legislation.

At the end of the day we cannot stop employees from creating what they feel they need to complete their job, but we can certainly help them make it more secure.

This is what we will be doing in the workshop today. We will learn how to add authentication to an application using Webex OAuth and learn how it works, from the backend to the frontend.

## Clone Repository

We need to start off by cloning the GitHub repository that has the boilerplate code you will using in this workshop.

Please open your CLI and run the below command to clone the DEVWKS-2122 repository:  
`git clone https://github.com/galica9999/DEVWKS-2122`

After it has been cloned, please change into the DEVWKS-2122 directory.
`cd DEVWKS-2122`

Run the command `npm run setup-dependencies` this command will install the dependencies needed to run the code. This could take a few minutes to finish.

You should now be able to open this repository in Visual Studion Code using the `code .` command. If not, please open Visual Studio Code and open the folder from the file menu.

Once it is open, you should see the `Explorer` with the below files and folders:
![file structure](../static/img/file-structure.png)

The `client` directory contains the ReactJs frontend.  
The `models` directory has the files used for interacting with the MongoDb.  
The `routes` directory has all of the backend API routes the frontend will use and other services may use.  
The `services` directory combines the routes and models to provide them as a "service".  
Lastly is the file `index.js`. This file handles running all of the application code and serving the frontend once it has been built.

:::note
The `DEVWKS-2122-DOCS` and `docs` directories can be ignored since they contain the built and unbuilt documentation you are reading
:::

Now we need to run our MongoDb as a docker container.

## MongoDb Docker Container

To get a MongoDb up and running as quickly as possible, we can use Docker to pull a container image and then run the service locally. The Mongo container should already be on the workshop computer. Running the following command will run a container called `mongodb` if it is already on the host system. We are exposing the MongoDb ports as well so that we can connect to it without being in the container:

`docker run --name mongodb -d -p 27017:27017 mongo`

If the `docker run` command does not work, we need to pull down the image using the below command:  
`docker pull mongo`

Then we may run the command from the previous step.

Now that we are familiar with the file structure, and have the database running, we need to setup the Webex Integration that will be used for the authentication process.
