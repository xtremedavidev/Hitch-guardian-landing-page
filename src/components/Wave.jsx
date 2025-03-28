import React from "react";

const Wave = ({ fillColor, opacity, duration, values, top }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: "absolute",
        top: top,
        width: "100%",
        height: "100%",
        opacity: opacity,
      }}
    >
      <path fill={fillColor} fillOpacity="1">
        <animate
          attributeName="d"
          values={values}
          dur={duration}
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Wave;
