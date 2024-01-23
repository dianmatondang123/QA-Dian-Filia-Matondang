*** Settings ***
Resource        ../../base/base.robot
Variables       loginLocator.yaml


*** Keywords ***
Input Username On Login Page
    [Arguments]    ${username}
    Input Text    ${username-input}    ${username}

Input Password On Login Page
    [Arguments]    ${password}
    Input Text    ${password-input}    ${password}

Click Login Button On Login Page
    Click Element    ${log-in-button}
