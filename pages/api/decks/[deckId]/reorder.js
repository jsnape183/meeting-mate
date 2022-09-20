import services from "../../../../services";
import { apiSuccess, apiFail } from "../../../../api/responses";

export default async function handler(req, res) {
  const { deckId } = req.query;
  const { slideId, index } = req.body;
  const deck = await services.decks.reorderSlide(deckId, slideId, index);
  if (!deck) {
    res.status(500).json(apiFail(`Cannot move slide ${slideId}`));
    return;
  }
  res.status(200).json(apiSuccess({ slideId, index }));
}
