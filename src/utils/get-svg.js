import { TimelineLite } from "gsap";

function getPath(parentId, childId, variant) {
  return document
    .querySelector(`#${parentId} #${childId}_${variant}`)
    .getAttribute("d");
}

function getVariantPaths(parentId, childId, variant1, variant2) {
  return [
    getPath(parentId, childId, variant1),
    getPath(parentId, childId, variant2),
  ];
}

function getAllPaths(parentId, childIds, variant1, variant2) {
  const results = [];
  for (let i = 0; i < childIds.length; i += 1) {
    results.push(getVariantPaths(parentId, childIds[i], variant1, variant2));
  }
  return results;
}

function getStickmanTimeline(stickmanId, duration, variant1, variant2) {
  const limbs = ["legs", "arms", "head", "trunk"];
  const paths = getAllPaths("stickman\\.inline", limbs, variant1, variant2);
  const tl = new TimelineLite();
  for (let i = 0; i < limbs.length; i += 1) {
    tl.fromTo(
      `#${stickmanId} #${limbs[i]}`,
      duration,
      { attr: { d: paths[i][0] } },
      { attr: { d: paths[i][1] } },
      0
    );
  }
  return tl;
}

export { getStickmanTimeline, getAllPaths, getVariantPaths, getPath };
