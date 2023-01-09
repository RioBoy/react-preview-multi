import React, { useState } from 'react';
import IframeWrapper from './components/IframeWrapper';

function App() {
  const [previewMode, setPreviewMode] = useState('desktop');

  return (
    <div className="container-fluid">
      <div className="row page-content">
        <div className="col-auto d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary mr-3"
            onClick={() => setPreviewMode('mobile')}
          >
            Mobile
          </button>
          <button
            className="btn btn-success ml-3"
            onClick={() => setPreviewMode('desktop')}
          >
            Desktop
          </button>
        </div>
        <div className="col bg-cultured d-flex justify-content-center align-items-center py-5">
          <IframeWrapper
            title="content-iframe"
            mode={previewMode}
            className="rounded-lg"
          >
            <div className="px-4">
              <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Link
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
              <main className="mt-5">
                <form>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Check me out
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </main>
            </div>
          </IframeWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
