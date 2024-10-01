class AppController {
  // Static method that returns a welcome message
  static getHomepage(req, res) {
    // Send 200 status and the message
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
