/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.RegisterToMeetup} tx The sample transaction instance.
 * @transaction
 */
async function registerToMeetup(tx) {  // eslint-disable-line no-unused-vars

    tx.wallet.value -= 1
    // Get the asset registry for the asset.
    const walletRegistry = await getAssetRegistry('org.example.basic.RepWallet');
    // Update the asset in the asset registry.
    await walletRegistry.update(tx.wallet);
  
  	tx.meetup.listAttendees.push(tx.user)
    // Get the asset registry for the asset.
    const meetupRegistry = await getAssetRegistry('org.example.basic.Meetup');
    // Update the asset in the asset registry.
    await meetupRegistry.update(tx.meetup);
}

/**
 * Sample transaction processor function.
 * @param {org.example.basic.AttendMeetup} tx The sample transaction instance.
 * @transaction
 */
async function AttendMeetup(tx) {  // eslint-disable-line no-unused-vars

  	//let i = tx.meetup.listAttendees.indexOf(tx.user)
    
    for (let i = 0; i < tx.meetup.listAttendees.length; i++){
      	if (tx.meetup.listAttendees[i].user === tx.user.user){
    		tx.meetup.listAttendees[i].status = "ATTENDED"
        
            tx.wallet.value += 1
            // Get the asset registry for the asset.
            const walletRegistry = await getAssetRegistry('org.example.basic.RepWallet');
            // Update the asset in the asset registry.
            await walletRegistry.update(tx.wallet);
        }
    }

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.basic.Meetup');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.meetup);
   
}
