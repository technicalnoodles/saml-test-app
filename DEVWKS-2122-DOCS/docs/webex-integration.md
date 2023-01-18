---
sidebar_position: 2
---

# Webex Integration

To be able to make an authentication request to the Webex service, we first need to create a Webex Integration. An integration allows us to authenticate a user and ask for certain permissions from the user. We may then make API requests on their behalf. After they have provided this intial access, we can then use it to authenticate the user as well.

## Create the Webex Integration

We need to go to the Webex Developer site to sign in and then create our integration.
Follow this [link](https://developer.webex.com/) to go the developer site. After this site loads, click on **Log in** on the top right and sign in with your Cisco login.

After getting logged in, click on the **Start Building Apps** button in the middle left side of the page.

It will bring you to the **Create a New App** screen.  
![new app screen](../static/img/new-app-select.png)

Click on the **Create an Integration** in the bottom left box to make our integration.

It will look the below image minus the filled in the fields:

![integration settings 1](../static/img/integration-settings-1.png)

The the first radio button to `no` because we will not be using this in a mobile SDK.

Select and Icon that you prefer.

Please give the Integration a name that ends with`dev` so that it can easily be discerned it is for development purposes.

You may enter any description for this integration taht youwould like, but this example says its for an example application.

The **Redirect URI(s)** section is very important to this workshop. The redirect URI will be used by the Integration to send the finished authentication request to. We will be using `localhost:5000/auth/cisco/callback` as the value in this field.

It should look like the below image:
![redirect URI](../static/img/redirect-uri.png)

The next field are the **Scopes** these are the permissions the application will have after the user authenticates. For our application, we will be using `spark:all`. Please select this scope and then we can create the integration.

![redirect URI](../static/img/spark-all.png)

Click on **Add Integration** at the very bottom of the page. Your integration should be created and a congratulations screen will come up.

![redirect URI](../static/img/congratulations.png)

We will use the ID and Secret later on this workshop. But we are able to generate a new secret later, so we will move onto to explaing the OAuth flow and how our application will be able to use with PassportJs.
