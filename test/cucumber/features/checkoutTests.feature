Feature: Checkout tests

    Scenario Outline: Checkout with one product
        Given User open page
        When User logins as standardUser
        When User adds first product from list to cart
        And User clicks on shoppingCartLink
        And User clicks on Checkout
        When User fill In Checkout Information <firstName>, <lastName> and <postCode>
        And User clicks Finish button on the Checkout Overview page
        Then Checkout Overview page contains <message>
        Examples:
            | firstName   | lastName   | postCode | message                     |
            | 'firstName' | 'lastName' | 'B555'   | 'Thank you for your order!' |