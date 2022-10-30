import { Box } from "@mui/system";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "grey", py: 2 }}>
      <footer>
        <div style={{ color: "#ffffff", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h3 style={{ marginLeft: "5px" }}> My React Store</h3>
          </div>
          <div style={{ fontSize: "14px" }}>my-react-shop</div>
        </div>
      </footer>
    </Box>
  );
}
