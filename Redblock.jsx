
const RedBlock = ({ content }) => {
    return (
      <div style={styles.redBlock}>
        <p>{content}</p>
      </div>
    );
  };
  
  const styles = {
    redBlock: {
      backgroundColor: "red",
      color: "white",
      padding: "20px",
      textAlign: "center",
      borderRadius: "8px",
    },
  };
  
  export default RedBlock;
  