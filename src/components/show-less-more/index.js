import { useState } from "react";

const ShowLessMore = (value = "") => {
  const [showMore, setShowMore] = useState(false);

  const dataToShow =
    value?.length >= 100
      ? value.slice(0, showMore ? value?.length : 100)
      : value;

  return (
    <div>
      {dataToShow}
      {value?.length >= 100 ? (
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <span className="show-data"> Show Less</span>
          ) : (
            <span className="show-data">...Show More</span>
          )}
        </span>
      ) : (
        ``
      )}
    </div>
  );
};

export default ShowLessMore;
