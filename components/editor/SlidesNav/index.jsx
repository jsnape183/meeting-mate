import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  fetchSlideById,
  deleteSlideById,
  postSlide,
  reorderSlide
} from "../store/editorSlice";
import {
  selectDeckId,
  selectedSlide,
  selectedSlideId,
  selectSlides
} from "../store/selectors";
import SlidesNav from "./SlidesNav";

export const ConnectedSlidesNav = () => {
  const dispatch = useDispatch();
  const deckId = useSelector(selectDeckId);
  const { loaded } = useSelector(selectedSlide);
  const slideId = useSelector(selectedSlideId);
  const slides = useSelector(selectSlides);

  useEffect(() => {
    if (loaded) return;
    if (!slideId) {
      dispatch(fetchSlideById(slides[0].id));
      return;
    }
    dispatch(fetchSlideById(slideId));
  }, [loaded, dispatch, slideId, slides]);

  const handleSlideSelected = (id) => {
    dispatch(fetchSlideById(id));
  };

  const handleSlideAdded = () => {
    dispatch(postSlide({ deckId, id: uuidv4(), slidePreview: "" }));
  };

  const handleSlideDeleted = (id) => {
    if (id === slideId) dispatch(fetchSlideById(slides[0]));
    dispatch(deleteSlideById(id));
  };

  const handleSlideDropped = (slideId, index) => {
    console.log(`Dropped ${slideId} to ${index}`);
    dispatch(reorderSlide({ deckId, slideId, index }));
  };

  return !loaded ? (
    <></>
  ) : (
    <>
      <SlidesNav
        slides={slides}
        slideId={slideId}
        onSlideSelected={handleSlideSelected}
        onSlideAdded={handleSlideAdded}
        onSlideDeleted={handleSlideDeleted}
        onSlideDropped={handleSlideDropped}
      />
    </>
  );
};

export default ConnectedSlidesNav;
