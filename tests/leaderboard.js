module.exports = {
  "Leaderboard Test Basics" : function (browser) {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('div.message', 5000)
      // this would fail, if you wanted to test for error cases
      //.waitForElementVisible('#doesNotExist-FAIL', 125)
      .waitForElementVisible('ol li.player', 1000)
      .click('ol li.player:nth-child(1)')
      .pause(125)
      .getText('li.selected span.name', function(result) {
        this.assert.containsText('div.details div.name', result.value);
      })
      .getText('li.selected span.score', function(result) {
        var selectedScore = parseInt(result.value);
        this.pause(125)
        this.assert.containsText('div.details button.inc', 'Add 5 points')

        this.click('div.details button.inc')
        this.pause(125)
        // verify the score went up by 5
        this.assert.containsText('li.selected span.score', selectedScore + 5)

        this.click('div.details button.inc')
        this.pause(125)
        // verify the score went up by 5 again
        this.assert.containsText('li.selected span.score', selectedScore + 10)

        this.click('div.details button.inc')
        this.pause(125)
        // verify the score went up by 5 again
        this.assert.containsText('li.selected span.score', selectedScore + 15)
        // verify the selected name hasn't changed
        this.getText('li.selected span.name', function(result) {
          this.assert.containsText('div.details div.name', result.value);
        })
      })
      .end();
  }
};

