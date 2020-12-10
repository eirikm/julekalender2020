import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { convertCompilerOptionsFromJson } from "typescript";

function App() {
  const [harStartet, setHarStartet] = useState<boolean>(false)
  const [timer, settimer] = useState<number>(50)


  const nullstill = () => {
     console.log("nullstill")
     settimer (0)      
    }

  const startstopp = () => {
    if (harStartet) {
      console.log("stopp");
     
    }
    else{
      console.log("start")
      
    }
    setHarStartet(!harStartet)
  }
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td colSpan={4}>Little Big Planet</td>
          </tr>
          <tr>
            <td colSpan={4}>Any% no overlord</td>
          </tr>

          <tr className="oddetall">
            <td>
              <img
                className="icon"
                src="https://static.wikia.nocookie.net/littlebigplanet/images/a/aa/Popit_lbp_2.jpg"
              />
            </td>
            <td align="left">tutorial</td>
            <td className="minustid">-1,2</td>
            <td align="right">0:48</td>
          </tr>
          <tr className="partall">
            <td>
              <img
                src="https://cdn.staticneo.com/w/littlebigplanet/King.png"
                className="icon"
              />
            </td>
            <td align="left">konge</td>
            <td className="plusstid">+17,5</td>
            <td align="right">5:55</td>
          </tr>
          <tr className="nå">
            <td>
              <img
                className="icon"
                src="https://static.wikia.nocookie.net/littlebigplanet/images/d/d4/Zola.png"
              />
            </td>
            <td align="left">afrika</td>
            <td>(gjenstående tid til skjema tid)</td>
            <td align="right">29:13</td>
          </tr>
          <tr className="partall">
            <td>
              <img
                className="icon"
                src="https://static.wikia.nocookie.net/littlebigplanet/images/9/94/Frida.jpg"
              />
            </td>
            <td align="left">bruden</td>
            <td></td>
            <td align="right">33:10</td>
          </tr>
          <tr>
            <td colSpan={4} align="right">
              <span className="klokke plusstid">
                {timer}
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span className="litentekst minustid">total time save: 0:06</span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span className="litentekst plusstid ">
                total time loss: 0:06
              </span>
            </td>
          </tr>

          <tr>
            <td colSpan={4}>
              <button style={{ width: "100%" }}
                onClick={startstopp}
              >
                <span style={{ fontSize: "200%" }}>
                  { harStartet ? "stopp" : "start"}
                </span>
              </button>
              
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button style={{ width: "100%" }} disabled={harStartet}
              onClick={nullstill}
              >
                <span style={{ fontSize: "200%" }}>
                 nullstill
                </span>
              </button>
              
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
