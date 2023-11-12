Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses

   Scenario: Verify that the user can upload a txt file for Application Initiated
      Given Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State
      When Login as Admin ,AND Access candidate form in Application Initiated state,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form
      Then I should see that the content of the file is the same as the upload it one




   Scenario: Verify that the user can upload a txt file for Application Hired
      Given Create Employee Create Job Title Create Vacancy Create Candidate With Application Hired State
      When Login as Admin ,AND Access candidate form in Hired state,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form
      Then I should see that the content of the file is the same as the upload it one


