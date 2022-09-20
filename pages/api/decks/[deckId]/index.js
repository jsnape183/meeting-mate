import services from "../../../../services";
import { apiSuccess, apiFail } from "../../../../api/responses";

export default async function handler(req, res) {
  const { deckId } = req.query;
  const deck = await services.decks.getById(deckId);
  if (!deck) {
    res.status(404).json(apiFail(`Deck ${deckId} not found`));
    return;
  }
  res.status(200).json(apiSuccess({ id: deckId, ...deck }));
}
