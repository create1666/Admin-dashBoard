import { Publish } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/CHART/Chart";
import "./Product.css";
import { productData } from "./productData/productDumydata";

export const Product = () => {
  return (
    <div className="product">
      <div className="producTitleContainer">
        <div className="productTitle">Product</div>
        <Link to="/newproduct">
          <button className="productAddBtn">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bond-michael-godard.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">234</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">6234</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="Apple Airpods" />
            <label htmlFor="">In stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bond-michael-godard.jpg" alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish/>
              </label>
              <input type="file" id="file" style={{display: "none"}}/>
            </div>
            <button className="productBttn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
