import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import "./serie.css";

export default function Serie() {
  const location = useLocation();
  const serie = location.serie;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Serie</h1>
        <Link to="/newserie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={serie.img} alt="" className="productInfoImg" />
            <span className="productName">{serie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{serie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{serie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{serie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{serie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>serie Title</label>
            <input type="text" placeholder={serie.title} />
            <label>Year</label>
            <input type="text" placeholder={serie.year} />
            <label>Genre</label>
            <input type="text" placeholder={serie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={serie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={serie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={serie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={serie.img} alt="" className="productUploadImg" />
              <label>
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
