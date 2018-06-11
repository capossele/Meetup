# Basic Sample Business Network

> This is the "Hello World" of Hyperledger Composer samples, which demonstrates the core functionality of Hyperledger Composer by changing the value of an asset.

This business network defines:

**Participant**
`User`

**Asset**
`RepWallet`

**Transaction**
`UpdateWallet`

**Event**
`Update`

SampleAssets are owned by a SampleParticipant, and the value property on a SampleAsset can be modified by submitting a SampleTransaction. The SampleTransaction emits a SampleEvent that notifies applications of the old and new values for each modified SampleAsset.

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

Submit a `UpdateWallet` transaction:

```
{
  "$class": "org.example.basic.UpdateWallet",
  "asset": "resource:org.example.basic.RepWallet#repWalletId:1",
  "newValue": 12
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry and that a `SampleEvent` has been emitted. As a result, the value of the `assetId:1` should now be `new value` in the Asset Registry.

Congratulations!

## License <a name="license"></a>
Hyperledger Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the LICENSE file. Hyperledger Project documentation files are made available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
