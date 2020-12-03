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

          <tr>
            <td>(bilde)</td>
            <td>tutorial</td>
            <td style={{ color: "blue" }}>-1,2</td>
            <td align="right">0:48</td>
          </tr>
          <tr>
            <td>(bilde)</td>
            <td>konge</td>
            <td style={{ color: "pink" }}>-7,5</td>
            <td>5:55</td>
          </tr>
          <tr style={{ backgroundColor: "grey" }}>
            <td>(bilde)</td>
            <td>afrika</td>
            <td>(gjenstående tid til skjema tid)</td>
            <td>29:13</td>
          </tr>
          <tr>
            <td>(bilde)</td>
            <td>bruden</td>
            <td></td>
            <td>33:10</td>
          </tr>
          <tr>
            <td colSpan={4} align="right">
              <span style={{ color: "#f0f", fontSize: "500%" }}>25:10</span>
            </td>
          </tr>
          <tr>
            <td colSpan={4} align="left">
              <span style={{ fontSize: "50%", color: 'green' }}>
                total time save: 0:06
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
