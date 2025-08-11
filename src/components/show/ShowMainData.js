import { Star } from "../styled";
import { Headline, MainDataWrapper, TagList } from "./ShowMainData.styled";
const IMG_PLACEHOLDER = "https://via.placeholder.com/250x375?text=No+Image";
const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img
        src={image ? image.original : IMG_PLACEHOLDER}
        alt={`${name} cover`}
      />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating?.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{
            __html: summary || "No summary available.",
          }}
        />
        {tags && tags.length > 0 && (
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        )}
      </div>
    </MainDataWrapper>
  );
};
export default ShowMainData;
