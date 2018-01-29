
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';
import fetch from 'isomorphic-unfetch';

function rowRenderer (comments, { key, index, isScrolling, isVisible, style }) {
  const comment = comments[index];

  return (
    <div key={key} style={style}>
      {comment.id}: {comment.name}
    </div>
  )
}

const Index = ({ comments }) => (
  <div>

    <h2> NextJS + React Virtualized</h2>

    <p>This is a test project for combining NextJS and React-Virtualized.</p>

    <List
      width={800}
      height={600}
      rowCount={comments.length}
      rowHeight={20}
      rowRenderer={(rowArgs) => rowRenderer(comments, rowArgs)}
    />

  </div>
)

Index.getInitialProps = async function() {
  const res = await fetch("http://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    comments: data
  };
}

export default Index;
