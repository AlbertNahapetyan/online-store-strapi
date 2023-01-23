"use strict";

const updateController = require("../../../../common/updateController");
/**
 * hot-deal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::hot-deal.hot-deal",
  ({ strapi }) => ({
    async find(ctx) {
      const { data: prev, meta } = await super.find(ctx);
      const data = { id: prev.id, ...prev.attributes };
      if (ctx.query.populate === "products") {
        const products = data.products.data.map((pr) => ({
          id: pr.id,
          ...pr.attributes,
        }));
        data.products = products;
      }

      return { data, meta };
    },
  })
);
