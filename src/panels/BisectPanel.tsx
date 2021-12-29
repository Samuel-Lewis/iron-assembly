import { Typography } from "antd";
import React from "react";

const { Paragraph: P, Link: A } = Typography;

export const BisectPanel: React.FC = () => {
  return (
    <div className="panel-bisect center">
      <P>
        All Iron Assembly servers are hosted with{" "}
        <A href="https://www.bisecthosting.com/clients/aff.php?aff=4183">
          Bisect Hosting
        </A>
      </P>
      <A href="https://www.bisecthosting.com/clients/aff.php?aff=4183">
        <img
          width={300}
          src="https://www.bisecthosting.com/images/logos/logo.svg"
          alt=""
        />
      </A>
    </div>
  );
};
