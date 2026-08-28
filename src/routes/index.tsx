import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acesso Premium — Prévias Exclusivas" },
      {
        name: "description",
        content:
          "Desbloqueie mais de 50.000 conteúdos +18 exclusivos atualizados diariamente. Assista prévias gratuitas agora.",
      },
      { property: "og:title", content: "Acesso Premium — Prévias Exclusivas" },
      {
        property: "og:description",
        content:
          "Desbloqueie mais de 50.000 conteúdos +18 exclusivos atualizados diariamente. Assista prévias gratuitas agora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { httpEquiv: "refresh", content: "0;url=/miniapp.html" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/miniapp.html");
  }, []);
  return null;
}
