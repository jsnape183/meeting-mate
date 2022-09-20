import repo from "../../../db";
import { apiSuccess, apiFail } from "../../../api/responses";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await repo.slides.updateOne(req.body);

    if (!result) {
      res.status(200).json(apiFail(`Failed to update ${req.body.id}`));
      return;
    }
    res.status(200).json(apiSuccess({}));
    return;
  }
  if (req.method === "DELETE") {
    res.status(200).json({
      success: true,
      error: "",
      data: { id: 1 }
    });
    return;
  }
  const { slideId } = req.query;
  const slide = await repo.slides.getById(slideId);
  res.status(200).json(apiSuccess({ id: slideId, ...slide }));
}
