import { getClient } from "./lib/mongodb";

export default {
  add: async (slide) => {
    const client = await getClient();
    const res = await client
      .db()
      .collection("slides")
      .insertOne({ id: slide.id, blocks: [], slidePreview: "" });

    return res.nInserted === 1;
  },
  getById: async (id) => {
    const client = await getClient();
    const slide = await client.db().collection("slides").findOne({ id: id });
    return slide;
  },
  getByIds: async (ids) => {
    const client = await getClient();
    const slides = await client
      .db()
      .collection("slides")
      .find({ id: { $in: ids.map((id) => id) } })
      .toArray();

    return slides;
  },
  updateOne: async (slide) => {
    const client = await getClient();
    const res = await client
      .db()
      .collection("slides")
      .updateOne(
        { id: slide.id },
        {
          $set: {
            blocks: slide.blocks,
            slidePreview: slide.slidePreview
          }
        }
      );

    return (
      res.acknowledged && res.matchedCount === 1 && res.modifiedCount === 1
    );
  }
};
