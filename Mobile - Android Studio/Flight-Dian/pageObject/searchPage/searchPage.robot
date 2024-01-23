*** Settings ***
Resource        ../../base/base.robot
Variables       searchLocator.yaml


*** Keywords ***
Open Search
    Click Element    ${search-flight-button}

Input Search
    [Arguments]    ${search-key}
    Input Text    ${search-input}    ${search-key}

Click Search Button
    Click Element    ${search-button}
