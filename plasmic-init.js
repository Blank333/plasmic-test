import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
// import ThreeJS from "./components/Threejs";
// import Scene from "./components/Scene";
import TopButton from "./components/TopButton";
import TabletViewer from "./components/TabletViewer";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8ezVBUfhxTZRVwYwN3N5yL",
      token: "aH6WLelLLNVA6YCWJpRaXvpA30ZT3SItLjiKRPd0rBrkGNwqLhZ4TDbGdm4gKovOU6TIkWBjwyfLSKiHWyB4jQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(ThreeJS, {
//   name: "Threejs",
//   props: {
//     numStars: {
//       type: "number",
//       defaultValueHint: 50,
//     },
//     starSize: {
//       type: "number",
//       defaultValueHint: 0.2,
//     },
//     bgLightness: {
//       type: "number",
//       defaultValueHint: 0.06,
//     },
//     forcePreview: "boolean",
//   },
// });
// PLASMIC.registerComponent(Scene, {
//   name: "Scene",
//   props: {
//     rotationX: {
//       type: "number",
//       defaultValueHint: 0.01,
//     },
//     rotationY: {
//       type: "number",
//       defaultValueHint: 0.01,
//     },
//   },
// });

PLASMIC.registerComponent(TopButton, {
  name: "Top Button",
  props: {},
});

PLASMIC.registerComponent(TabletViewer, {
  name: "TabletViewer",
  props: {
    positionX: {
      type: "number",
      defaultValueHint: 0,
    },
    positionY: {
      type: "number",
      defaultValueHint: 0,
    },
    cameraPosition: {
      type: "number",
      defaultValueHint: 5,
    },
    rotationSpeed: {
      type: "number",
      defaultValueHint: 0.01,
    },
    size: {
      type: "number",
      defaultValueHint: 1,
    },
    animDuration: {
      type: "number",
      defaultValueHint: 1,
    },
  },
});
