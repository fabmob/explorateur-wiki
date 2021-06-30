import React, { useState, useEffect } from "react";
import { useQueryParam, BooleanParam, withDefault } from "use-query-params";

import UXContext from "utils/UXContext";

export default function UXProvider(props) {
  const [embedOpen, setEmbedOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [typeShare, setTypeShare] = useState("simulator");
  const [details, setDetails] = useState(false);

  const [displayTitle, setDisplayTitle] = useQueryParam(
    "title",
    withDefault(BooleanParam, true)
  );

  const [installPrompt, setInstallPrompt] = useState(null);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      setInstallPrompt(e);
    });
  }, []);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  const isInStandaloneMode = () =>
    "standalone" in window.navigator && window.navigator.standalone;
  const [iOSPrompt, setIOSPrompt] = useState(false);
  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setIOSPrompt(true);
    }
  }, []);

  return (
    <UXContext.Provider
      value={{
        embedOpen,
        setEmbedOpen: (value) => {
          if (value) {
            setShareOpen(false);
            setContactOpen(false);
            setTypeShare("simulator");
          }
          setEmbedOpen(value);
        },
        shareOpen,
        setShareOpen: (value) => {
          if (value) {
            setEmbedOpen(false);
            setContactOpen(false);
            setTypeShare("simulator");
          }
          setShareOpen(value);
        },
        contactOpen,
        setContactOpen: (value) => {
          if (value) {
            setShareOpen(false);
            setEmbedOpen(false);
            setTypeShare("simulator");
          }
          setContactOpen(value);
        },
        details,
        setDetails,
        typeShare,
        setTypeShare,
        installPrompt,
        iOSPrompt,
        displayTitle,
        setDisplayTitle,
      }}
    >
      {props.children}
    </UXContext.Provider>
  );
}
