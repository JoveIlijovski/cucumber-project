Feature: Search functionality testing on demoNopcommerce

  Scenario Outline: Test searching products
       
       Given user is on homepage
       When user enters <productName> in search box
       And click on Search button
       Then search page with searched product should be <status>
       
       Examples: 
       | productName |  status |
       | Nike Floral | present |
       | Asus        | present |
       | Dell        | empty   |
       | Keyboard    | empty   |
  