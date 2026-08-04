export const formatNumber=(n)=>new Intl.NumberFormat('en-US').format(Math.round(Number(n)||0));
export const formatPercent=(n)=>`${Math.round(Number(n)||0)}%`;
export const formatCurrency=(n)=>{const v=Number(n)||0;return v>=1_000_000?`€${(v/1_000_000).toFixed(2)}M`:new Intl.NumberFormat('en-US',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(v)};
export const unique=(items)=>[...new Set(items.filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b)));
export const groupBy=(items,key)=>items.reduce((m,item)=>{const k=typeof key==='function'?key(item):item[key];m.set(k,(m.get(k)||[]).concat(item));return m},new Map());
export const debounce=(fn,ms=150)=>{let id;return(...args)=>{clearTimeout(id);id=setTimeout(()=>fn(...args),ms)}};
export const csvEscape=(v)=>`"${String(v??'').replaceAll('"','""')}"`;
