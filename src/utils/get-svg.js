import { TimelineLite, Back } from "gsap";

/*
Animating the SVG stickman was quite hard because:
- GSAP SVGMorphPlugin is paid-only and was buggy with my files anyway.
  -> Use the built-in path morph
- IDs have to persist.
  -> Set unique names in Figma
  -> Disable the svgo cleanupIDs plugin
- Shapes aren't paths and :
  -> svgo's convertShapeToPath doesn't seem to work
  -> flatten everything in Figma
- GSAP doesn't support inconstiencies between SVG path commands
  -> The Figma design mustn't include vertical lines
  -> svgo's convertPathData plugin must be disabled.
*/

/**
 * Find an path string in the DOM with my name structure.
 */
function getPath(parentId, childId, variant) {
  return document
    .querySelector(`#${parentId} #${childId}_${variant}`)
    .getAttribute("d");
}

/**
 * @returns {Array} Something like ["variant1 svg path string", "variant1 svg path string"]
 */
function getVariantPaths(parentId, childId, variant1, variant2) {
  return [
    getPath(parentId, childId, variant1),
    getPath(parentId, childId, variant2),
  ];
}

/**
 * @returns {Array} An array of the same length than childIds, something like:
 *    0: ["first child - variant1 svg path string", "variant1 svg path string"]
 *    1: ["second child - variant1 svg path string", "..."]
 *    2: ["...", "..."]
 *    3: ["...", "..."]
 */
function getAllPaths(parentId, childIds, variant1, variant2) {
  const results = [];
  for (let i = 0; i < childIds.length; i += 1) {
    results.push(getVariantPaths(parentId, childIds[i], variant1, variant2));
  }
  return results;
}

/**
 * @returns {TimelineLite} A GSAP timeline configured with the animation and
 *    the given parameters.
 */
function getStickmanTimeline(stickmanId, duration, easing, variant1, variant2) {
  const limbs = ["legs", "arms", "head", "trunk"];
  const paths = getAllPaths("stickman\\.inline", limbs, variant1, variant2);
  const tl = new TimelineLite();
  for (let i = 0; i < limbs.length; i += 1) {
    tl.fromTo(
      `#${stickmanId} #${limbs[i]}`,
      duration,
      { attr: { d: paths[i][0] } },
      { attr: { d: paths[i][1] }, ease: easing },
      0
    );
  }
  return tl;
}

export { getStickmanTimeline, getAllPaths, getVariantPaths, getPath };
