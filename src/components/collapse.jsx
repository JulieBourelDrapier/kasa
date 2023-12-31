import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';



const CollapseContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 38px;
  }
`

const CollapseHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ff6060;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding-bottom: 10px;
  }
`

const CollapseTitle = styled.h2`
  color: #fff;
  padding-left: 10px;
  font-size: 13px;
  margin: 0;
  padding-top: 6px;

  @media (min-width: 768px) {
    font-size: 18px;
    padding-top: 9px;
    padding-left: 16px;
  }
`
const CollapseArrow = styled(FontAwesomeIcon)` 
  position: relative;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 12px;
  transition: transform 0.5s ease;

  @media (min-width: 768px) {
    font-size: 20px;
    right: 20px;
  }
`

const CollapseContent = styled.p`
  background-color: rgba(246, 246, 246, 1);
  color: #ff6060;
  margin: 0;
  padding: 20px;
  font-size: 12px;
  transition: opacity 1s;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  `

  const CollapseLi = styled.li`
  // background-color: rgba(246, 246, 246, 1);
  color: #ff6060;
  margin: 0;
  padding-bottom: 4px;
  font-size: 12px;
  transition: opacity 1s;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  `
  const CollapseDiv = styled.div`
  background-color: rgba(246, 246, 246, 1);
  padding: 20px 20px 16px 20px;
  `
 

function Collapse({ title, content, list= false }) {
  const [expanded, setExpanded] = useState(false);
  const [style, setStyle] = useState({ opacity: 0.2 });

  useEffect(() => {
        setTimeout(function () {
          setStyle({ opacity: expanded ? 1 : 0 });
        }, 1)
  }, [expanded])
  
  return (
    <CollapseContainer className="collapse">
      <CollapseHeader className="collapse-header" onClick={() => {setExpanded(!expanded)}}>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseArrow 
        src={FontAwesomeIcon} 
        icon={faAngleUp} 
        $expanded={expanded.toString()} 
        style={{ transform: expanded ? 'rotate(-180deg)' : 'rotate(0deg)' }} 
        />     
      </CollapseHeader>
      {expanded && list && (
        <CollapseDiv className="collapse-content">
          <ul>
            {content.split('\n').map((item, index) => <CollapseLi key={`collapse-li-${index}`} $expanded={expanded.toString()} style={style}>{item}</CollapseLi>)}
          </ul>
        </CollapseDiv>
      )}
      {expanded && !list && (
        <div className="collapse-content" >
          <CollapseContent $expanded={expanded.toString()} style={style}>{content}</CollapseContent>
        </div>
      )}
    </CollapseContainer>
  );
}

export default Collapse;