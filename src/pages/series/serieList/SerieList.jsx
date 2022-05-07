import { deleteSerie, getSeries } from "context/serieContext/apiCalls";
import { SerieContext } from "context/serieContext";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./serieList.css";

export default function SerieList() {
  const { series, dispatch } = useContext(SerieContext);

  useEffect(() => {
    getSeries(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteSerie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "serie",
      headerName: "Serie",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/series/" + params.row._id, serie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={series}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
