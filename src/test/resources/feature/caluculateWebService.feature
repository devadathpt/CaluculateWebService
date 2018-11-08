Feature: Caluculations

  @Test
  Scenario Outline: Perform add / multiply / substractions
    Given I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL
    When I want to perform <operation> of <a> and <b>
    Then the result is <c>
    Examples:
      | a  | b | c  | operation      |
      | 5  | 3 | 8  | addition       |
      | 5  | 3 | 2  | substraction   |
      | 2  | 6 | 12 | multiplication |
      | 10 | 5 | 2  | divide         |


