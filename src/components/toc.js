import React, { useEffect, useState } from "react"
import styled from 'styled-components'

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}


function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });
    return () => {
      itemIds.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, [itemIds]);
  return activeId;
}

function renderItems(items, activeId) {
  return (
      <div>
          {items.map((item) => {
            return (
            <li key={item.url}>
                <a
                href={item.url}
                style={{
                    color: activeId === item.url.slice(1) ? "tomato" : "green",
                }}
                >
                {item.title}
                </a>
            </li>
            );
        })}
      </div>
            
  );
}
function ToC(props) {
  const idList = getIds(props.items);
  const activeId = useActiveId(idList);
  return (
    <Toc>
        <details open>
            <Sum>Table of contents</Sum>
            <ol>
                <InnerScroll>
                    {renderItems(props.items, activeId)}
                </InnerScroll>
            </ol>
        </details>
    </Toc>
  );
}

const Sum = styled.summary`
    font-size: 30px
`

const Toc = styled.ul`
  position: fixed;
  left: calc(75%);
  top: calc(15%);
  max-height: 50vh;
  width: 310px;
  display: flex;
  li {
    margin-top: 20px;
  }
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`

export default ToC;