/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { StyledWrapper } from "./ItemCard.style";

const ItemCard = ({ service }: { service: any }) => {

  return (
    <StyledWrapper color={service.color}>
      <div className="card">
        <a className="card1" href="#">
          <p className="text-center inline-block text-2xl">{service.icon}</p>
          <p className="small">{service.title}</p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </StyledWrapper>
  );
};

export default ItemCard;
