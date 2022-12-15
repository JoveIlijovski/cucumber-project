Feature: Register functionality testing on demoNopcommerce

  Scenario Outline: Register with valid credentials
    Given user is navigated on homepage
    Then user click on Register icon
    Then user enters <FirstName>, <LastName>, <Email>, <Password> and <ConfirmPassword>
    Then user click on RegisterButton
    Then user should be <status>

    Examples: 
      | FirstName | LastName  | Email            | Password | ConfirmPassword | status        |
      | Jove      | Ilijovski | jove@test.com |   123456 |          123456 | registered    |
      | Jove      | Ilijovski | jovei2test.com   |   123456 |          123456 | notregistered |
