import Navbar from "@/components/Nabvar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
