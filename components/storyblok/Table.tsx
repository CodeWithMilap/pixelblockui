import React from "react";

const Table = ({ blok }: any) => {
  if (!blok || !blok.body.thead || !blok.body.tbody) {
    return null; // Return null if data is not available or incomplete
  }

  return (
    <table>
      <thead>
        <tr>
          {blok.body.thead.map((header: any) => (
            <th className="text-left" key={header._uid}>
              {header.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {blok.body.tbody.map((row: any) => (
          <tr key={row._uid}>
            {row.body.map((cell: any) => (
              <td key={cell._uid}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
