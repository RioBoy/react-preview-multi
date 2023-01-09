import '../assets/scss/main.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const IframeWrapper = ({ children, title, mode, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const mounNodeStyle = contentRef?.contentWindow?.document?.head;

  const _handleStyleLink = useCallback(() => {
    const cssBootstrap = document.createElement('link');
    cssBootstrap.href = process.env.REACT_APP_BOOTSTRAP_CSS_CDN;
    cssBootstrap.rel = 'stylesheet';
    mounNodeStyle?.appendChild(cssBootstrap);

    const JSFile = [
      process.env.REACT_APP_BOOTSTRAP_JQUERY_CDN,
      process.env.REACT_APP_BOOTSTRAP_JS_CDN,
    ];
    JSFile.forEach((item) => {
      const scriptJS = document.createElement('script');
      scriptJS.src = item;
      mountNode?.appendChild(scriptJS);
    });
  }, [mountNode, mounNodeStyle]);

  useEffect(() => {
    window.addEventListener('load', _handleStyleLink);
  }, [_handleStyleLink]);

  return (
    <iframe
      {...props}
      title={title}
      width={mode === 'desktop' ? '100%' : '425'}
      height="100%"
      frameBorder="0"
      ref={setContentRef}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default IframeWrapper;
