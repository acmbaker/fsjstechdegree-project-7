import Photo from "./Photo";
import NotFound from "./NotFound.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PhotoList = ({ data, performSearch }) => {
  const { search } = useParams();

  useEffect(() => {
    if (search) {
      performSearch(search);
    }
  }, [search]);

  if (data.length !== 0) {
    return (
      <ul>
        {data.map((image, index) => (
          <Photo
            url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`}
            key={index}
          />
        ))}
      </ul>
    );
  } else {
    return <NotFound />
  }
};

export default PhotoList;
