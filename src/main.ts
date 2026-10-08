import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// After a reload the page starts at the hero: a fragment like #projects is removed from the URL
// before the router reads it. Opening a link with a fragment for the first time still works.
function removeFragmentOnReload(): void {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  if (navigation?.type === 'reload' && location.hash) {
    history.replaceState(history.state, '', location.pathname + location.search);
  }
}

removeFragmentOnReload();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
