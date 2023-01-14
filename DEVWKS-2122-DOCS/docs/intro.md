---
sidebar_position: 1
---

# Introduction
This guide will take you through the steps it takes to create an AWS Lambda function, create an AWS API endpoint and code a simple function to respond to a webhook from the Meraki Dashboard. 


## Getting Started

The rest of this guide will now guide you through the workshop.

The major steps for making a Lambda function that can receive webhooks are below:
* AWS Login
* Create a Lambda Function
* Code the Lambda Function
* Lambda Function Testing
* Create an API Endpoint
* Full Test with the Meraki webhook

## AWS Login

Please sign in to AWS using your own credentials or the credentials provided.  Here is a link to **[AWS](https://aws.amazon.com/)**. Click on the **Sign In** button on the top right to sign in.

### Change the AWS Region

After getting signed in, change the region you are in to the region specified on the login sheet unless you are using your own account.  To change the region, look to the top right of the page and to the left of where it has your username, there will be a city name.  Select it and then change the region to the one on the sheet. It should look similar to this image below:

![Region Change](../static/img/region-change.png)

After the region has been changed, we can now work on our Lambda function without impacting anyone else.

### Open AWS Lambda Page

To open the AWS Lambda page, we need to search for **Lambda** in the search bar on the top left and select it. The search should look similar to this screenshot:

![Lambda Search](../static/img/lambda-search.png)



