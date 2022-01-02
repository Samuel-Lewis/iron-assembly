import {
    Button,
    Result
} from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <Result
      icon={
        <img
          src="https://static.wikia.nocookie.net/minecraft/images/3/3e/MissingTextureBlock.png"
          alt=""
        />
      }
      title="404 - Page not found"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
