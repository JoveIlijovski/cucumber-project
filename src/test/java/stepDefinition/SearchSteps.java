package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class SearchSteps {

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

	@Given("^user is on homepage")
	public void user_is_on_homepage() {
		driver.get("https://demo.nopcommerce.com/");
	}

	@When("^user enters (.*) in search box")
	public void user_enters_products_name_in_search_box(String productName) {
		driver.findElement(By.xpath("//input[@id='small-searchterms']")).sendKeys(productName);

	}

	@And("click on Search button")
	public void click_on_Search_button() {
		driver.findElement(By.xpath("//button[@class='button-1 search-box-button']")).click();
	}

	@Then("search page with searched product should be present")
	public void search_page_with_searched_product_should_be_present() {
		Assert.assertTrue(driver.getPageSource().contains("Advanced search"));

	}
	
	@Then("search page with searched product should be empty")
	public void search_page_with_searched_product_should_be_empty()  {
		Assert.assertTrue(driver.getPageSource().contains("No products were found that matched your criteria."));
	}
}