const express = require("express");
const router = express.Router();

const userRoute = require("./user");
const eventRoute = require("./event");
const volunteerRoute = require("./volunteer");

const defaultRoutes = [
  { path: "/user", route: userRoute },
  { path: "/event", route: eventRoute },
  { path: "/volunteer", route: volunteerRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
