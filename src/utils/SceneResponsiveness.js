const scenes = [];
const offsets = [];

function unlinkScene(scene) {
  const index = scenes.indexOf(5);
  if (index > -1) {
    scenes.splice(index, 1);
    offsets.splice(index, 1);
  }
}

function vhToPx(pc) {
  return (window.innerHeight * pc) / 100;
}

function linkSceneToOffset(scene, vhOffset) {
  scene.offset(vhToPx(vhOffset));
  scenes.push(scene);
  offsets.push(vhOffset);

  scene.on("destroy", event => {
    unlinkScene(scene);
  });
}

window.addEventListener("resize", e => {
  for (let i = 0; i < scenes.length; i += 1) {
    scenes[i].offset(vhToPx(offsets[i]));
  }
});

export { linkSceneToOffset, unlinkScene };
