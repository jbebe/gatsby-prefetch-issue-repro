import { GetServerDataProps } from "gatsby";
import React from "react";
/*
export default function Post() {
  return <h1>ASDDASASDASDAS</h1>
}
*/

type Props = {
  serverData: string;
};

export default function Post({ serverData }: Props) {
  return <h1>{serverData}</h1>
}

export const getServerData = (props: GetServerDataProps) => props.url;
