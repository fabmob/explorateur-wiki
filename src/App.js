import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { QueryClient, QueryClientProvider } from "react-query";

import { GlobalStyle } from "utils/styles";
import StyleProvider from "components/providers/StyleProvider";
import ModalProvider from "components/providers/ModalProvider";
import UXProvider from "components/providers/UXProvider";
import ProductProvider from "components/providers/ProductProvider";
import SearchProvider from "components/providers/SearchProvider";

import Web from "components/layout/Web";
import Iframe from "components/layout/Iframe";
import SearchInput from "components/misc/SearchInput";
import CO2EModal from "components/modals/CO2EModal";
import PEFModal from "components/modals/PEFModal";
import LocalModal from "components/modals/LocalModal";
import InstallInstructionsModal from "components/modals/InstallInstructionsModal";
import Months from "views/Months";
import Results from "views/Results";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <UXProvider>
            <StyleProvider>
              <ModalProvider>
                <ProductProvider>
                  <SearchProvider>
                    <GlobalStyle />
                    <Switch>
                      <Route path="/embed">
                        <Iframe>
                          <SearchInput iframe />
                          <Results iframe />
                        </Iframe>
                      </Route>
                      <Route>
                        <Web>
                          <SearchInput />
                          <Switch>
                            <Route path="/months/:month">
                              <Months />
                            </Route>
                            <Route path="/">
                              <Results />
                            </Route>
                          </Switch>
                        </Web>
                      </Route>
                    </Switch>
                    <CO2EModal />
                    <PEFModal />
                    <LocalModal />
                    <InstallInstructionsModal />
                  </SearchProvider>
                </ProductProvider>
              </ModalProvider>
            </StyleProvider>
          </UXProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  );
}

export default App;
