const xmaseve = window['christmas-eve-eve']

const now = luxon.DateTime.local();
let xmas = now.set({month:12, day:25})
if(xmas<now)xmas=xmas.set({year:xmas.year+1})

const days = Math.floor(xmas.diff(now, 'days').toObject().days)
xmaseve.innerText = `Today is Christmas${Array(days).fill(' Eve').join('')}!`.toUpperCase()
//xmaseve.setAttribute("alt", `(That's ${days} days until Christmas)`);
window['how-many-days'].innerText = `(That's ${days} days until Christmas)`.toUpperCase()