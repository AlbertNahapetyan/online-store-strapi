"use strict";

const updateController = require("../../../../common/updateController");
/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  updateController
);
