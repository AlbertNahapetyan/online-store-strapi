"use strict";

const updateController = require("../../../../common/updateController");
/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", updateController);
