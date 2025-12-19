"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseFooter = () => {
  const { _t } = useTranslationContext();

  return (
    <footer className="container py-10">
      <p>
        {_t("footer.developedBy")}{" "}
        <a
          href="https://github.com/Sgautam0001"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Shivam Gautam
        </a>
      </p>
    </footer>
  );
};

export default BaseFooter;
