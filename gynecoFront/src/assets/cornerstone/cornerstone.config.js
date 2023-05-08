import cornerstone from 'cornerstone-core';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

// Configure CornerstoneWADOImageLoader
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.cornerstoneMath = cornerstoneMath;

// Configure CornerstoneTools
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;

// Configure CornerstoneTools
cornerstoneTools.init({
  mouseEnabled: true,
  touchEnabled: true,
  globalToolSyncEnabled: false,
  showSVGCursors: false,
});

// Enable cornerstone on the specified element
const enableCornerstoneOnElement = (element) => {
  cornerstone.enable(element);

  // If you need to adjust the viewport of the enabled element, you can do it like this:
  // cornerstone.fitToWindow(element);
};

// Add a tool to cornerstoneTools for ALL enabled elements
const addToolToAllEnabledElements = (tool) => {
  cornerstone.getEnabledElements().forEach((enabledElement) => {
    cornerstoneTools.addTool(tool, enabledElement);
  });
};

// Add a tool to cornerstoneTools for a specific enabled element
const addToolForElement = (element, tool) => {
  cornerstoneTools.addToolForElement(element, tool);
};

// Remove a tool from cornerstoneTools for ALL enabled elements
const removeToolFromAllEnabledElements = (tool) => {
  cornerstone.getEnabledElements().forEach((enabledElement) => {
    cornerstoneTools.removeTool(tool, enabledElement);
  });
};

// Remove a tool from cornerstoneTools for a specific enabled element
const removeToolForElement = (element, tool) => {
  cornerstoneTools.removeToolForElement(element, tool);
};

export {
  cornerstone,
  cornerstoneMath,
  cornerstoneTools,
  cornerstoneWADOImageLoader,
  enableCornerstoneOnElement,
  addToolToAllEnabledElements,
  addToolForElement,
  removeToolFromAllEnabledElements,
  removeToolForElement,
};
