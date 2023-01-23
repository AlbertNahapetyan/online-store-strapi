const updateController = ({ strapi }) => ({
  async find(ctx) {
    const { data: prevData, meta } = await super.find(ctx);
    let data = [];
    prevData.map((el) => data.push({ id: el.id, ...el.attributes }));

    return { data, meta };
  },

  async findOne(ctx) {
    const { data: prevData, meta } = await super.findOne(ctx);
    const data = { id: prevData.id, ...prevData.attributes };
    return { data, meta };
  },
});

module.exports = updateController;
