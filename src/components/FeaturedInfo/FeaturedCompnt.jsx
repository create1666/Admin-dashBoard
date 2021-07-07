import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./Featured.css";

const FeaturedCompnt = () => {
  return (
    <div>
      <div className="featured">
        <div className="featured__body">
          <div className="featured__bodyInfo">
            <h4 className="featured__bodyTitle">Revenue</h4>
            <div className="featured__bodyMoneyWrapper">
              <span className="featured__bodyMoney">$5,585</span>
              <span className="featured__bodyMoneyRate">
                +40% <ArrowUpward />
              </span>
            </div>
            <span className='featured__bodyBottom'>Compared to last month</span>
          </div>

          <div className="featured__bodyInfo">
            <h4 className="featured__bodyTitle">Cost</h4>
            <div className="featured__bodyMoneyWrapper">
              <span className="featured__bodyMoney">$2,585</span>
              <span className="featured__bodyMoneyRate">
                -20% <ArrowDownward />
              </span>
            </div>
            <span className='featured__bodyBottom'>Compared to last month</span>
          </div>

          <div className="featured__bodyInfo">
            <h4 className="featured__bodyTitle">Sales</h4>
            <div className="featured__bodyMoneyWrapper">
              <span className="featured__bodyMoney">$3,585</span>
              <span className="featured__bodyMoneyRate">
                +40% <ArrowUpward />
              </span>
            </div>
            <span className='featured__bodyBottom'>Compared to last month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompnt;
