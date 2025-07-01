import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { imgs } from "../data";
import { Modal } from "./Modal";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
