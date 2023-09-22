@e2e
Feature: end to end tests

    @e2e_1
    Scenario Outline: test e2e
        Given user goes to the webpage
        And user enters "<userName>" , "<password>"

    Example:
            | userName      | password     |
            | standard_user | secret_sauce |