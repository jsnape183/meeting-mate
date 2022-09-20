import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SlidePreview from "./SlidePreview";
import Icon from "../../common/Icon";
import SlideDropzone from "./SlideDropzone";

export const SlidesNav = ({
  slides,
  onSlideSelected,
  onSlideAdded,
  onSlideDeleted,
  onSlideDropped,
  slideId
}) => (
  <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "scroll"
      }}
    >
      <DndProvider backend={HTML5Backend}>
        {slides.map((s, i) => (
          <React.Fragment key={`frag_${s.id}`}>
            <SlideDropzone
              key={`drop_${s.id}`}
              index={i}
              onDrop={(id) => onSlideDropped(id, i > 1 ? i - 1 : i)}
            />
            <div key={`slide_${s.id}`} onClick={() => onSlideSelected(s.id)}>
              <SlidePreview
                key={`slidepreview_${s.id}`}
                id={s.id}
                index={i}
                image={s.slidePreview}
                selected={s.id === slideId}
                onDelete={onSlideDeleted}
              />
            </div>
          </React.Fragment>
        ))}
        <SlideDropzone
          index={slides.length}
          onDrop={(id) => onSlideDropped(id, slides.length)}
        />
      </DndProvider>
      <Button onClick={onSlideAdded} color="primary">
        {Icon.addCircleOutlined}
      </Button>
    </div>
  </>
);

SlidesNav.propTypes = {
  slides: PropTypes.array.isRequired,
  slideId: PropTypes.string.isRequired,
  onSlideSelected: PropTypes.func.isRequired,
  onSlideAdded: PropTypes.func.isRequired,
  onSlideDeleted: PropTypes.func.isRequired,
  onSlideDropped: PropTypes.func.isRequired
};

export default SlidesNav;
