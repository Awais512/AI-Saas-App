"use client";
import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("780f14e8-1314-4f34-a9aa-31f116373b3d");
  }, []);
  return null;
};
