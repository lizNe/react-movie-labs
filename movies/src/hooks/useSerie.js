import { useEffect, useState } from "react";
import {getSingleSeries} from '../api/tmdb-api'

const useSerie = id => {
  const [serie, setSerie] = useState(null);
  useEffect(() => {
    getSingleSeries(id).then(serie => {
      setSerie(serie);
    });
  }, [id]);
  return [serie, setSerie];
};

export default useSerie;