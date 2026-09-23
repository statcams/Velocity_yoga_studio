import { ViewTransition } from "react";

export default function PageTransition({ children }) {
  return (
    <ViewTransition name="page" exit="page-exit" enter="page-enter" default="none">
      {children}
    </ViewTransition>
  );
}
