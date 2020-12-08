import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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
              <img src="https://static.wikia.nocookie.net/littlebigplanet/images/a/aa/Popit_lbp_2.jpg"
                className="icon"
              />
            </td>
            <td align="left">tutorial</td>
            <td className="minustid">-1,2</td>
            <td align="right">0:48</td>
          </tr>
          <tr className="partall">
            <td>
            <img src="https://cdn.staticneo.com/w/littlebigplanet/King.png"
                className="icon"
              />
              </td>
            <td align="left">konge</td>
            <td className="plusstid">+17,5</td>
            <td align="right">5:55</td>
          </tr>
          <tr className="nå">
            <td>
            <img src="https://static.wikia.nocookie.net/littlebigplanet/images/d/d4/Zola.png"
                className="icon"
              />
              </td>
            <td align="left">afrika</td>
            <td>(gjenstående tid til skjema tid)</td>
            <td align="right">29:13</td>
          </tr>
          <tr className="partall">
            <td>
            <img src="https://static.wikia.nocookie.net/littlebigplanet/images/9/94/Frida.jpg"
                className="icon"
              />
              </td>
            <td align="left">bruden</td>
            <td></td>
            <td align="right">33:10</td>
          </tr>
          <tr>
            <td colSpan={4} align="right">
              <span className="klokke plusstid">25:10</span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span className="litentekst minustid" >
                total time save: 0:06
              </span>
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
              <button style={{ width: "100%" }}>
                <span style={{fontSize: '200%'}}>start / stopp</span>
              </button>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
