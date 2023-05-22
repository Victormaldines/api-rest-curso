class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (e) {
      res.status(400).json({
        errors: ['erro'],
      });
    }
  }
}

export default new HomeController();
