import React from "react";
import TextUrl from "../../TextUrl";
import Card from "react-bootstrap/Card";
import truncateTextEllipsis from "../../../utils/truncateTextEllipsis";
// import ApplicationDetail from "../ApplicationDetail/ApplicationDetail";
// import CardLink from "../../CardLink";

const AppListItemCard = ({ item, onViewDetail = () => {} }) => {
  return (
    <Card className={"appCard appCard-" + item.type.id}>
      <Card.Body>
        <Card.Title className={"card-title-" + item.type.id}>
          <TextUrl text={item.name} url={item.url} />
          <div className={"appType appType-" + item.type.id}>
            {/* <strong>Type: </strong> */}
            {item.type ? item.type.name : ""}
          </div>
        </Card.Title>
        <Card.Subtitle>
          <div className="appCat">
            <strong>Categories: </strong>
            {item.categories.map((c) => c.name).join(", ")}
          </div>
        </Card.Subtitle>
        <Card.Text className="appDesc">
          {truncateTextEllipsis(item.description)}
        </Card.Text>
        {/* <Card.Link href="#">More...</Card.Link> */}
        {/* <CardLink
          onViewDetail={onViewDetail}
        /> */}
        <Card.Link href="#" onClick={onViewDetail}>
          More...
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default AppListItemCard;
