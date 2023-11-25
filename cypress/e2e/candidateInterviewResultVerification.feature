Feature: candidateInterviewResultVerification
   candidateInterviewResultVerification

   Scenario: Candidate Interview Result Verification Pass State
      Given The system has an Employee record
      Given The system has a Job Title record
      Given The system has a Vacancy record
      Given The system has a Candidate With Interview scheduled State record
      When  The user Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed
      Then candidate's status should be Interview Passed



   Scenario: Candidate Interview Result Verification Failed State
      Given The system has an Employee record
      Given The system has a Job Title record
      Given The system has a Vacancy record
      Given The system has a Candidate With Interview scheduled State record
      When  The user Login As Admin , And Access the candidate form And Change the candidate status to Interview Failed
      Then candidate's status should be Interview Failed


