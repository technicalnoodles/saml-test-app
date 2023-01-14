---
sidebar_position: 4
---

# Testing the deployment

We have a few tests that we can perform to validate our deployment is going to work.  We will check the Meraki Dashboard to validate that it can send webhooks to our API,  then we will generate our own example to send, and finally we will have the Meraki Dashboard send a legitimate event to our API.

## Test Meraki webhook test

Within the Meraki Dashboard on the Alerts page where we just setup a new webhook.  We can click on the **Send test webhook** button to verify that Meraki can send a webhook.

After clicking on the button and waiting a little while, we should a status of `delivered`, like the below image shows:
![delivered webhook](../static/img/delivered-webhook.png)

Let us test with our own payload.

## Test using Postman

Our payload will not shutdown a port but will show that we are receiving a response from our function successfully.

In Postman we need to change the request to a post and paste in out API endpoint as the URL.

The test body of our request will be:
```json
{
  "version": "0.1",
  "sharedSecret": "",
  "sentAt": "2023-01-13T19:57:07.307562Z",
  "organizationId": "000000",
  "organizationName": "EX net",
  "organizationUrl": "https://n471.meraki.com/o/000000/manage/organization/overview",
  "networkId": "N_00000000",
  "networkName": "Ex net",
  "networkUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/wired_status",
  "networkTags": [],
  "deviceSerial": "Q00P-0000-0003",
  "deviceMac": "00:00:00:d7:14:83",
  "deviceName": "Home MX",
  "deviceUrl": "https://n471.meraki.com/ex_net/n/000000/manage/nodes/new_wired_status",
  "deviceTags": [],
  "deviceModel": "MX67W",
  "alertId": "",
  "alertType": "Switch port disconnected",
  "alertTypeId": "port_connected",
  "alertLevel": "warning",
  "occurredAt": "2023-01-13T19:57:07.259607Z",
  "alertData": {
    "portNum": 2,
    "description": "Switch port is down",
    "status": "up",
    "prevStatus": "100 Gbps",
    "portDesc": "Corp Access"
  }
}
```

The headers will be `Content-Type` and `Accept`.  Both will have a value of `application/json`

We can now send the request.  We should get back a `Not a downed port` response.
![not down port](../static/img/response.png)

Lastly we can test using an actual event.

## Live event test
In the Meraki Dashboard we need to shutdown a port that is connected to another active port. This will cause the port to go down.  After five minutes we should receive the webhook and the lambda fucntion will return `Port shutdown`.


