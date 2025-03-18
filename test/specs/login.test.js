import { expect,driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('cliente2@ebac.art.br','Ebac-qe')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('Ebac Ebac')).isDisplayed()).toBeTruthy()
    })
})
