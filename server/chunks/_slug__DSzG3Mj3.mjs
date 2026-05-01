globalThis.process ??= {};
globalThis.process.env ??= {};
import "./page-ssr_DoeYdN5E.mjs";
import { c as createComponent } from "./astro-component_C8BU5KYa.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, u as unescapeHTML } from "./worker-entry_D4Rxi1Wr.mjs";
import { $ as $$MainLayout } from "./MainLayout_lnYWzVbu.mjs";
import { s as sanityClient, P as POST_BY_SLUG_QUERY } from "./client_B8G2Cn7o.mjs";
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text == "string" && (typeof node.marks > "u" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
function isPortableTextBlock(node) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type == "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def) => typeof def._key == "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child) => typeof child == "object" && "_type" in child)
  );
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (typeof block.level > "u" || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
const knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) return [];
  if (!span.marks.length) return [];
  const marks = span.marks.slice(), occurences = {};
  return marks.forEach((mark) => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
      else break;
    }
  }), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA], bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) return bOccurences - aOccurences;
  const aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
  return aKnownPos !== bKnownPos ? aKnownPos - bKnownPos : markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a, _b;
  const {
    children
  } = block, markDefs = (_a = block.markDefs) != null ? _a : [];
  if (!children || !children.length) return [];
  const sortedMarks = children.map(sortMarksByOccurences), rootNode = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) continue;
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) for (pos; pos < nodeStack.length; pos++) {
      const mark = ((_b = nodeStack[pos]) == null ? void 0 : _b.markKey) || "", index = marksNeeded.indexOf(mark);
      if (index === -1) break;
      marksNeeded.splice(index, 1);
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (currentNode) {
      for (const markKey of marksNeeded) {
        const markDef = markDefs == null ? void 0 : markDefs.find((def) => def._key === markKey), markType = markDef ? markDef._type : markKey, node = {
          _type: "@span",
          _key: span._key,
          children: [],
          markDef,
          markType,
          markKey
        };
        currentNode.children.push(node), nodeStack.push(node), currentNode = node;
      }
      if (isPortableTextSpan(span)) {
        const lines = span.text.split(`
`);
        for (let line = lines.length; line-- > 1; ) lines.splice(line, 0, `
`);
        currentNode.children = currentNode.children.concat(lines.map((text) => ({
          _type: "@text",
          text
        })));
      } else currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block) {
      if (!isPortableTextListItemBlock(block)) {
        tree.push(block), currentList = void 0;
        continue;
      }
      if (!currentList) {
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (blockMatchesList(block, currentList)) {
        currentList.children.push(block);
        continue;
      }
      if ((block.level || 1) > currentList.level) {
        const newList = listFromBlock(block, i, mode);
        {
          const lastListItem = currentList.children[currentList.children.length - 1], newLastChild = _objectSpread$1(_objectSpread$1({}, lastListItem), {}, {
            children: [...lastListItem.children, newList]
          });
          currentList.children[currentList.children.length - 1] = newLastChild;
        }
        currentList = newList;
        continue;
      }
      if ((block.level || 1) < currentList.level) {
        const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
        if (match) {
          currentList = match, currentList.children.push(block);
          continue;
        }
        currentList = listFromBlock(block, i, mode), tree.push(currentList);
        continue;
      }
      if (block.listItem !== currentList.listItem) {
        const matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, {
          level: block.level || 1
        });
        if (match && match.listItem === block.listItem) {
          currentList = match, currentList.children.push(block);
          continue;
        } else {
          currentList = listFromBlock(block, i, mode), tree.push(currentList);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", block), tree.push(block);
    }
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: `${block._key || `${index}`}-parent`,
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
  if (!("children" in rootNode)) return;
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  return span.children.forEach((current) => {
    isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
  }), text;
}
const _excluded = ["block", "list", "listItem", "marks", "types"], _excluded2 = ["listItem"], _excluded3 = ["_key"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
const allowedProtocols = ["http", "https", "mailto", "tel"], charMap = {
  "&": "amp",
  "<": "lt",
  ">": "gt",
  '"': "quot",
  "'": "#x27"
};
function escapeHTML(str) {
  return replaceMultipleSpaces(str.replace(/[&<>"']/g, (s) => `&${charMap[s]};`));
}
function replaceMultipleSpaces(str) {
  return str.replace(/ {2,}/g, (match) => `${"&nbsp;".repeat(match.length - 1)} `);
}
function uriLooksSafe(uri) {
  const url = (uri || "").trim(), first = url.charAt(0);
  if (first === "#" || first === "/") return true;
  const colonIndex = url.indexOf(":");
  if (colonIndex === -1) return true;
  const proto = url.slice(0, colonIndex).toLowerCase();
  if (allowedProtocols.indexOf(proto) !== -1) return true;
  const queryIndex = url.indexOf("?");
  if (queryIndex !== -1 && colonIndex > queryIndex) return true;
  const hashIndex = url.indexOf("#");
  return hashIndex !== -1 && colonIndex > hashIndex;
}
const defaultLists = {
  number: ({
    children
  }) => `<ol>${children}</ol>`,
  bullet: ({
    children
  }) => `<ul>${children}</ul>`
}, DefaultListItem = ({
  children
}) => `<li>${children}</li>`, link = ({
  children,
  value
}) => {
  const href = (value == null ? void 0 : value.href) || "";
  return uriLooksSafe(href) ? `<a href="${escapeHTML(href)}">${children}</a>` : children;
}, defaultMarks = {
  em: ({
    children
  }) => `<em>${children}</em>`,
  strong: ({
    children
  }) => `<strong>${children}</strong>`,
  code: ({
    children
  }) => `<code>${children}</code>`,
  underline: ({
    children
  }) => `<span style="text-decoration:underline">${children}</span>`,
  "strike-through": ({
    children
  }) => `<del>${children}</del>`,
  link
}, getTemplate = (type, prop) => `Unknown ${type}, specify a component for it in the \`components.${prop}\` option`, unknownTypeWarning = (typeName) => getTemplate(`block type "${typeName}"`, "types"), unknownMarkWarning = (markType) => getTemplate(`mark type "${markType}"`, "marks"), unknownBlockStyleWarning = (blockStyle) => getTemplate(`block style "${blockStyle}"`, "block"), unknownListStyleWarning = (listStyle) => getTemplate(`list style "${listStyle}"`, "list"), unknownListItemStyleWarning = (listStyle) => getTemplate(`list item style "${listStyle}"`, "listItem");
function printWarning(message) {
  console.warn(message);
}
const DefaultUnknownType = ({
  value,
  isInline
}) => {
  const warning = unknownTypeWarning(value._type);
  return isInline ? `<span style="display:none">${warning}</span>` : `<div style="display:none">${warning}</div>`;
}, DefaultUnknownMark = ({
  markType,
  children
}) => `<span class="unknown__pt__mark__${markType}">${children}</span>`, DefaultUnknownBlockStyle = ({
  children
}) => `<p>${children}</p>`, DefaultUnknownList = ({
  children
}) => `<ul>${children}</ul>`, DefaultUnknownListItem = ({
  children
}) => `<li>${children}</li>`, DefaultHardBreak = () => "<br/>", defaultPortableTextBlockStyles = {
  normal: ({
    children
  }) => `<p>${children}</p>`,
  blockquote: ({
    children
  }) => `<blockquote>${children}</blockquote>`,
  h1: ({
    children
  }) => `<h1>${children}</h1>`,
  h2: ({
    children
  }) => `<h2>${children}</h2>`,
  h3: ({
    children
  }) => `<h3>${children}</h3>`,
  h4: ({
    children
  }) => `<h4>${children}</h4>`,
  h5: ({
    children
  }) => `<h5>${children}</h5>`,
  h6: ({
    children
  }) => `<h6>${children}</h6>`
}, defaultComponents = {
  types: {},
  block: defaultPortableTextBlockStyles,
  marks: defaultMarks,
  list: defaultLists,
  listItem: DefaultListItem,
  hardBreak: DefaultHardBreak,
  escapeHTML,
  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle
};
function mergeComponents(parent, overrides) {
  const {
    block,
    list,
    listItem,
    marks,
    types
  } = overrides, rest = _objectWithoutProperties(overrides, _excluded);
  return _objectSpread(_objectSpread({}, parent), {}, {
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types")
  }, rest);
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key], parentVal = parent[key];
  return typeof override == "function" || override && typeof parentVal == "function" ? override : override ? _objectSpread(_objectSpread({}, parentVal), override) : parentVal;
}
function toHTML(value, options = {}) {
  const {
    components: componentOverrides,
    onMissingComponent: missingComponentHandler = printWarning
  } = options, handleMissingComponent = missingComponentHandler || noop, blocks = Array.isArray(value) ? value : [value], nested = nestLists(blocks, "html"), components = componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents, renderNode = getNodeRenderer(components, handleMissingComponent);
  return nested.map((node, index) => renderNode({
    node,
    index,
    isInline: false,
    renderNode
  })).join("");
}
const getNodeRenderer = (components, handleMissingComponent) => {
  function renderNode(options) {
    const {
      node,
      index,
      isInline
    } = options;
    return isPortableTextToolkitList(node) ? renderList(node, index) : isPortableTextListItemBlock(node) ? renderListItem(node, index) : isPortableTextToolkitSpan(node) ? renderSpan(node) : isPortableTextBlock(node) ? renderBlock(node, index, isInline) : isPortableTextToolkitTextNode(node) ? renderText(node) : renderCustomBlock(node, index, isInline);
  }
  function renderListItem(node, index) {
    const tree = serializeBlock({
      node,
      index,
      isInline: false,
      renderNode
    }), renderer = components.listItem, itemHandler = (typeof renderer == "function" ? renderer : renderer[node.listItem]) || components.unknownListItem;
    if (itemHandler === components.unknownListItem) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListItemStyleWarning(style), {
        type: style,
        nodeType: "listItemStyle"
      });
    }
    let children = tree.children;
    if (node.style && node.style !== "normal") {
      const {
        listItem
      } = node, blockNode = _objectWithoutProperties(node, _excluded2);
      children = renderNode({
        node: blockNode,
        index,
        isInline: false
      });
    }
    return itemHandler({
      value: node,
      index,
      isInline: false,
      renderNode,
      children
    });
  }
  function renderList(node, index) {
    const children = node.children.map((child, childIndex) => renderNode({
      node: child._key ? child : _objectSpread(_objectSpread({}, child), {}, {
        _key: `li-${index}-${childIndex}`
      }),
      index: childIndex,
      isInline: false
    })), component = components.list, list = (typeof component == "function" ? component : component[node.listItem]) || components.unknownList;
    if (list === components.unknownList) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListStyleWarning(style), {
        nodeType: "listStyle",
        type: style
      });
    }
    return list({
      value: node,
      index,
      isInline: false,
      renderNode,
      children: children.join("")
    });
  }
  function renderSpan(node) {
    const {
      markDef,
      markType,
      markKey
    } = node, span = components.marks[markType] || components.unknownMark, children = node.children.map((child, childIndex) => renderNode({
      node: child,
      index: childIndex,
      isInline: true
    }));
    return span === components.unknownMark && handleMissingComponent(unknownMarkWarning(markType), {
      nodeType: "mark",
      type: markType
    }), span({
      text: spanToPlainText(node),
      value: markDef,
      markType,
      markKey,
      renderNode,
      children: children.join("")
    });
  }
  function renderBlock(node, index, isInline) {
    const _serializeBlock = serializeBlock({
      node,
      index,
      isInline,
      renderNode
    }), {
      _key
    } = _serializeBlock, props = _objectWithoutProperties(_serializeBlock, _excluded3), style = props.node.style || "normal", block = (typeof components.block == "function" ? components.block : components.block[style]) || components.unknownBlockStyle;
    return block === components.unknownBlockStyle && handleMissingComponent(unknownBlockStyleWarning(style), {
      nodeType: "blockStyle",
      type: style
    }), block(_objectSpread(_objectSpread({}, props), {}, {
      value: props.node,
      renderNode
    }));
  }
  function renderText(node) {
    if (node.text === `
`) {
      const hardBreak = components.hardBreak;
      return hardBreak ? hardBreak() : `
`;
    }
    return components.escapeHTML(node.text);
  }
  function renderCustomBlock(value, index, isInline) {
    const node = components.types[value._type];
    return node || handleMissingComponent(unknownTypeWarning(value._type), {
      nodeType: "block",
      type: value._type
    }), (node || components.unknownType)({
      value,
      isInline,
      index,
      renderNode
    });
  }
  return renderNode;
};
function serializeBlock(options) {
  const {
    node,
    index,
    isInline,
    renderNode
  } = options, children = buildMarksTree(node).map((child, i) => renderNode({
    node: child,
    isInline: true,
    index: i,
    renderNode
  }));
  return {
    _key: node._key || `block-${index}`,
    children: children.join(""),
    index,
    isInline,
    node
  };
}
function noop() {
}
async function getStaticPaths() {
  const posts = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{ slug }`
  );
  return posts.map((p) => ({ params: { slug: p.slug.current } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) {
    return Astro2.redirect("/blog");
  }
  const bodyHtml = post.body ? toHTML(post.body) : "";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle ?? post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Restoration AI"
    },
    publisher: {
      "@type": "Organization",
      name: "Restoration AI",
      logo: {
        "@type": "ImageObject",
        url: "https://restorationai.io/favicon.svg"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://restorationai.io/blog/${post.slug.current}`
    }
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${post.seoTitle ?? post.title} | Restoration AI`, "description": post.seoDescription ?? "", "jsonLd": articleJsonLd }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="py-32 bg-white"> <div class="container-pill max-w-3xl"> ${post.publishedAt && renderTemplate`<p class="text-sm text-slate-400 mb-4"> ${new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p>`} <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"> ${post.title} </h1> ${post.seoDescription && renderTemplate`<p class="text-xl text-slate-500 mb-10 leading-relaxed">${post.seoDescription}</p>`} ${post.loomVideoUrl && renderTemplate`<div class="aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-slate-200"> <iframe${addAttribute(post.loomVideoUrl, "src")} class="w-full h-full" frameborder="0" allowfullscreen></iframe> </div>`} <div class="prose prose-slate max-w-none">${unescapeHTML(bodyHtml)}</div> <div class="mt-16 pt-8 border-t border-slate-200"> <a href="/blog" class="text-[#3dd0ff] font-medium hover:underline">← Back to all posts</a> </div> </div> </article> ` })}`;
}, "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/blog/[slug].astro", void 0);
const $$file = "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
