import Suggestions from "components/misc/Suggestions";
import useMounted from "hooks/useMounted";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchContext from "utils/SearchContext";
import { fetchLastCommuns } from "wikiAPI.js";
import Fuse from "../../node_modules/fuse.js/dist/fuse.basic.esm.min.js";
import NotFound from "./results/NotFound";
import Result from "./results/Result";

const Wrapper = styled.div`
  min-height: 22em;
`;
const StyledLink = styled(Link)`
  position: relative;
  display: block;
  font-size: 1.2rem;
  text-align: center;
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 1000ms 2000ms;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`;
export default function Results(props) {
  const { search } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const mounted = useMounted();

  const [fuse, setFuse] = useState(null);

  console.log(products);
  useEffect(() => {
    if (!products.length) return fetchLastCommuns(setProducts);
    setFuse(
      new Fuse(products, {
        keys: ["title"],
        threshold: 0.3,
        minMatchCharLength: 3,
      })
    );
  }, [products]);

  useEffect(() => {
    if (fuse) {
      setFilteredProducts(fuse.search(search));
    }
  }, [search, products, fuse]);

  return (
    <Wrapper>
      {!search.length ? (
        products.map((product, index) => (
          <Result
            key={product}
            index={index}
            product={product}
            iframe={props.iframe}
          />
        ))
      ) : filteredProducts.length ? (
        filteredProducts.map(
          (product, index) =>
            (!props.iframe || index === 0) && (
              <Result
                key={product}
                index={index}
                product={product.item}
                iframe={props.iframe}
              />
            )
        )
      ) : search.length > 2 ? (
        <NotFound iframe={props.iframe} />
      ) : (
        <Suggestions length={5} iframe={props.iframe} />
      )}
    </Wrapper>
  );
}
