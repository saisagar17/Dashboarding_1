# Digitalization Sprint-1 Dashboard

An executive, dark-mode portfolio dashboard for digitalization ideas across engineering teams. The application follows the principle **Overview First → Interactive Exploration → Details On Demand** and is implemented with HTML5, CSS3, Vanilla JavaScript modules, Apache ECharts, and SheetJS.

## Setup

1. Serve the repository with any static web server.
2. Place the workbook at `data/Copy of Digitalization_SPRINT_1_ideas.xlsx`.
3. Open `index.html` in a modern browser.

> The dashboard includes a small fallback dataset so the UI remains reviewable when the workbook or the `Full_Data` sheet is unavailable.

## Architecture

```text
Excel (.xlsx) → SheetJS Loader → Data Validation → Data Normalization
→ Statistics Engine → Filter Engine → Chart Manager → UI Components
→ Interactive Dashboard
```

## Folder Structure

```text
index.html
css/variables.css      Design tokens
css/layout.css         Page grid and responsive shell
css/components.css     Cards, controls, states, modal, footer
css/responsive.css     Breakpoint rules
css/style.css          Global finishing styles
js/app.js              Application orchestration
js/config.js           Runtime configuration
js/constants.js        Data and chart constants
js/dataService.js      Excel loading, validation, normalization
js/statsEngine.js      KPI and distribution calculations
js/filterEngine.js     Reusable AND filtering
js/searchEngine.js     Ranked, highlighted search
js/chartManager.js     ECharts lifecycle and updates
js/uiManager.js        DOM rendering, drilldowns, export, modals
js/helpers.js          Shared utility functions
```

## Module Responsibilities

- **DataService** loads the workbook, selects the `Full_Data` sheet when present, maps flexible column aliases, cleans strings, coerces numbers, and returns normalized idea objects.
- **StatsEngine** recalculates portfolio KPIs, status distribution, technology distribution, idea type distribution, PMTE distribution, and team statistics from the active data slice.
- **FilterEngine** applies team, status, idea type, and search filters with AND semantics.
- **SearchEngine** performs case-insensitive partial search across topic, owner, team, technology, and remarks, returning ranked results and HTML highlights.
- **ChartManager** owns chart initialization, option updates, click handlers, resize handling, and chart disposal.
- **UIManager** renders KPI cards, filter options, team drilldown panels, floating search results, CSV export, and modal tables.
- **DashboardApp** coordinates data loading, state changes, filtering, statistics, charts, and UI updates.

## Development Workflow

The implementation is structured for incremental delivery:

1. Data loading and normalization
2. Validation and fallback handling
3. Dynamic statistics
4. KPI strip
5. Reusable filters
6. ECharts visualizations
7. Drilldowns and details on demand
8. Search and CSV export
9. Responsive polish and performance review

## Notes

The repository includes placeholder local library files for the locked project structure. The page loads ECharts and SheetJS from CDN first; replace `js/echarts.min.js` and `js/xlsx.full.min.js` with vendored production builds for fully offline deployments.
