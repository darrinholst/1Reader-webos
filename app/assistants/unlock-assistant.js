var UnlockAssistant = Class.create(BaseAssistant, {
  initialize: function(keychain, password) {
    this.keychain = keychain
    this.password = password
  },

  activate: function() {
    this.spinnerOn("Checking password...")

    setTimeout(function() {
      var unlocked = this.keychain.unlock(this.password)
      this.controller.stageController.swapScene('locked', this.keychain, unlocked)
    }.bind(this), 1000)
  }
})
