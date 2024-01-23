*** Settings ***
Resource        ../../../base/base.robot
Variables       homeLocator.yaml


*** Keywords ***
Click Sign In Button On Home Page
    Click Element    ${sign-in-button}
