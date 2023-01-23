const updateController = ({ strapi }) => ({
  async find(ctx) {
    const { data: prevData, meta } = await super.find(ctx);
    const data = prevData.map((el) => ({ id: el.id, ...el.attributes }));
    return { data, meta };
  },

  async findOne(ctx) {
    const { data: prevData, meta } = await super.findOne(ctx);
    const data = { id: prevData.id, ...prevData.attributes };
    return { data, meta };
  },
});

module.exports = updateController;
