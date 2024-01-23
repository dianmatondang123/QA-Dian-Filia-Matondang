*** Settings ***
Resource        ../../../base/base.robot
Variables       bookLocator.yaml

*** Keywords ***
Open Book
    Click Element    ${book-button}

Choose One-way Flight
    Click Element    ${one-way-button}

Choose Round-way Flight
    Click Element    ${round-way-button}

Choose From City New York
    Click Element    ${from-city-button}
    Wait Until Element Is Visible    ${newyork}
    Click Element    ${newyork}

Choose From City Chicago
    Click Element    ${from-city-button}
    Wait Until Element Is Visible    ${chicago}
    Click Element    ${chicago}

Choose From City Toronto
    Click Element    ${from-city-button}
    Wait Until Element Is Visible    ${toronto}
    Click Element    ${toronto}

Choose To City London
    Click Element    ${to-city-button}
    Wait Until Element Is Visible    ${london}
    Click Element    ${london}

Choose To City Paris
    Click Element    ${to-city-button}
    Wait Until Element Is Visible    ${paris}
    Click Element    ${paris}

Choose To City Ottawa
    Click Element    ${to-city-button}
    Wait Until Element Is Visible    ${ottawa}
    Click Element    ${ottawa}

Choose Class Economy
    Click Element    ${class-button}
    Wait Until Element Is Visible    ${economy}
    Click Element    ${economy}

Choose Class First
    Click Element    ${class-button}
    Wait Until Element Is Visible    ${first}
    Click Element    ${first}

Choose Class Bussiness
    Click Element    ${class-button}
    Wait Until Element Is Visible    ${bussines}
    Click Element    ${bussines}

Choose Start Date
    Click Element    ${start-date}
    Wait Until Element Is Visible    ${01-aug}
    Click Element    ${01-aug}
    Click Element    ${date-ok-button}

Choose End Date
    Click Element    ${end-date}
    Wait Until Element Is Visible    ${31-aug}
    Click Element    ${31-aug}
    Click Element    ${date-ok-button}

Choose Flight Only
    Wait Until Element Is Visible    ${flight-button}
    Click Element    ${flight-button}

Choose Flight and Hotel 
    Wait Until Element Is Visible    ${flight-hotel-button}
    Click Element    ${flight-hotel-button}

Choose Checkbox Day
    Wait Until Element Is Visible    ${checkbox-day-button}
    Click Element    ${checkbox-day-button}

Submit Book
    Click Element    ${submit-book-button}

Choose and Confirm Price
    Wait Until Element Is Visible    ${choose-price-button}
    Click Element    ${choose-price-button}
    Click Element    ${confirm-button}
