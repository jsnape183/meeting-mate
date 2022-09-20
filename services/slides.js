import repos from "../db";

export default {
  createAndAssign: async (deckId, slide) => {
    const addSlideResult = repos.slides.add(slide);

    if (!addSlideResult) {
      return false;
    }

    const assignToDeckResult = repos.decks.addToDeck(deckId, slide.id);

    return assignToDeckResult;
  }
};
