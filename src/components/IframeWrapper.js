import '../assets/scss/main.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const IframeWrapper = ({ children, title, mode, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const mounNodeStyle = contentRef?.contentWindow?.document?.head;

  const _handleStyleLink = useCallback(() => {
    const cssBootstrap = document.createElement('link');
    cssBootstrap.href =
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css'; // bootstrap style CDN
    cssBootstrap.rel = 'stylesheet';
    mounNodeStyle?.appendChild(cssBootstrap);

    const JSFile = [
      'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js', // jquery CDN
      'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js', // bootstrap js CDN
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
