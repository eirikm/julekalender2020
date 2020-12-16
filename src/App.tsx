import React, { useState } from "react";
import "./App.css";
import { Klokke } from "./Klokke";
import { Overskrift } from "./Overskrift";
import { Skjemalinje } from "./Skjemalinje";

const App = () => {
  const [harStartet, setHarStartet] = useState<boolean>(false);
  const [sekunder, setSekunder] = useState<number>(2345);

  const nullstill = () => {
    console.log("nullstill");
    setSekunder(0);
  };

  const startstopp = () => {
    if (harStartet) {
      console.log("stopp");
    } else {
      console.log("start");
    }
    setHarStartet(!harStartet);
  };

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <Overskrift />

          <Skjemalinje
            bildeUrl="https://static.wikia.nocookie.net/littlebigplanet/images/a/aa/Popit_lbp_2.jpg"
            beskrivelse="tutorial"
            tidSpart="-1.2"
            skjematid="0:48"
          />
          <Skjemalinje
            bildeUrl="https://cdn.staticneo.com/w/littlebigplanet/King.png"
            beskrivelse="konge"
            tidSpart="+17.5"
            skjematid="5:55"
          />
          <Skjemalinje
            bildeUrl="https://static.wikia.nocookie.net/littlebigplanet/images/d/d4/Zola.png"
            beskrivelse="afrika"
            tidSpart="(gjenstående tid til skjema)"
            skjematid="29:13"
          />
          <Skjemalinje
            bildeUrl="https://static.wikia.nocookie.net/littlebigplanet/images/9/94/Frida.jpg"
            beskrivelse="bruden"
            tidSpart=""
            skjematid="33:10"
          />

          <tr>
            <td colSpan={4} align="right">
              <Klokke sekunder={sekunder} />
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
              <button style={{ width: "100%" }} onClick={startstopp}>
                <span style={{ fontSize: "200%" }}>
                  {harStartet ? "stopp" : "start"}
                </span>
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button
                style={{ width: "100%" }}
                disabled={harStartet}
                onClick={nullstill}
              >
                <span style={{ fontSize: "200%" }}>nullstill</span>
              </button>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
};

export default App;
