import { getMoviesNew } from "context/movieContext/apiCalls";
import { MovieContext } from "context/movieContext";
import { useContext, useEffect } from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMoviesNew(dispatch);
  }, [dispatch]);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">latest movies adde</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Movie</th>
            <th className="widgetLgTh">AddDate</th>
            <th className="widgetLgTh">Genre</th>
            <th className="widgetLgTh">Type</th>
          </tr>
          {movies.map((movie) => (
            <tr className="widgetLgTr" key={movie._id}>
              <td className="widgetLgUser">
                <img src={movie.img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{movie.title}</span>
              </td>
              <td className="widgetLgDate">
                {new Intl.DateTimeFormat("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(movie.createdAt))}
              </td>
              <td className="widgetLgAmount">{movie.genre}</td>
              <td className="widgetLgStatus">
                {movie.isSeries ? "Series" : "Movie"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
