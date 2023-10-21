import React from "react";
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Startup Name</th>
            <th className="expand">Description</th>
            <th>Priority Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const priorityClass = `label label-${row.PriorityLevel}`;
            return (
              <tr key={idx}>
                <td>{row.startupName}</td>
                <td>{row.description}</td>
                <td>
                  <span className={priorityClass}>{row.PriorityLevel}</span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill onClick={() => editRow(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
