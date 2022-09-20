import services from "../../../services/slides";
import { apiSuccess, apiFail } from "../../../api/responses";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = services.createAndAssign(req.body.deckId, {
      id: req.body.id
    });

    if (!result) {
      res.status(500).json(apiFail(`Error creating slide ${req.body.id}`));
      return;
    }

    res.status(200).json(
      apiSuccess({
        id: req.body.id
      })
    );
    return;
  }

  res.status(200).json({ message: "Hello from slides" });
}
