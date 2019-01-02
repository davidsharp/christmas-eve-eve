//console.log(window['christmas-eve-eve'])

const xmaseve = window['christmas-eve-eve']

const now = luxon.DateTime.local();
let xmas = now.set({month:12, day:25})
if(xmas<now)xmas=xmas.set({year:xmas.year+1})