import{SearchEngine}from'./searchEngine.js';
export class FilterEngine{constructor(){this.searchEngine=new SearchEngine()}apply(ideas,filters){const searched=this.searchEngine.search(ideas,filters.search||'').map(r=>r.item);return searched.filter(i=>(!filters.team||i.team===filters.team)&&(!filters.status||i.status===filters.status)&&(!filters.ideaType||i.ideaType===filters.ideaType))}}
