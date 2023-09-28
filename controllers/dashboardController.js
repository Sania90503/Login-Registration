//For Register Page
const dashboardView = (req, res) => {

  const loggedOut = req.session.loggedOut || false;

  res.render("dashboard", {
    user: req.user,
    loggedOut: loggedOut,
  });
};

module.exports = {
  dashboardView,
};
