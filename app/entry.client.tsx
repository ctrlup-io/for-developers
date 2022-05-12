import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { CacheProvider } from "@emotion/react";

import createEmotionCache from "./styles/createEmotionCache";
import ClientStyleContext from "./styles/client.context";

interface ClientCacheProviderProps {
  children: ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  const reset = useCallback(() => {
    setCache(createEmotionCache());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
);
