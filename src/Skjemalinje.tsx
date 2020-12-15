import React from "react";

type Props = {
  bildeUrl: string;
  beskrivelse: string;
  tidSpart: string;
  skjematid: string;
};

export const Skjemalinje = (props: Props) => {
  const tidSpartclass = props.tidSpart.startsWith("+")
    ? "plusstid"
    : "minustid";

  return (
    <tr className="oddetall">
      <td>
        <img alt="" className="icon" src={props.bildeUrl} />
      </td>
      <td align="left">{props.beskrivelse}</td>
      <td className={tidSpartclass}>{props.tidSpart}</td>
      <td align="right">{props.skjematid}</td>
    </tr>
  );
};
