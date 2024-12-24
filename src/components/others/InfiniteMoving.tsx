"use client";

import React from "react";
import { InfiniteMovingImage } from "../ui/infinite-moving-cards";

export function InfiniteMoving() {
    return (
        <InfiniteMovingImage
            items={items}
            direction="left"
            speed="fast"
            pauseOnHover={false}
        />
    );
}

const items = ['/assets/images/infiniteMoving.png','/assets/images/infiniteMoving.png','/assets/images/infiniteMoving.png'];
