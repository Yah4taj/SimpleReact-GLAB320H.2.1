


const Header = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "10px",
    textAlign: "center",
  },
};

export default Header;
