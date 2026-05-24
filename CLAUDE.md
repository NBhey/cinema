# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server (CRA + Craco)
npm run build    # Production build
npm test         # Run test suite
```

There is no separate lint script — ESLint config is embedded in `package.json` under `eslintConfig`, extending `react-app`.

Prettier is configured in `.prettierrc` (single quotes, 2-space indent, 80-char width, trailing commas).

## Environment

Copy `.env.example` to `.env` and fill in:
- `REACT_APP_API_BASE_URL` — backend base URL (required, throws at runtime if missing)
- `REACT_APP_AUTH_LOGIN` / `REACT_APP_AUTH_PASSWORD` — admin credentials

## Architecture

This is a cinema ticket booking app following **Feature-Sliced Design (FSD)**. Layers from bottom to top:

```
shared/     → reusable utilities, UI primitives, HTTP client, global state
entities/   → business models (film, hall)
widgets/    → composite UI (Header, FilmList, Booking)
features/   → user flows (SelectSeatsStep, ConfirmStep, HallManagement, etc.)
pages/      → route-level components (MainPage, AdministrationPage, Authorization)
app/        → global styles
```

Imports must only go **downward** (pages → features → widgets → entities → shared).

### State Management

Custom Context + Reducer in `src/shared/model/app-context/`. The single `UPDATE_ALL_STATE` action replaces the entire state slice. Access via the `useData()` hook. On mount, `getAllData()` is called to hydrate films, halls, and seances from the API.

There is no Redux or Zustand.

### HTTP / API

`src/shared/api/http.ts` — Axios instance with a response interceptor that auto-converts `snake_case` keys to `camelCase` via `camelcase-keys`. Generic helpers: `get<T>`, `post<T>`, `delete`. All API functions are defined in the same file.

### Routing

HashRouter (React Router v7). Route tree:

```
/                         MainPage (film list + date picker)
/:date                    MainPage filtered by date
  /halls/:hallName/seances/:seanceId
    /                     SelectSeatsStep
    /confirm              ConfirmStep (→ /:ticket for QR)
/login                    Authorization
/admin                    Administration panel
```

Layout components (`MainPageLayout`, `BookingLayout`, `AdministrationLayout`) wrap nested routes for shared chrome/guards.

### Path Alias

`@/` maps to `src/` (configured in both `tsconfig.json` and `craco.config.js`). Always use `@/` for imports from `src/`.

### Key Conventions

- Features export via `index.ts` barrel files.
- Form handling uses React Hook Form.
- Admin drag-and-drop uses `@dnd-kit/react`.
- Notifications use React Toastify.
- `clsx` for conditional classNames.
- Headless UI primitives from Radix UI.
