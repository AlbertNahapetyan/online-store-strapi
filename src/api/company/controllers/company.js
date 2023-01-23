"use strict";

const updateController = require("../../../../common/updateController");
/**
 * company controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::company.company", updateController);
