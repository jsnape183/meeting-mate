import { getClient } from "./lib/mongodb";

export default {
  getById: async (id) => {
    const client = await getClient();
    const deck = await client.db().collection("decks").findOne({ id: id });
    return deck;
  },
  addToDeck: async (id, slideId) => {
    const client = await getClient();
    const res = await client
      .db()
      .collection("decks")
      .updateOne({ id: id }, { $push: { slides: { id: slideId } } });

    return (
      res.acknowledged && res.matchedCount === 1 && res.modifiedCount === 1
    );
  },
  addToDeckAt: async (id, slideId, index) => {
    const client = await getClient();
    const res = await client
      .db()
      .collection("decks")
      .updateOne(
        { id: id },
        {
          $push: {
            slides: { $each: [{ id: slideId }], $position: index }
          }
        }
      );

    return (
      res.acknowledged && res.matchedCount === 1 && res.modifiedCount === 1
    );
  },
  remove: async (id, slideId) => {
    const client = await getClient();
    const res = await client
      .db()
      .collection("decks")
      .updateOne({ id: id }, { $pull: { slides: { id: slideId } } });

    return (
      res.acknowledged && res.matchedCount === 1 && res.modifiedCount === 1
    );
  }
};
