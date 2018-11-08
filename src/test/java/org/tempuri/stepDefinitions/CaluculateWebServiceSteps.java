package org.tempuri.stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import net.thucydides.core.annotations.Step;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.tempuri.Calculator;

public class CaluculateWebServiceSteps {

    private static final Logger logger = LogManager.getLogger(CaluculateWebServiceSteps.class);
    private org.tempuri.Calculator calculator = new Calculator();
    private int result;

    @Step
    @Given("^I am using a caluculator webservice (.*)$")
    public void iAmUsingAWebService(String webService) {
        logger.info("Testing WebService" + webService);
        logger.info("               ");

    }

    @Step
    @And("^I want to perform (.*) of (.*) and (.*)$")
    public void iWantToPerformOperation(String operation, int a, int b) {
        switch (operation) {
            case "addition":
                result = calculator.getCalculatorSoap().add(a, b);
                logger.info(operation + "  of " + a + " and " + b + ": Result is :" + result + "          ");
                logger.info("               ");


                break;
            case "substraction":
                result = calculator.getCalculatorSoap().subtract(a, b);
                logger.info(operation + "  of " + a + " and " + b + ": Result is :" + result + "          ");
                logger.info("               ");


                break;
            case "multiplication":
                result = calculator.getCalculatorSoap().multiply(a, b);
                logger.info(operation + "  of " + a + " and " + b + ": Result is :" + result + "          ");
                logger.info("               ");


                break;
            case "divide":
                result = calculator.getCalculatorSoap().divide(a, b);
                logger.info(operation + "  of " + a + " and " + b + ": Result is :" + result + "          ");
                logger.info("               ");

                break;

        }

    }

    @Step
    @Then("^the result is (.*)$")
    public void theResultIs(int c) {
        Assert.assertEquals(c, result);
    }
}
