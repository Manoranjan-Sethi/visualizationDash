import React from "react";

function ShowData({ res }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <tr style={{ textAlign: "center" }}>
      <td>{truncate(res?.title, 20)}</td>
      <td>{res.topic}</td>
      <td>{res.added}</td>
      <td>{res.country ? res.country : "N/A"}</td>
      <td>{res.insight}</td>
      <td>{res.intensity ? res.intensity : "N/A"}</td>
      <td>{res.likelihood ? res.likelihood : "N/A"}</td>
      <td>{res.pestle}</td>
      <td>{res.published}</td>
      <td>{res.region ? res.region : "N/A"}</td>
      <td>{res.relevance}</td>
      <td>{res.sector ? res.sector : "N/A"}</td>
      <td>{res.source}</td>
    </tr>
  );
}

export default ShowData;
