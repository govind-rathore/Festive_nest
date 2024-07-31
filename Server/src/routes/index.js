const express = require("express");
const router = express.Router();

const userRoute = require("./user");
const eventRoute = require("./event");
const volunteerRoute = require("./volunteer");

// Route configuration
const defaultRoutes = [
  { path: "/user", route: userRoute },
  { path: "/event", route: eventRoute },
  { path: "/volunteer", route: volunteerRoute },
];

// Apply routes to the router
defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
