package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class RegisterSteps {

	WebDriver driver = null;

	@Before
	public void openApp() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@After
	public void testClosure() {
		driver.quit();

	}

	@Given("^user is navigated on homepage$")
	public void user_is_navigated_on_homepage() {
		driver.get("https://demo.nopcommerce.com/");
	}

	@Then("user click on Register icon")
	public void user_click_on_Register_icon() {
		driver.findElement(By.xpath("//a[@class='ico-register']")).click();
	}

	@Then("^user enters (.*), (.*), (.*), (.*) and (.*)")
	public void user_enters_FirstName_LastName_Email_Password_and_ConfirmPassword(String FirstName, String LastName,
			String Email, String Password, String ConfirmPassword) {
		driver.findElement(By.xpath("//input[@id='gender-male']")).click();
		driver.findElement(By.xpath("//input[@id='FirstName']")).sendKeys(FirstName);
		driver.findElement(By.xpath("//input[@id='LastName']")).sendKeys(LastName);
		driver.findElement(By.xpath("//input[@id='Email']")).sendKeys(Email);
		driver.findElement(By.xpath("//input[@id='Password']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@id='ConfirmPassword']")).sendKeys(ConfirmPassword);

	}

	@Then("user click on RegisterButton")
	public void user_click_on_Register_Button() throws InterruptedException {
		driver.findElement(By.xpath("//button[@id='register-button']")).click();
		Thread.sleep(2000);
	}

	@Then("user should be registered")
	public void user_should_be_registered() {
		String expMessage = driver.findElement(By.xpath("//div[@class='result']")).getText();
		Assert.assertTrue(expMessage.contains("Your registration completed"));

	}

	@Then("user should be notregistered")
	public void user_should_be_not_registered() {
		Assert.assertEquals("https://demo.nopcommerce.com/register?returnUrl=%2F", driver.getCurrentUrl());

	}

}