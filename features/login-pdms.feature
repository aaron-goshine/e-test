
Feature: LoginPDMS

  Scenario: Log into  PDMS User Dashboard
    Given the user navigate to the form
     Then the title should be "Umbraco - content1.qa.travcorpservices.com"
     And the user should populate the form
     When clicked on the submit button
     Then the title should be 'Content - content1.qa.travcorpservices.com'
     And the left navigation should visible
