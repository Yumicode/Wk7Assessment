
import { Builder, Capabilities, By } from "selenium-webdriver"
import { urlContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('click the draw button shows the div with an id of "choices"', async () => {
    await driver.sleep(2000)
    await driver.findElement(By.id('draw')).click() 
    const choicesSection = await driver.findElement(By.id('choices'))
    const displayed = await choicesSection.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('click the "Add to Duo" button shows the div with an id of "play-duo"', async () => {
    await driver.findElement(By.id('draw')).click() 
    await driver.findElement(By.css('.bot-btn')).click() 
    const playerDuoSection = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoSection.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('when a bot is"Removed from Duo", it goes back to "choices"', async () => {
    await driver.findElement(By.id('draw')).click() 
    await driver.findElement(By.css('.bot-btn')).click() 
    const selectedBotName = await driver.findElement(By.xpath('//div[@id="player-duo"]/div/h3')).getText()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//button[text()="Remove from Due"]')).click()
    const returnedBot = await driver.findElement(By.xpath('//div[@id="player-duo"]/div/h3(text(), + 'selectedBotName + ' )]'))
    const displayed = await returnedBot.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

})
