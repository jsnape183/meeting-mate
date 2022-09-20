export const selectDeckId = (state) => state.editor.present.deckId;
export const selectSlides = (state) => state.editor.present.slides;
export const selectedSlide = (state) => state.editor.present.selectedSlide;
export const selectedSlideId = (state) => selectedSlide(state).id;
export const selectedBlock = (state) => selectedSlide(state).selectedBlock;
export const selectSlideLoaded = (state) => selectedSlide(state).loaded;
export const selectZoom = (state) => state.editor.present.zoom;
