


import React from "react";

const Content = () => {
  return (
    <main style={styles.main}>
      <div style={styles.contentBox}>
        <p>Welcome to Colorblocking with React</p>
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    backgroundColor: "#4CAF50", // Green background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    color: "white",
  },
};

export default Content;

  