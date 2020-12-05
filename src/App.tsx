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

          <tr style={{ backgroundColor: "#000" }}>
            <td>
              <img src="https://static.wikia.nocookie.net/littlebigplanet/images/a/aa/Popit_lbp_2.jpg"
                width="60px"
                height="60px"
              />
            </td>
            <td align="left">tutorial</td>
            <td style={{ color: "#0f0" }}>-1,2</td>
            <td align="right">0:48</td>
          </tr>
          <tr style={{ backgroundColor: "#222" }}>
            <td>
            <img src="https://cdn.staticneo.com/w/littlebigplanet/King.png"
                width="60px"
                height="60px"
              />
              </td>
            <td align="left">konge</td>
            <td style={{ color: "#f00" }}>+17,5</td>
            <td align="right">5:55</td>
          </tr>
          <tr style={{ backgroundColor: "#008" }}>
            <td>
            <img src="https://static.wikia.nocookie.net/littlebigplanet/images/d/d4/Zola.png"
                width="60px"
                height="60px"
              />
              </td>
            <td align="left">afrika</td>
            <td>(gjenstående tid til skjema tid)</td>
            <td align="right">29:13</td>
          </tr>
          <tr style={{ backgroundColor: "#222" }}>
            <td>
            <img src="https://static.wikia.nocookie.net/littlebigplanet/images/9/94/Frida.jpg"
                width="60px"
                height="60px"
              />
              </td>
            <td align="left">bruden</td>
            <td></td>
            <td align="right">33:10</td>
          </tr>
          <tr>
            <td colSpan={4} align="right">
              <span style={{ color: "#f00", fontSize: "500%" }}>25:10</span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span style={{ fontSize: "80%", color: 'green' }}>
                total time save: 0:06
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span style={{ fontSize: "80%", color: '#ff0000' }}>
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
