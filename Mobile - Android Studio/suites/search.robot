*** Settings ***
Resource    ../base/base.robot
Resource    ../pageObject/homePage/homePage.robot
Resource    ../pageObject/loginPage/loginPage.robot
Resource    ../pageObject/searchPage/searchPage.robot


*** Variables ***
${VALID_USERNAME}       support@ngendigital.com
${VALID_PASSWORD}       abc123
${SEARCH}               DA935
${INVALID_SEARCH}       ZZ666


*** Test Cases ***
Search Flight without Login
    Open Flight Application
    Page Should Not Contain Element    ${search-input}
    Close Flight Application

Search Flight with Login using invalid Flight Number
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Search
    Wait Until Element Is Visible    ${search-input}
    Input Search    ${INVALID_SEARCH}
    Click Search Button
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Please enter valid Flight Number")]
    Close Flight Application

Search Flight with Login
    Open Flight Application
    Click Sign In Button On Home Page
    Wait Until Element Is Visible    ${username-input}
    Input Username On Login Page    ${VALID_USERNAME}
    Input Password On Login Page    ${VALID_PASSWORD}
    Click Login Button On Login Page
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Sign Out")]
    Open Search
    Wait Until Element Is Visible    ${search-input}
    Input Search    ${SEARCH}
    Click Search Button
    Wait Until Page Contains Element    xpath=//*[contains(@text, "Toronto to Paris")]
    Wait Until Page Contains Element    xpath=//*[contains(@text, "DA 935")]
    Close Flight Application

