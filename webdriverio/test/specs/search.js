describe('Search', function() {
    it('Given user is on home page', function() {
        browser.url('http://target.com');
    });
    it('When user search any product', function() {
        browser.waitForVisible('#search');
        browser.setValue('#search','pencil');
        browser.waitForVisible('[data-search="submit"]');
        browser.click('[data-search="submit"]');
        browser.pause(5000);
    });
});