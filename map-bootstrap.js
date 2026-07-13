(() => {
  const sources = [
    'https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js',
    'https://cdn.jsdelivr.net/npm/maplibre-gl@5.24.0/dist/maplibre-gl.js'
  ];
  let index = 0, started = false;
  const startApp = () => { if(started) return; started = true; const app = document.createElement('script'); app.src = 'app.js'; document.body.append(app); };
  const loadRenderer = () => {
    if (index >= sources.length) return startApp();
    const script = document.createElement('script');
    script.src = sources[index++];
    const timeout = setTimeout(() => { script.remove(); loadRenderer(); }, 6000);
    script.onload = () => { clearTimeout(timeout); startApp(); };
    script.onerror = () => { clearTimeout(timeout); script.remove(); loadRenderer(); };
    document.head.append(script);
  };
  loadRenderer();
})();
