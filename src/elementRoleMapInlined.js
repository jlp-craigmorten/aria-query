/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";

type RoleSet = Array<ARIARoleDefinitionKey>;
type ElementARIARoleRelationTuple = [ARIARoleRelationConcept, RoleSet];
type ElementARIARoleRelations = Array<ElementARIARoleRelationTuple>;

const elementRoles: ElementARIARoleRelations = [
  [{ name: "article" }, ["article"]],
  [{ constraints: ["scoped to the body element"], name: "header" }, ["banner"]],
  [{ name: "blockquote" }, ["blockquote"]],
  [
    { attributes: [{ name: "type", value: "button" }], name: "input" },
    ["button"],
  ],
  [
    { attributes: [{ name: "type", value: "image" }], name: "input" },
    ["button"],
  ],
  [
    { attributes: [{ name: "type", value: "reset" }], name: "input" },
    ["button"],
  ],
  [
    { attributes: [{ name: "type", value: "submit" }], name: "input" },
    ["button"],
  ],
  [{ name: "button" }, ["button"]],
  [{ name: "caption" }, ["caption"]],
  [
    { constraints: ["ancestor table element has table role"], name: "td" },
    ["cell"],
  ],
  [
    { attributes: [{ name: "type", value: "checkbox" }], name: "input" },
    ["checkbox"],
  ],
  [{ name: "code" }, ["code"]],
  [{ name: "th" }, ["columnheader"]],
  [
    { attributes: [{ name: "scope", value: "col" }], name: "th" },
    ["columnheader"],
  ],
  [
    { attributes: [{ name: "scope", value: "colgroup" }], name: "th" },
    ["columnheader"],
  ],
  [
    {
      attributes: [
        { constraints: ["set"], name: "list" },
        { name: "type", value: "email" },
      ],
      name: "input",
    },
    ["combobox"],
  ],
  [
    {
      attributes: [
        { constraints: ["set"], name: "list" },
        { name: "type", value: "search" },
      ],
      name: "input",
    },
    ["combobox"],
  ],
  [
    {
      attributes: [
        { constraints: ["set"], name: "list" },
        { name: "type", value: "tel" },
      ],
      name: "input",
    },
    ["combobox"],
  ],
  [
    {
      attributes: [
        { constraints: ["set"], name: "list" },
        { name: "type", value: "text" },
      ],
      name: "input",
    },
    ["combobox"],
  ],
  [
    {
      attributes: [
        { constraints: ["set"], name: "list" },
        { name: "type", value: "url" },
      ],
      name: "input",
    },
    ["combobox"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "multiple" },
        { constraints: ["undefined"], name: "size" },
      ],
      constraints: [
        "the multiple attribute is not set and the size attribute does not have a value greater than 1",
      ],
      name: "select",
    },
    ["combobox"],
  ],
  [
    {
      constraints: ["scoped to the body element", "scoped to the main element"],
      name: "aside",
    },
    ["complementary"],
  ],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-label" }],
      constraints: [
        "scoped to a sectioning content element",
        "scoped to a sectioning root element other than body",
      ],
      name: "aside",
    },
    ["complementary"],
  ],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
      constraints: [
        "scoped to a sectioning content element",
        "scoped to a sectioning root element other than body",
      ],
      name: "aside",
    },
    ["complementary"],
  ],
  [
    { constraints: ["scoped to the body element"], name: "footer" },
    ["contentinfo"],
  ],
  [{ name: "dd" }, ["definition"]],
  [{ name: "del" }, ["deletion"]],
  [{ name: "dialog" }, ["dialog"]],
  [{ name: "html" }, ["document"]],
  [{ name: "em" }, ["emphasis"]],
  [{ name: "figure" }, ["figure"]],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-label" }],
      name: "form",
    },
    ["form"],
  ],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
      name: "form",
    },
    ["form"],
  ],
  [
    { attributes: [{ constraints: ["set"], name: "name" }], name: "form" },
    ["form"],
  ],
  [{ name: "a" }, ["generic"]],
  [{ name: "area" }, ["generic"]],
  [{ name: "aside" }, ["generic"]],
  [{ name: "b" }, ["generic"]],
  [{ name: "bdo" }, ["generic"]],
  [{ name: "body" }, ["generic"]],
  [{ name: "data" }, ["generic"]],
  [{ name: "div" }, ["generic"]],
  [
    {
      constraints: [
        "scoped to the main element",
        "scoped to a sectioning content element",
        "scoped to a sectioning root element other than body",
      ],
      name: "footer",
    },
    ["generic"],
  ],
  [
    {
      constraints: [
        "scoped to the main element",
        "scoped to a sectioning content element",
        "scoped to a sectioning root element other than body",
      ],
      name: "header",
    },
    ["generic"],
  ],
  [{ name: "hgroup" }, ["generic"]],
  [{ name: "i" }, ["generic"]],
  [{ name: "pre" }, ["generic"]],
  [{ name: "q" }, ["generic"]],
  [{ name: "samp" }, ["generic"]],
  [{ name: "section" }, ["generic"]],
  [{ name: "small" }, ["generic"]],
  [{ name: "span" }, ["generic"]],
  [{ name: "u" }, ["generic"]],
  [
    {
      constraints: [
        "ancestor table element has grid role",
        "ancestor table element has treegrid role",
      ],
      name: "td",
    },
    ["gridcell"],
  ],
  [{ name: "details" }, ["group"]],
  [{ name: "fieldset" }, ["group"]],
  [{ name: "optgroup" }, ["group"]],
  [{ name: "address" }, ["group"]],
  [{ name: "h1" }, ["heading"]],
  [{ name: "h2" }, ["heading"]],
  [{ name: "h3" }, ["heading"]],
  [{ name: "h4" }, ["heading"]],
  [{ name: "h5" }, ["heading"]],
  [{ name: "h6" }, ["heading"]],
  [
    { attributes: [{ constraints: ["set"], name: "alt" }], name: "img" },
    ["img"],
  ],
  [
    { attributes: [{ constraints: ["undefined"], name: "alt" }], name: "img" },
    ["img"],
  ],
  [{ name: "ins" }, ["insertion"]],
  [
    { attributes: [{ constraints: ["set"], name: "href" }], name: "a" },
    ["link"],
  ],
  [
    { attributes: [{ constraints: ["set"], name: "href" }], name: "area" },
    ["link"],
  ],
  [{ name: "menu" }, ["list"]],
  [{ name: "ol" }, ["list"]],
  [{ name: "ul" }, ["list"]],
  [
    {
      attributes: [{ constraints: [">1"], name: "size" }],
      constraints: ["the size attribute value is greater than 1"],
      name: "select",
    },
    ["listbox"],
  ],
  [{ attributes: [{ name: "multiple" }], name: "select" }, ["listbox"]],
  [{ name: "datalist" }, ["listbox"]],
  [
    {
      constraints: [
        "direct descendant of ol",
        "direct descendant of ul",
        "direct descendant of menu",
      ],
      name: "li",
    },
    ["listitem"],
  ],
  [{ name: "main" }, ["main"]],
  [{ name: "mark" }, ["mark"]],
  [{ name: "math" }, ["math"]],
  [{ name: "meter" }, ["meter"]],
  [{ name: "nav" }, ["navigation"]],
  [{ name: "option" }, ["option"]],
  [{ name: "p" }, ["paragraph"]],
  [{ attributes: [{ name: "alt", value: "" }], name: "img" }, ["presentation"]],
  [{ name: "progress" }, ["progressbar"]],
  [
    { attributes: [{ name: "type", value: "radio" }], name: "input" },
    ["radio"],
  ],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-label" }],
      name: "section",
    },
    ["region"],
  ],
  [
    {
      attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
      name: "section",
    },
    ["region"],
  ],
  [{ name: "tr" }, ["row"]],
  [{ name: "tbody" }, ["rowgroup"]],
  [{ name: "tfoot" }, ["rowgroup"]],
  [{ name: "thead" }, ["rowgroup"]],
  [
    { attributes: [{ name: "scope", value: "row" }], name: "th" },
    ["rowheader"],
  ],
  [
    { attributes: [{ name: "scope", value: "rowgroup" }], name: "th" },
    ["rowheader"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "list" },
        { name: "type", value: "search" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["searchbox"],
  ],
  [{ name: "hr" }, ["separator"]],
  [
    { attributes: [{ name: "type", value: "range" }], name: "input" },
    ["slider"],
  ],
  [
    { attributes: [{ name: "type", value: "number" }], name: "input" },
    ["spinbutton"],
  ],
  [{ name: "output" }, ["status"]],
  [{ name: "strong" }, ["strong"]],
  [{ name: "sub" }, ["subscript"]],
  [{ name: "sup" }, ["superscript"]],
  [{ name: "table" }, ["table"]],
  [{ name: "dfn" }, ["term"]],
  [{ name: "dt" }, ["term"]],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "type" },
        { constraints: ["undefined"], name: "list" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["textbox"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "list" },
        { name: "type", value: "email" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["textbox"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "list" },
        { name: "type", value: "tel" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["textbox"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "list" },
        { name: "type", value: "text" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["textbox"],
  ],
  [
    {
      attributes: [
        { constraints: ["undefined"], name: "list" },
        { name: "type", value: "url" },
      ],
      constraints: ["the list attribute is not set"],
      name: "input",
    },
    ["textbox"],
  ],
  [{ name: "textarea" }, ["textbox"]],
  [{ name: "time" }, ["time"]],
];

const elementRoleMap: TAriaQueryMap<
  ElementARIARoleRelations,
  ARIARoleRelationConcept,
  RoleSet
> = {
  entries: function (): ElementARIARoleRelations {
    return elementRoles;
  },
  forEach: function (
    fn: (RoleSet, ARIARoleRelationConcept, ElementARIARoleRelations) => void,
    thisArg: any = null
  ): void {
    for (let [key, values] of elementRoles) {
      fn.call(thisArg, values, key, elementRoles);
    }
  },
  get: function (key: ARIARoleRelationConcept): ?RoleSet {
    const item = elementRoles.find(
      (tuple) =>
        key.name === tuple[0].name &&
        ariaRoleRelationConceptAttributeEquals(
          key.attributes,
          tuple[0].attributes
        )
    );
    return item && item[1];
  },
  has: function (key: ARIARoleRelationConcept): boolean {
    return !!elementRoleMap.get(key);
  },
  keys: function (): Array<ARIARoleRelationConcept> {
    return elementRoles.map(([key]) => key);
  },
  values: function (): Array<RoleSet> {
    return elementRoles.map(([, values]) => values);
  },
};

function ariaRoleRelationConceptAttributeEquals(
  a?: Array<ARIARoleRelationConceptAttribute>,
  b?: Array<ARIARoleRelationConceptAttribute>
): boolean {
  if (a === undefined && b !== undefined) {
    return false;
  }

  if (a !== undefined && b === undefined) {
    return false;
  }

  if (a !== undefined && b !== undefined) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i].name !== b[i].name || a[i].value !== b[i].value) {
        return false;
      }

      if (a[i].constraints === undefined && b[i].constraints !== undefined) {
        return false;
      }

      if (a[i].constraints !== undefined && b[i].constraints === undefined) {
        return false;
      }

      if (a[i].constraints !== undefined && b[i].constraints !== undefined) {
        if (a[i].constraints.length !== b[i].constraints.length) {
          return false;
        }

        for (let j = 0; j < a[i].constraints.length; j++) {
          if (a[i].constraints[j] !== b[i].constraints[j]) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

export default (iterationDecorator(
  elementRoleMap,
  elementRoleMap.entries()
): TAriaQueryMap<ElementARIARoleRelations, ARIARoleRelationConcept, RoleSet>);
