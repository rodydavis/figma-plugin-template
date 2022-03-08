import { pluginWidth, pluginHeight } from "../src/constants";

figma.showUI(__html__, {
  width: pluginWidth,
  height: pluginHeight,
});

figma.ui.onmessage = async (msg) => {
  const { type, ...rest } = msg;
  console.log(msg, rest);
};
