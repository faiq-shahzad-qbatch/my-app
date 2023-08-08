import React, { lazy, Suspense } from "react";

function simulateDelay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

function simulateDelay2(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const ComponentToLoad = lazy(() => simulateDelay(import("./ComponentToLoad")));
const ComponentToLoad2 = lazy(() =>
  simulateDelay2(import("./ComponentToLoad")),
);

function LazyLoadingWithSuspense() {
  return (
    <>
      <h1>Lazy Loading With Suspense Example</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ComponentToLoad />
        <ComponentToLoad2 />
      </Suspense>
    </>
  );
}

export default LazyLoadingWithSuspense;
