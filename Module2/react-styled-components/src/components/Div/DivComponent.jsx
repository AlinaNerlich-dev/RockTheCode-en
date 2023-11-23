const DivComponent = ({ className, children }) => {
  return (
    <div className={className}>
      <h3>Test</h3>
      <p>{children}</p>
    </div>
  );
};

export default DivComponent;
