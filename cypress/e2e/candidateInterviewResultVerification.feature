Feature: candidateInterviewResultVerification
   candidateInterviewResultVerification

   Scenario: Candidate Interview Result Verification Pass State
      Given Create Employee , Create Job Title ,Create ,Vacancy ,Create Candidate With Interview scheduled State
      When I Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed
      Then candidate's status should be Interview Passed



   Scenario: Candidate Interview Result Verification Failed State
      Given Create Employee , Create Job Title ,Create ,Vacancy ,Create Candidate With Interview scheduled State
      When I Login As Admin , And Access the candidate form And Change the candidate status to Interview Failed
      Then candidate's status should be Interview Failed


