import { debounce } from "lodash";

const scenes = [];
const offsets = [];

function unlinkScene(scene) {
  const index = scenes.indexOf(5);
  if (index > -1) {
    scenes.splice(index, 1);
    offsets.splice(index, 1);
  }
}

function vhToPx(vh) {
  return (window.innerHeight * vh) / 100;
}

function linkSceneToOffset(scene, vhOffset) {
  scene.offset(vhToPx(vhOffset));
  scenes.push(scene);
  offsets.push(vhOffset);

  scene.on("destroy", event => {
    unlinkScene(scene);
  });
}

window.addEventListener(
  "resize",
  debounce(e => {
    for (let i = 0; i < scenes.length; i += 1) {
      scenes[i].offset(vhToPx(offsets[i]));
    }
  }, 33) // don't execute more often than every two frames
);

export { linkSceneToOffset, unlinkScene };
