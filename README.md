# Basic Sample Business Network

> This example is based on the "Hello World" of Hyperledger Composer samples, which demonstrates the core functionality of Hyperledger Composer by changing the value of an asset.

This business network defines:

**Participant**
`User`

**Asset**
`RepWallet`
`Meetup`

**Transaction**
`RegisterToMeetup`
`AttendMeetup`

RepWallet are owned by Users, and the value property on a RepWallet can be modified by submitting a RegisterToMeetup or AttendMeetup transaction. 

To test this Business Network Definition in the **Test** tab:

Create a `User` participant:

```
{
  "$class": "org.example.basic.User",
  "userId": "Toby",
  "firstName": "Tobias",
  "lastName": "Hunter"
}
```

Create a `RepWallet` asset:

```
{
  "$class": "org.example.basic.RepWallet",
  "assetId": "repWalletId:1",
  "owner": "resource:org.example.basic.User#Toby",
  "value": 10
}
```

Create a `Meetup` asset:

```
{
  "$class": "org.example.basic.Meetup",
  "meetupId": "5658",
  "meetupDate": "2018-06-11T10:24:30.027Z",
  "location": "Nice Location",
  "organizers": ["resource:org.example.basic.User#Toby"],
  "listAttendees": []
}
```

Submit a `RegisterToMeetup` transaction:

```
{
  "$class": "org.example.basic.RegisterToMeetup",
  "meetup": "resource:org.example.basic.Meetup#5658",
  "user": {
    "$class": "org.example.basic.RegisteredUser",
    "user": "resource:org.example.basic.User#Toby",
    "status": "BOOKED"
  },
  "wallet": "resource:org.example.basic.RepWallet#1"
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry. As a result, the value of the `assetId:1` should now be changed in the Asset Registry.

Submit a `AttendMeetup` transaction:

```
{
  "$class": "org.example.basic.RegisterToMeetup",
  "meetup": "resource:org.example.basic.Meetup#5658",
  "user": {
    "$class": "org.example.basic.RegisteredUser",
    "user": "resource:org.example.basic.User#Toby",
    "status": "ATTENDED"
  },
  "wallet": "resource:org.example.basic.RepWallet#1"
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry. As a result, the value of the `assetId:1` should now be changed in the Asset Registry.

Congratulations!

## License <a name="license"></a>
Hyperledger Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the LICENSE file. Hyperledger Project documentation files are made available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
