// short querySelector: $('.foo') $('.child', context_node)
export const $ = (query, context = document) => 
  context.querySelector(query)

// shorthand querySelectorAll: $$('.foo') $$('.child', context_node)
export const $$ = (query, context = document) => 
  context.querySelectorAll(query)

// set multiple attributes on a node
export const setAttributes = (el, attrs) =>
  Object.keys(attrs).forEach(key => 
    el.setAttribute(key, attrs[key]))
