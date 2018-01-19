export const $ = (query, context = document) => context.querySelector(query)
export const $$ = (query, context = document) => context.querySelectorAll(query)
