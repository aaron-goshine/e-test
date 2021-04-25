
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');


Given('the user navigate to the form', async function () {
  await client.url('https://content1.qa.travcorpservices.com/umbraco');
})

Then('the title should be {string}', async function (string) {
  await client.assert.title(string);
});

Then('the user should populate the form', async function () {
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

