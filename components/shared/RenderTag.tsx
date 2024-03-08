import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  id: string;
  name: string;
  count?: number;
  showCount?: boolean;
}

const RenderTag = ({ id, name, count, showCount = false }: Props) => {
  return (
    <Link href={`/tags/${id}`}>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
        {showCount && (
          <p className="small-medium text-dark500_light700 pl-2">{count}</p>
        )}
      </Badge>
    </Link>
  );
};

export default RenderTag;
