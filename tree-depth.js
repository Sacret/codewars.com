/**
 * Write a method that takes a nested hash (object in javascript) as input and returns that hash with added "depth" keys. So, for example, the following input:
 *
 * { a: 1, b: 2, c: { d: { e: 3 } } }
 * would yield the following return value:
 * 
 * { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
 * For Ruby, if the input is not a hash, then the function should return nil. For JavaScript, if the input is not an object (including an  * array), the function should return null.
 */

const isObject = elem => typeof elem === 'object' && elem !== null && elem.constructor !== Array;

const recordDepth = (tree, depth = 0) => {
  if (!isObject(tree)) {
    return null;
  }

  for (prop in tree) {
    if (isObject(tree[prop])) {
      recordDepth(tree[prop], depth + 1);
    }
  }
  tree.depth = depth;

  return tree;
}
