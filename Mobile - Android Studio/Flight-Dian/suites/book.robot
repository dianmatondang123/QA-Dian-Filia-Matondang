*** Settings ***
Resource    ../base/base.robot
Resource    ../pageObject/homePage/homePage.robot
Resource    ../pageObject/loginPage/loginPage.robot
Resource    ../pageObject/searchPage/searchPage.robot
Resource    ../pageObject/bookPage/bookPage.robot


*** Variables ***
${VALID_USERNAME}       support@ngendigital.com
${VALID_PASSWORD}       abc123

*** Test Cases ***
#One-way
Book: One way - Toronto - Paris - Economy - Flight only - with Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${one-way-button}
    Choose One-way Flight
    Choose From City Toronto
    Choose To City Paris
    Choose Class Economy
    Choose Start Date
    Choose End Date
    Choose Flight Only
    Choose Checkbox Day
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: One way - Chicago - Ottawa - First - Flight only - without Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${one-way-button}
    Choose One-way Flight
    Choose From City Chicago
    Choose To City Ottawa
    Choose Class First
    Choose Start Date
    Choose End Date
    Choose Flight Only
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: One way - New York - London - Bussiness - Flight and Hotel - with Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${one-way-button}
    Choose One-way Flight
    Choose From City New York
    Choose To City London
    Choose Class Bussiness
    Choose Start Date
    Choose End Date
    Choose Flight and Hotel
    Choose Checkbox Day
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: One way - New York - Ottawa - Economy - Flight and Hotel - without Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${one-way-button}
    Choose One-way Flight
    Choose From City New York
    Choose To City Ottawa
    Choose Class Economy
    Choose Start Date
    Choose End Date
    Choose Flight and Hotel
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application    

#Round-way
Book: Round way - Chicago - Paris - First - Flight only - with Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${round-way-button}
    Choose Round-way Flight
    Choose From City Chicago
    Choose To City Paris
    Choose Class First
    Choose Start Date
    Choose End Date
    Choose Flight Only
    Choose Checkbox Day
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: Round way - New York - Paris - First - Flight only - without Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${round-way-button}
    Choose Round-way Flight
    Choose From City New York
    Choose To City Paris
    Choose Class Bussiness
    Choose Start Date
    Choose End Date
    Choose Flight Only
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: Round way - Toronto - London - Economy - Flight and Hotel - with Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${round-way-button}
    Choose Round-way Flight
    Choose From City Toronto
    Choose To City London
    Choose Class Economy
    Choose Start Date
    Choose End Date
    Choose Flight and Hotel
    Choose Checkbox Day
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application

Book: Round way - Toronto - Ottawa - First - Flight and Hotel - without Day
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Book
    Wait Until Element Is Visible    ${round-way-button}
    Choose Round-way Flight
    Choose From City Toronto
    Choose To City Ottawa
    Choose Class Economy
    Choose Start Date
    Choose End Date
    Choose Flight and Hotel
    Submit Book
    Choose and confirm price
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Your flight is booked")]
    Close Flight Application    