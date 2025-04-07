"use client";

import React, { useState } from "react";
import { StyledWrapper } from "./ProductButton.styles";

const ProductButton = ({
  modesData,
  selectedMode,
  setSelectedMode,
}: {
  modesData: any;
  selectedMode: any;
  setSelectedMode: any;
}) => {
  return (
    <div className="flex justify-center items-center">
      {modesData.map((mode: any) => (
        <StyledWrapper color={mode.color}>
          <div className="radio-tile-group">
            {
              <div className="input-container" key={mode.id}>
                <input
                  id={mode.Title}
                  className="radio-button"
                  type="radio"
                  name="radio"
                  checked={selectedMode === mode.id}
                  onChange={() => setSelectedMode(mode.id)}
                />
                <div className="radio-tile">
                  <div className="icon">{mode.mainIcon}</div>
                  <label htmlFor={mode.Title} className="radio-tile-label">
                    {mode.Title.charAt(0).toUpperCase() + mode.Title.slice(1)}
                  </label>
                  <label
                    htmlFor={mode.Subtitle}
                    className="text-[12px] text-gray-500 mt-2"
                  >
                    {mode.Subtitle.charAt(0).toUpperCase() +
                      mode.Subtitle.slice(1)}
                  </label>

                  {selectedMode === mode.id && (
                    <div className="text-xl absolute bottom-[0.5rem]">
                      {mode.icon}
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
        </StyledWrapper>
      ))}{" "}
    </div>
  );
};

export default ProductButton;
