import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja Sivathmika — Portfolio" },
      { name: "description", content: "B.Tech CSE undergraduate · MERN stack & AI developer building responsive, scalable web apps." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#07070f", color: "#e8e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
      Loading portfolio…
    </div>
  );
}
