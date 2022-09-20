import repos from "../db";

export default {
  getById: async (id) => {
    const deck = await repos.decks.getById(id);

    const slideIds = deck.slides.map((s) => s.id);
    const slides = await repos.slides.getByIds(slideIds);
    deck.slides.forEach((ds) => {
      const slideToMap = slides.find((s) => {
        return s.id === ds.id;
      });
      ds.slidePreview = slideToMap.slidePreview;
    });
    return deck;
  },
  reorderSlide: async (id, slideId, index) => {
    const deck = await repos.decks.getById(id);
    let addResult = null;

    const removeResult = await repos.decks.remove(id, slideId);
    if (!removeResult) return false;

    if (index >= deck.slides.length) {
      addResult = await repos.decks.addToDeck(id, slideId, index);
      if (!addResult) return false;
      return deck;
    }

    addResult = await repos.decks.addToDeckAt(id, slideId, index);
    if (!addResult) return false;

    return deck;
  }
};
