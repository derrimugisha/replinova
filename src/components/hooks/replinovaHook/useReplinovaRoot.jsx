import { useEffect, useState } from "react";

const useReplinovaRoot = (swDir, scopeDir) => {
  const [SW, setSW] = useState(null);
  useEffect(() => {
    // acitivating a service worker

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(swDir, {
          scope: scopeDir,
        })
        .then((registration) => {
          setSW(
            registration.installing ||
              registration.waiting ||
              registration.active
          );
          console.log("service worker registered");
        });

      // See if the page is currently has a service worker.

      if (navigator.serviceWorker.controller) {
        console.log("we have a service worker installed");
      }

      // Register a handler to detect when a new or
      // updated service worker is installed & activate.

      navigator.serviceWorker.oncontrollerchange = (ev) => {
        console.log("New service worker activated");
      };
    }
  }, []);
  return {};
};

export default useReplinovaRoot;
