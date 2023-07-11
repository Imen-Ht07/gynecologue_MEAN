declare module 'cornerstone-tools' {
  const cornerstoneTools: typeof import('cornerstone-tools');
  export default cornerstoneTools;
}

declare module 'cornerstone-math' {
  const cornerstoneMath: typeof import('cornerstone-math');
  export default cornerstoneMath;
}

declare module 'cornerstone-wado-image-loader' {
  const cornerstoneWADOImageLoader: typeof import('cornerstone-wado-image-loader');
  export const configure: (config: any) => void;
  export const external: any;
  export const webWorkerManager: any;
  export const loadAndCacheImage: (imageId: string) => Promise<any>;
  export default cornerstoneWADOImageLoader;
}

