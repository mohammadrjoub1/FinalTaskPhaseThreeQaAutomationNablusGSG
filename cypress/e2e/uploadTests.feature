Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses

   Scenario: Verify that the user can upload a txt file for Application Initiated
      Given Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State
      When I Login as an Admin ,AND Access the candidate form ,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form. Download the uploaded file
#  Then



#Scenario: Verify that the user can upload a txt file for Application Hired
#Given Visit the home page
# When I Login with InValid password and username
# Then I should see Invalid credentials


