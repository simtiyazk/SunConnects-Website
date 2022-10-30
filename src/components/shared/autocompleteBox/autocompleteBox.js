import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function AutocompleteBox(props) {

  const [sugestions, SetSugestions] = useState([]);
  const [showList, SetShowList] = useState(false);
  const [userInput, SetuserInput] = useState("");

  const items = props.items;

  const textInput = useRef(null);

  useEffect(() => {
    if (showList) {
      document.addEventListener("click", inactiveList, false);
    }
  }, [showList]);

  function activeList(e) {
    e.preventDefault();
    SetSugestions(items);
    SetShowList(false);
  }

  function filterList(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
      val = val.replace(/[^A-Za-z]/ig, '')
      SetuserInput(val);
      if(val === ''){
        SetShowList(false);
        return;
      }
      const filteredItems = items.filter(item => {
        let input = val.toLocaleLowerCase();
        let regExpr = new RegExp('^'+input,"g");
        if(regExpr.exec(item.text.toLocaleLowerCase()) !== null){
          return item;
        }
      });
      SetSugestions(filteredItems);
      if(filteredItems.length > 0){
        SetShowList(true);
      }else{
        SetShowList(false);
      }

  }

  function inactiveList() {
    SetShowList(false);
    document.removeEventListener("click", inactiveList, false);
  }

  return (
    <div className="autocompleteBox">
      <div className="input-field">
        <input
          type="text"
          ref={textInput}
          onClick={activeList}
          onChange={filterList}
          value={userInput}
          placeholder={"Search by product name"} />
        {showList && <img src={require('../../../assets/images/close.svg')} alt="close" onClick={inactiveList} />}
      </div>
      {showList &&
        <ul>
          {sugestions.map((sugestion, i) => (
            <li key={i}>
              <Link to={sugestion.link} dangerouslySetInnerHTML={{ __html: sugestion.text }} onClick={inactiveList} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default AutocompleteBox;
