
import { Given, When, Then } from 'cucumber';
import { client } from 'nightwatch-api';


Given('the user navigate to the form', async function () {
  await client.url('https://content1.qa.travcorpservices.com/umbraco');
})

Then('the title should be {string}', async function (string) {
  await client.assert.title(string);
});

Then('the user should populate the form', async function () {

  console.log("==============================");
  console.log(process.env.CONTENT1_USERNAME);
  console.log(process.env.CONTENT1_PASSWORD);
  console.log("==============================");

  await client.assert.visible('input[name="username"]');
  await client.setValue('input[name="username"]', process.env.CONTENT1_USERNAME);
  await client.assert.visible('input[name="password"]');
  await client.setValue('input[name="password"]', process.env.CONTENT1_PASSWORD);
});

When('clicked on the submit button', async function () {
  await client.assert.visible('button[type="submit"]');
  await client.click('button[type="submit"]');
});


Then('the left navigation should visible', async function () {
  await client.assert.visible('#leftcolumn');
});


//
// Given('the User logs into the PDMS', async function () {
//   await client.url('https://content1.qa.travcorpservices.com/umbraco');
//   await client.assert.title('Umbraco - content1.qa.travcorpservices.com');
//   await client.assert.visible('input[name="username"]');
//   await client.setValue('input[name="username"]', 'aaron.goshine@ttc.com');
//   await client.assert.visible('input[name="password"]');
//   await client.setValue('input[name="password"]', 'Y*WHG7nk;O');
//   await client.assert.visible('button[type="submit"]');
//   await client.click('button[type="submit"]');
// });
//
// Then('the left navigation should visible', async function () {
//   await client.assert.visible('#leftcolumn');
// });
//
//    Then('the title should be {string}', async function (string) {
//   await client.assert.visible('#leftcolumn');
// });
//
//
