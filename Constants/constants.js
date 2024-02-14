"use client"
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useScreens = () => {
  const screens = useBreakpoint();
  return screens;
};
