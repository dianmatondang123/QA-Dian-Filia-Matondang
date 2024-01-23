*** Settings ***
Resource    ../base/base.robot
Resource    ../pageObject/homePage/homePage.robot
Resource    ../pageObject/loginPage/loginPage.robot


*** Variables ***
${VALID_USERNAME}       support@ngendigital.com
${VALID_PASSWORD}       abc123
${INVALID_USERNAME}     invalid@ngendigital.com
${INVALID_PASSWORD}     123abc


*** Test Cases ***
Login with Invalid Username
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${INVALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Invalid username/password")]
    Close Flight Application

Login with Invalid Password
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${INVALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Invalid username/password")]
    Close Flight Application

Login with Invalid Username Password
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${INVALID_USERNAME}
    Input Password On Login Page    ${INVALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Invalid username/password")]

    Close Flight Application
Login with Valid Credentials
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Close Flight Application

