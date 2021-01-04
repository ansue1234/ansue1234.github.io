import React, { useEffect, useState } from "react"
import styled from '@emotion/styled'
import tw from "twin.macro"

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
            <ToCElement key={item.url}>
                <ToCLink
                href={item.url}
                style={{
                    color: activeId === item.url.slice(1) ? "tomato" : "green",
                }}
                >
                {item.title}
                </ToCLink>
            </ToCElement>
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
        <Title>Table of contents</Title>
        <InnerScroll>
            {renderItems(props.items, activeId)}
        </InnerScroll>   
    </Toc>
  )
}
// const ToC = ({ headings }) => (
//     <Toc>
//       <Title>Table of contents</Title>
//       <InnerScroll>
//         {console.log(headings)}
//         {headings.map(heading => {
//           if (heading.depth >2 ) {
//             return <div />
//           }
//           return (
//             <ToCElement key={heading.value}>
//               <ToCLink
//                 href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
//               >
//                 {heading.value}
//               </ToCLink>
//             </ToCElement>
//           )
//         })}
//       </InnerScroll>
//     </Toc>
//   )
// }


// const Toc = styled.ul`
//   position: fixed;
//   left: calc(75%);
//   top: calc(15%);
//   max-height: 50vh;
//   width: 310px;
//   display: flex;
//   li {
//     margin-top: 20px;
//   }
// `

const Toc = styled.ul`
  ${tw`bg-white fixed hidden lg:flex flex-col rounded p-3 my-3`};
  width: 15rem;
  left: calc(75%);
  top: calc(15%);
  max-height: 40vh;
`

// const InnerScroll = styled.div`
//   overflow: hidden;
//   overflow-y: scroll;
// `

const Title = tw.summary`text-2xl mb-2`;

const ToCElement = tw.li`p-1 leading-5 ml-4 mb-4 mr-4 leading-3 list-none`;

const ToCLink = tw.a`hover:text-black transition duration-300 no-underline`;

const InnerScroll = styled.div`
  scrollbar-width: thin;
  overflow: hidden auto;
`;

export default ToC;