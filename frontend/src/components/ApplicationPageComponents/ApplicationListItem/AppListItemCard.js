import React from "react";
// import TextUrl from "../../TextUrl";
import Card from "react-bootstrap/Card";
import truncateTextEllipsis from "../../../utils/truncateTextEllipsis";
import {
  AiOutlineLink,
  AiOutlineGlobal,
  AiFillWindows,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";
// import ApplicationDetail from "../ApplicationDetail/ApplicationDetail";
// import CardLink from "../../CardLink";

const AppListItemCard = ({ item, onViewDetail = () => {} }) => {
  const appTypeIcon = (type) => {
    let icon = <></>;
    switch (type) {
      case "Web Application":
        icon = <AiOutlineGlobal />;
        break;
      case "Windows Application":
        icon = <AiFillWindows />;
        break;
      case "Android Application":
        icon = <AiFillAndroid />;
        break;
      case "IOS Application":
        icon = <AiFillApple />;
        break;
      default:
        break;
    }
    return icon;
  };

  return (
    <Card className={"appCard appCard-" + item.type.id}>
      <Card.Body>
        <Card.Title className={"card-title-" + item.type.id}>
          {/* <TextUrl text={item.name} url={item.url} /> */}
          {item.url.length > 0 ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              <AiOutlineLink /> {item.name}
            </a>
          ) : (
            item.name
          )}
          <div className={"appType appType-" + item.type.id}>
            {/* <strong>Type: </strong> */}
            {/* {item.type ? item.type.name : ""} */}
            {appTypeIcon(item.type ? item.type.name : "")}
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
