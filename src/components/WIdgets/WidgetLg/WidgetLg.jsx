import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgStatus " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTrow">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTrow">
          <td className="widgetLgTdUser">
            <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgUsername"> John</span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgDate">12 Jul 2021</span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgAmount">$500.00</span>
          </td>
          <td className="widgetLgTdBtn">
           
            <Button type={"Approved"} />
          </td>
        </tr>

        <tr className="widgetLgTrow">
          <td className="widgetLgTdUser">
            <img  src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgUsername">Boluwaji </span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgDate">12 Jul 2021</span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgAmount">$500.00</span>
          </td>
          <td className="widgetLgTdBtn">
            <Button type={"Pending"} />
          </td>
        </tr>

        <tr className="widgetLgTrow">
          <td className="widgetLgTdUser">
            <img  src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-shan-patel-2876486.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgUsername">Boluwaji </span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgDate">12 Jul 2021</span>
          </td>
          <td className="widgetLgTd">
            <span className="widgetLgAmount">$500.00</span>
          </td>
          <td className="widgetLgTdBtn">
          <Button type={"Declined"} />

          </td>
        </tr>
      </table>
    </div>
  );
}
