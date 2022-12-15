$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/register.feature");
formatter.feature({
  "name": "Register functionality testing on demoNopcommerce",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is navigated on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on Register icon",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \u003cFirstName\u003e, \u003cLastName\u003e, \u003cEmail\u003e, \u003cPassword\u003e and \u003cConfirmPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on RegisterButton",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword",
        "status"
      ]
    },
    {
      "cells": [
        "Jove",
        "Ilijovski",
        "joveee12@test.com",
        "123456",
        "123456",
        "registered"
      ]
    },
    {
      "cells": [
        "Jove",
        "Ilijovski",
        "jovei2test.com",
        "123456",
        "123456",
        "notregistered"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_is_navigated_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Register icon",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_click_on_Register_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Jove, Ilijovski, joveee12@test.com, 123456 and 123456",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_enters_FirstName_LastName_Email_Password_and_ConfirmPassword(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on RegisterButton",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_click_on_Register_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be registered",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_should_be_registered()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Register with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_is_navigated_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Register icon",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_click_on_Register_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Jove, Ilijovski, jovei2test.com, 123456 and 123456",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_enters_FirstName_LastName_Email_Password_and_ConfirmPassword(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on RegisterButton",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_click_on_Register_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be notregistered",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.RegisterSteps.user_should_be_not_registered()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/search.feature");
formatter.feature({
  "name": "Search functionality testing on demoNopcommerce",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test searching products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cproductName\u003e in search box",
  "keyword": "When "
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.step({
  "name": "search page with searched product should be \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productName",
        "status"
      ]
    },
    {
      "cells": [
        "Nike Floral",
        "present"
      ]
    },
    {
      "cells": [
        "Asus",
        "present"
      ]
    },
    {
      "cells": [
        "Dell",
        "empty"
      ]
    },
    {
      "cells": [
        "Keyboard",
        "empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test searching products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Nike Floral in search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_enters_products_name_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search page with searched product should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.search_page_with_searched_product_should_be_present()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test searching products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Asus in search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_enters_products_name_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search page with searched product should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.search_page_with_searched_product_should_be_present()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test searching products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Dell in search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_enters_products_name_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search page with searched product should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.search_page_with_searched_product_should_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test searching products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Keyboard in search box",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.user_enters_products_name_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search page with searched product should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.SearchSteps.search_page_with_searched_product_should_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});