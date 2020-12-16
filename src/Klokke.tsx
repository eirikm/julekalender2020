import React from "react";

type Props = {
  sekunder: number;
};

export const Klokke = (props: Props) => {
  // tt:mm:ss
  // 00:00:50

  const pad = (s: string) => {
    if (s.length === 1) {
      return "0" + s;
    } else {
      return s;
    }
  };

  const hentSekunder = () => {
    var sek = props.sekunder;

    while (sek > 59) {
      sek = sek - 60;
    }

    return sek.toString();
  };

  const hentMinutter = () => {
    var sek = props.sekunder;
    var min = 0;

    while (sek > 59) {
      sek = sek - 60;
      min = min + 1;
      if (min > 59) {
        min = min - 60;
      }
    }

    return min.toString();
  };

  const hentTimer = () => {
    var sek = props.sekunder;
    var min = 0;
    var timer = 0;
    while (sek > 59) {
      sek = sek - 60;
      min = min + 1;
      if (min > 59) {
        min = min - 60;
        timer = timer + 1;
      }
    }
    return timer.toString();
  };

  return (
    <span className="klokke plusstid">
      {hentTimer() + ":" + pad(hentMinutter()) + ":" + pad(hentSekunder())}
    </span>
  );
};
