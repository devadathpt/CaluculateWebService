$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/caluculateWebService.feature");
formatter.feature({
  "line": 1,
  "name": "Caluculations",
  "description": "",
  "id": "caluculations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Perform add / multiply / substractions",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to perform \u003coperation\u003e of \u003ca\u003e and \u003cb\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is \u003cc\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions;",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "c",
        "operation"
      ],
      "line": 9,
      "id": "caluculations;perform-add-/-multiply-/-substractions;;1"
    },
    {
      "cells": [
        "5",
        "3",
        "8",
        "addition"
      ],
      "line": 10,
      "id": "caluculations;perform-add-/-multiply-/-substractions;;2"
    },
    {
      "cells": [
        "5",
        "3",
        "2",
        "substraction"
      ],
      "line": 11,
      "id": "caluculations;perform-add-/-multiply-/-substractions;;3"
    },
    {
      "cells": [
        "2",
        "6",
        "12",
        "multiplication"
      ],
      "line": 12,
      "id": "caluculations;perform-add-/-multiply-/-substractions;;4"
    },
    {
      "cells": [
        "10",
        "5",
        "2",
        "divide"
      ],
      "line": 13,
      "id": "caluculations;perform-add-/-multiply-/-substractions;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Perform add / multiply / substractions",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to perform addition of 5 and 3",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.dneonline.com/calculator.asmx?WSDL",
      "offset": 36
    }
  ],
  "location": "CaluculateWebServiceSteps.iAmUsingAWebService(String)"
});
formatter.result({
  "duration": 1656126096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 36
    }
  ],
  "location": "CaluculateWebServiceSteps.iWantToPerformOperation(String,int,int)"
});
formatter.result({
  "duration": 658436783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 14
    }
  ],
  "location": "CaluculateWebServiceSteps.theResultIs(int)"
});
formatter.result({
  "duration": 2035666,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Perform add / multiply / substractions",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to perform substraction of 5 and 3",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is 2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.dneonline.com/calculator.asmx?WSDL",
      "offset": 36
    }
  ],
  "location": "CaluculateWebServiceSteps.iAmUsingAWebService(String)"
});
formatter.result({
  "duration": 185499579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "substraction",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 40
    }
  ],
  "location": "CaluculateWebServiceSteps.iWantToPerformOperation(String,int,int)"
});
formatter.result({
  "duration": 229762983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "CaluculateWebServiceSteps.theResultIs(int)"
});
formatter.result({
  "duration": 89960,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Perform add / multiply / substractions",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to perform multiplication of 2 and 6",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is 12",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.dneonline.com/calculator.asmx?WSDL",
      "offset": 36
    }
  ],
  "location": "CaluculateWebServiceSteps.iAmUsingAWebService(String)"
});
formatter.result({
  "duration": 173470642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiplication",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "6",
      "offset": 42
    }
  ],
  "location": "CaluculateWebServiceSteps.iWantToPerformOperation(String,int,int)"
});
formatter.result({
  "duration": 270748761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 14
    }
  ],
  "location": "CaluculateWebServiceSteps.theResultIs(int)"
});
formatter.result({
  "duration": 79679,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Perform add / multiply / substractions",
  "description": "",
  "id": "caluculations;perform-add-/-multiply-/-substractions;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am using a caluculator webservice http://www.dneonline.com/calculator.asmx?WSDL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I want to perform divide of 10 and 5",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is 2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.dneonline.com/calculator.asmx?WSDL",
      "offset": 36
    }
  ],
  "location": "CaluculateWebServiceSteps.iAmUsingAWebService(String)"
});
formatter.result({
  "duration": 171300293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 18
    },
    {
      "val": "10",
      "offset": 28
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "CaluculateWebServiceSteps.iWantToPerformOperation(String,int,int)"
});
formatter.result({
  "duration": 219987672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "CaluculateWebServiceSteps.theResultIs(int)"
});
formatter.result({
  "duration": 116691,
  "status": "passed"
});
});